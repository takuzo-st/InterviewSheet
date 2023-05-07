import React from "react";
import CheckList from "./CheckList";
import BasicInfo from "../BasicInfo/BasicInfo";

function InterviewSheetSubmitted() {
  return (
    <div className="interview-sheet-submitted">
      <h1>問診票</h1>
      <p>以下の内容で送信しました。</p>
      <BasicInfo />
      <CheckList />
    </div>
  );
}
export default InterviewSheetSubmitted;
