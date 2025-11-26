import React from "react";
import ElectricBorder from "./Electric";

const data = [
  { day: "Mon", left: "Chest", right: "Abs" },
  { day: "Tue", left: "Back", right: "Biceps" },
  { day: "Wed", left: "Shoulder", right: "Triceps" },
  { day: "Thu", left: "Leg", right: "Forearms" },
  { day: "Fri", left: "Biceps", right: "Triceps" },
  { day: "Sat", left: "Abs", right: "Forearms" },
  { day: "Sun", left: "Rest", right: "Rest" },
];

const boxStyle = {
  padding: "16px",
  minWidth: "150px",
  textAlign: "center",
  fontWeight: "600",
  fontSize: "18px",
  color: "white",
  borderRadius: "16px",
  background: "rgba(255,255,255,0.05)",
};

const ExerciseTimetable = () => {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
      }}
    >
      {data.map((item, i) => (
        <div
          key={i}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
            color: "white",
          }}
        >
          {/* Day Column */}
          <div style={{ width: "80px", fontSize: "20px", fontWeight: "700" }}>
            {item.day}
          </div>

          {/* Card 1 */}
          <ElectricBorder
            color="#e63b3bff"
            speed={1}
            chaos={0.4}
            thickness={2}
            style={{ borderRadius: 16, flex: 1 }}
          >
            <div style={boxStyle}>{item.left}</div>
          </ElectricBorder>

          {/* Card 2 */}
          <ElectricBorder
            color="#ec2a2aff"
            speed={1}
            chaos={0.4}
            thickness={2}
            style={{ borderRadius: 16, flex: 1 }}
          >
            <div style={boxStyle}>{item.right}</div>
          </ElectricBorder>
        </div>
      ))}
    </div>
  );
};

export default ExerciseTimetable;
