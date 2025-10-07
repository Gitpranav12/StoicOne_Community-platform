import React from "react";

export default function TopHeader() {
  return (
    <header
      style={{
        width: "100%",
        background: "#fff",
        boxShadow: "rgba(0, 0, 0, 0.25) 0px 25px 50px -12px", 
        display: "flex",
        alignItems: "center",
        padding: "0px 15px",
        minHeight: 60,
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        boxSizing: "border-box"
      }}
    >
      <span style={{
        fontWeight: 600,
        fontSize: "1.35rem",
        marginRight: 18,
        color: "#16181c",
        letterSpacing: 0.1
      }}>
        Contest Platform
      </span>
      <span style={{
        background: "#F2F3F6",
        borderRadius: 8,
        padding: "2px 14px",
        fontWeight: 500,
        marginLeft: 6,
        fontSize: "15.2px",
        letterSpacing: 0
      }}>
        User
      </span>
      <div style={{ flex: 1 }}></div>
      {/* <button
        style={{
          border: "1px solid #e3e6ee",
          background: "#fff",
          borderRadius: 11,
          padding: "7px 18px",
          fontWeight: 500,
          fontSize: "15.5px",
          marginRight: 16,
          color: "#141722",
          cursor: "pointer",
        }}
      >
        Switch to Admin
      </button> */}
      <span
        style={{
          display: "flex",
          alignItems: "center",
          background: "none",
          border: "none",
          borderRadius: "50%",
          width: 28,
          height: 28,
          justifyContent: "center"
        }}
      >
        <svg width="21" height="21" fill="none" stroke="#262626" strokeWidth="2" viewBox="0 0 24 24">
          <circle cx="12" cy="8" r="4" />
          <path d="M4 20c0-4 4-7 8-7s8 3 8 7" />
        </svg>
      </span>
    </header>
  );
}
