import React from "react";
import { useState, useEffect } from "react";

export default function Resume() {
  const [resume, setResume] = useState({});

  //change this to use axios//
  useEffect(() => {
    fetch("http://localhost:5000/create-resume-test")
      .then((response) => response.json([{}]))
      .then((data) => {
        setResume(data);
        console.log(data);
      });
  }, []);

  return (
    <div>
      <h1>Resume</h1>
    </div>
  );
}
