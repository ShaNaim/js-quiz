import React from "react";
import "./top-nav.css";

export default function Topnav() {
  return (
    <>
      <div className="top-nav border-b border-gray-200">
        <span className="app-name">App Name</span>
        <div>Middle Section</div>
        <div>End Section</div>
      </div>
    </>
  );
}
