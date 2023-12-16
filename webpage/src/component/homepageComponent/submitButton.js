import React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Button = styled.button``;
export default function submitButton(resume) {
  const navigate = useNavigate();

  async function submit(event) {
    event.preventDefault();
    try {
      await axios.post("http://localhost:5000/send_test", {
        message: "success",
      });
      navigate("/resume");
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div>
      <Button onClick={submit}>Submit</Button>
    </div>
  );
}

//get my resume and post it in the backend;
