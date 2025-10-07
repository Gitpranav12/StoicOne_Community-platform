const pool = require("../db");

async function seedAchievementsForUser(userId) {
  // 🔹 Badges with description and icon
  const badgesRules = [
    { name: "Participation", type: "questions", requirement: 3, description: "Asked 3 questions", icon: "📝" },
    { name: "Curious Mind", type: "questions", requirement: 10, description: "Asked 10 questions", icon: "🤔" },
    { name: "Researcher", type: "questions", requirement: 50, description: "Asked 50 questions", icon: "🔍" },
    { name: "Helping Hand", type: "answers", requirement: 3, description: "Answered 3 questions", icon: "🤝" },
    { name: "Top Contributor", type: "answers", requirement: 10, description: "Answered 10 questions", icon: "🏆" },
    { name: "Bronze", type: "answers", requirement: 20, description: "Answered 20 questions", icon: "🥉" },
    { name: "Silver", type: "answers", requirement: 50, description: "Answered 50 questions", icon: "🥈" },
    { name: "Gold", type: "answers", requirement: 100, description: "Answered 100 questions", icon: "🥇" },
    { name: "Diamond", type: "answers", requirement: 500, description: "Answered 500 questions", icon: "💎" },
    { name: "Community Engagement", type: "comments", requirement: 10, description: "Posted 10 comments", icon: "💬" },
    { name: "Contributor", type: "comments", requirement: 20, description: "Posted 20 comments", icon: "🗣️" },
    { name: "Supportive", type: "comments", requirement: 50, description: "Posted 50 comments", icon: "❤️" },
    { name: "Helping Community", type: "comments", requirement: 100, description: "Posted 100 comments", icon: "🌟" },
    { name: "Popular Question", type: "views", requirement: 1000, description: "Question received 1000 views", icon: "🔥" },
  ];

  // 🔹 Milestones with description and icon
  const milestonesRules = [
    { name: "Expert", type: "answers", requirement: 100, description: "Answered 100 questions", icon: "🏅" },
    { name: "Mentor", type: "answers", requirement: 500, description: "Answered 500 questions", icon: "🥇" },
    { name: "Elite", type: "answers", requirement: 1000, description: "Answered 1000 questions", icon: "💎" },
    { name: "Knowledge Seeker", type: "questions", requirement: 100, description: "Asked 100 questions", icon: "📚" },
    { name: "Rising Star", type: "badges", requirement: 10, description: "Unlocked 10 badges", icon: "🌟" },
    { name: "Explorer", type: "comments", requirement: 500, description: "Posted 500 comments", icon: "🧭" },
  ];

  for (const badge of badgesRules) {
    await pool.query(
      "INSERT IGNORE INTO badges (user_id, name, type, requirement, description, icon, achieved) VALUES (?,?,?,?,?,?,0)",
      [userId, badge.name, badge.type, badge.requirement, badge.description, badge.icon]
    );
  }

  for (const ms of milestonesRules) {
    await pool.query(
      "INSERT IGNORE INTO milestones (user_id, name, type, requirement, description, icon, achieved) VALUES (?,?,?,?,?,?,0)",
      [userId, ms.name, ms.type, ms.requirement, ms.description, ms.icon]
    );
  }
}

module.exports = seedAchievementsForUser;
