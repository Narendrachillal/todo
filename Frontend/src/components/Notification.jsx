// import React from "react";

// export default function Notification({ message, type }) {
//   if (!message) return null;
//   return (
//     <div
//       style={{
//         padding: "10px",
//         margin: "10px 0",
//         borderRadius: "5px",
//         color: type === "error" ? "#b00020" : "#006400",
//         backgroundColor: type === "error" ? "#fdd" : "#cfc",
//       }}
//     >
//       {message}
//     </div>
//   );
// }
export default function Notification({ message, type }) {
  if (!message) return null;
  return (
    <div className={`notification ${type === "error" ? "error" : "success"}`}>
      {message}
    </div>
  );
}
