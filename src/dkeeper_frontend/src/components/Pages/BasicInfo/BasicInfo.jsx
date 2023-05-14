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
      <h1>問診票</h1>
      <div className="basicInfo" >
        <p>
          <label htmlFor="corpName">団体名</label>
          <BasicInfoInput
            name="corpName"
            value={corpName}
            placeholder="Works"
            onChange={handleCorpNameChange}
          />
        </p>
        <p>
          <label htmlFor="corpName">個人番号</label>
          <BasicInfoInput
            name="myNumber"
            value={myNumber}
            placeholder="0123"
            onChange={handleMyNumberChange}
          />
        </p>
        <p>
          <label htmlFor="corpName">名前</label>
          <BasicInfoInput
            name="fullName"
            value={fullName}
            placeholder="山田花子"
            onChange={handleFullNameChange}
          />
        </p>
      </div>
    </header>
  );
}

export default BasicInfo;
