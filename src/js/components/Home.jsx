import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";

function Contador({ seconds }) {
  const one = seconds % 10;
  const two = Math.floor(seconds / 10) % 10;
  const three = Math.floor(seconds / 100) % 10;
  const four = Math.floor(seconds / 1000) % 10;
  const five = Math.floor(seconds / 10000) % 10;
  const six = Math.floor(seconds / 100000) % 10;

  return (
    <div style={{
      textAlign: "center",
      backgroundColor: "#090909",
      padding: "20px",
      margin: "20px",
      borderRadius: "10px"
    }}>
      <div style={{
        display: "inline-block",
        background: "black",
        color: "white",
        width: "80px",
        height: "80px",
        lineHeight: "80px",
        margin: "5px",
        border: "2px solid white",
        borderRadius: "10px",
        fontSize: "30px"
      }}>
        <FontAwesomeIcon icon={faClock} />
      </div>
      {[six, five, four, three, two, one].map((digit, index) => (
        <div key={index} style={{
          display: "inline-block",
          background: "black",
          color: "white",
          width: "80px",
          height: "80px",
          lineHeight: "80px",
          margin: "5px",
          border: "2px solid white",
          borderRadius: "10px",
          fontSize: "30px"
        }}>
          {digit}
        </div>
      ))}
    </div>
  );
}

Contador.propTypes = {
  seconds: PropTypes.number,
};

export default Contador;

