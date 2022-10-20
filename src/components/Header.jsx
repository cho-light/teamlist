import React from "react";
import { Link } from "react-router-dom";

export const header = () => {
  return (
    <div className="header">
      <Link to="/">홈</Link>
      <h2>모두의 마블모두해</h2>
    </div>
  );
};

export default header;
