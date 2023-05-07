import React, { useState } from "react";
import BasicInfoInput from "./BasicInfoInput";

function BasicInfo() {
  const [corpName, setCorpName] = useState("");
  const [myNumber, setMyNumber] = useState("");
  const [fullName, setFullName] = useState("");

  const handleCorpNameChange = (event) => {
    setCorpName(event.target.value);
  };

  const handleMyNumberChange = (event) => {
    setMyNumber(event.target.value);
  };

  const handleFullNameChange = (event) => {
    setFullName(event.target.value);
  };
  return (
    <header>
      <div>
        <h1>問診票</h1>
        <BasicInfoInput
          name="corpName"
          value={corpName}
          placeholder="Works"
          onChange={handleCorpNameChange}
          label="団体名"
        />
        <BasicInfoInput
          name="myNumber"
          value={myNumber}
          placeholder="0123"
          onChange={handleMyNumberChange}
          label="個人番号"
        />
        <BasicInfoInput
          name="fullName"
          value={fullName}
          placeholder="山田花子"
          onChange={handleFullNameChange}
          label="氏名"
        />
      </div>
    </header>
  );
}

export default BasicInfo;
