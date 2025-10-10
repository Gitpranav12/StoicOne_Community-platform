const express = require('express');
const router = express.Router();
const db = require('../db');

const multer = require('multer');
const upload = multer({ storage: multer.memoryStorage() }); // store file in memory

//  create contest
router.post('/', async (req, res) => {
  const { title, description, startDate, endDate, status, rounds } = req.body;

  const conn = await db.getConnection();
  await conn.beginTransaction();

  try {
    const [contestResult] = await conn.query(
      'INSERT INTO contests (title, description, start_date, end_date, status) VALUES (?, ?, ?, ?, ?)',
      [title, description, startDate, endDate, status]
    );

    const contestId = contestResult.insertId;

    // Insert rounds & questions
    for (const round of rounds) {
      const [roundResult] = await conn.query(
        'INSERT INTO rounds (contest_id, round_name, type, duration) VALUES (?, ?, ?, ?)',
        [contestId, round.round_name, round.type, round.duration]
      );
      const roundId = roundResult.insertId;

      if (round.type === 'quiz') {
        for (const q of round.questions) {
          await conn.query(
            'INSERT INTO quiz_questions (round_id, text, option_1, option_2, option_3, option_4, correct_index) VALUES (?, ?, ?, ?, ?, ?, ?)',
            [roundId, q.text, q.option_1, q.option_2, q.option_3, q.option_4, q.correct_index]
          );
        }
      } else if (round.type === 'coding') {
        for (const q of round.questions) {
          await conn.query(
            'INSERT INTO coding_questions (round_id, title, description, input_format, output_format, sample_input, sample_output) VALUES (?, ?, ?, ?, ?, ?, ?)',
            [roundId, q.title, q.description, q.inputFormat, q.outputFormat, q.sampleInput, q.sampleOutput]
          );
        }
      }
    }

    await conn.commit();
    conn.release();
    res.json({ success: true, contestId });
  } catch (err) {
    await conn.rollback();
    conn.release();
    console.error(err);
    res.status(500).json({ success: false, error: err.message });
  }
});


// Get contest with rounds & questions
router.get('/:id', async (req, res) => {
  const contestId = req.params.id;
  try {
    const [contestRows] = await db.query('SELECT * FROM contests WHERE id = ?', [contestId]);
    if (!contestRows.length) return res.status(404).json({ error: 'Contest not found' });

    const contest = contestRows[0];

    const [rounds] = await db.query('SELECT * FROM rounds WHERE contest_id = ?', [contestId]);

    for (const round of rounds) {
      if (round.type === 'quiz') {
        const [questions] = await db.query('SELECT * FROM quiz_questions WHERE round_id = ?', [round.id]);
        round.questions = (questions || []).map(q => ({
          ...q,
          options: [q.option_1, q.option_2, q.option_3, q.option_4],
          correctIndex: q.correct_index
        }));
      } else if (round.type === 'coding') {
        const [questions] = await db.query('SELECT * FROM coding_questions WHERE round_id = ?', [round.id]);
        round.questions = (questions || []).map(q => ({
          id: q.id,
          title: q.title,
          description: q.description,
          inputFormat: q.input_format,
          outputFormat: q.output_format,
          sampleInput: q.sample_input,
          sampleOutput: q.sample_output
        }));
      }
    }

    contest.rounds = rounds;
    res.json(contest);

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});


// Get all contests with rounds (optional: include questions if needed)
router.get('/', async (req, res) => {
  try {
    const [contestRows] = await db.query('SELECT * FROM contests ORDER BY start_date DESC');

    const contests = [];

    for (const contest of contestRows) {
      const [rounds] = await db.query('SELECT * FROM rounds WHERE contest_id = ?', [contest.id]);

      // Optionally include questions
      for (const round of rounds) {
        if (round.type === 'quiz') {
          const [questions] = await db.query('SELECT * FROM quiz_questions WHERE round_id = ?', [round.id]);
          round.questions = questions;
        } else if (round.type === 'coding') {
          const [questions] = await db.query('SELECT * FROM coding_questions WHERE round_id = ?', [round.id]);
          round.questions = questions;
        }
      }

      contest.rounds = rounds;
      contests.push(contest);
    }

    res.json(contests);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

//update contest
router.put('/:id', async (req, res) => {
  const contestId = req.params.id;
  const { title, description, startDate, endDate, status, rounds } = req.body;

  const conn = await db.getConnection();
  await conn.beginTransaction();

  try {
    await conn.query(
      'UPDATE contests SET title=?, description=?, start_date=?, end_date=?, status=? WHERE id=?',
      [title, description, startDate, endDate, status, contestId]
    );

    // Remove old rounds & questions
    const [oldRounds] = await conn.query('SELECT id, type FROM rounds WHERE contest_id=?', [contestId]);
    for (const r of oldRounds) {
      if (r.type === 'quiz') await conn.query('DELETE FROM quiz_questions WHERE round_id=?', [r.id]);
      if (r.type === 'coding') await conn.query('DELETE FROM coding_questions WHERE round_id=?', [r.id]);
    }
    await conn.query('DELETE FROM rounds WHERE contest_id=?', [contestId]);

    // Insert updated rounds & questions
    for (const round of rounds) {
      const [roundResult] = await conn.query(
        'INSERT INTO rounds (contest_id, round_name, type, duration) VALUES (?, ?, ?, ?)',
        [contestId, round.round_name, round.type, round.duration]
      );
      const roundId = roundResult.insertId;

      if (round.type === 'quiz') {
        for (const q of round.questions) {

          await conn.query(
            'INSERT INTO quiz_questions (round_id, text, option_1, option_2, option_3, option_4, correct_index) VALUES (?, ?, ?, ?, ?, ?, ?)',
            [roundId, q.text, q.option_1, q.option_2, q.option_3, q.option_4, q.correct_index]
          );

        }
      } else if (round.type === 'coding') {
        for (const q of round.questions) {
          await conn.query(
            'INSERT INTO coding_questions (round_id, title, description, input_format, output_format, sample_input, sample_output) VALUES (?, ?, ?, ?, ?, ?, ?)',
            [roundId, q.title, q.description, q.inputFormat, q.outputFormat, q.sampleInput, q.sampleOutput]
          );
        }
      }
    }

    await conn.commit();
    conn.release();
    res.json({ success: true });

  } catch (err) {
    await conn.rollback();
    conn.release();
    console.error(err);
    res.status(500).json({ success: false, error: err.message });
  }
});


// Delete contest along with rounds and questions
router.delete('/:id', async (req, res) => {
  const contestId = req.params.id;
  const conn = await db.getConnection();
  await conn.beginTransaction();

  try {
    // Get all rounds for this contest
    const [rounds] = await conn.query('SELECT id, type FROM rounds WHERE contest_id=?', [contestId]);

    for (const r of rounds) {
      if (r.type === 'quiz') {
        await conn.query('DELETE FROM quiz_questions WHERE round_id=?', [r.id]);
      } else if (r.type === 'coding') {
        await conn.query('DELETE FROM coding_questions WHERE round_id=?', [r.id]);
      }
    }

    // Delete rounds
    await conn.query('DELETE FROM rounds WHERE contest_id=?', [contestId]);

    // Delete contest
    await conn.query('DELETE FROM contests WHERE id=?', [contestId]);

    await conn.commit();
    conn.release();
    res.json({ success: true });
  } catch (err) {
    await conn.rollback();
    conn.release();
    console.error(err);
    res.status(500).json({ success: false, error: err.message });
  }
});



module.exports = router;
