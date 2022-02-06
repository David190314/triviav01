import React from "react";
import { Link } from "react-router-dom";
import "./ButtonRedirectApp.css";
const ButtonRedirectPages = ({ value, path, functionsButtons }) => {
  return (
    <Link
      to={path}
      onClick={() => {
        functionsButtons();
      }}
      className="button__redirect-app"
    >
      {value}
    </Link>
  );
};

export { ButtonRedirectPages };
