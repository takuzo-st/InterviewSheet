import React from "react";
import BasicInfo from "../BasicInfo/BasicInfo";
import CheckList from "./CheckList";
import { useLocation } from "react-router-dom";

function InterviewSheet() {
  console.log(useLocation().pathname);
  return (
    <div>
      <BasicInfo />
      <CheckList />
    </div>
  );
}

export default InterviewSheet;
