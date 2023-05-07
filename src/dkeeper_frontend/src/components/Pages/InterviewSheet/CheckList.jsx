import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function CheckList() {
  const navigate = useNavigate();

  const [checkItems, setCheckItems] = useState([
    {
      label: "高血圧",
      statuses: ["現在治療中", "経過観察中", "既往症"],
      age: "24",
      values: [false, false, false]
    },
    {
      label: "脂質異常症",
      statuses: ["現在治療中", "経過観察中", "既往症"],
      age: "",
      values: [false, false, false]
    },
    {
      label: "糖尿病",
      statuses: ["現在治療中", "経過観察中", "既往症"],
      age: "",
      values: [false, false, false]
    }
  ]);

  const handleCheckChange = (event) => {
    const [index, field] = event.target.name.split("-");
    const newCheckItems = [...checkItems];
    newCheckItems[index].values[field] = event.target.checked;
    setCheckItems(newCheckItems);
  };

  const handleSetAgeChange = (e, index) => {
    const newCheckItemsAge = [...checkItems];
    newCheckItemsAge[index].age = e.target.value;
    setCheckItems(newCheckItemsAge);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newCheckItems = [...checkItems];
    setCheckItems(newCheckItems);
    navigate("/interview-sheet-submitted", {
      state: { checkItems: checkItems }
    });
  };

  return (
    <form method="post" onSubmit={handleSubmit}>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>現在治療中</th>
            <th>経過観察中</th>
            <th>既往症</th>
            <th>発症年齢</th>
          </tr>
        </thead>
        <tbody>
          {checkItems.map((checkItem, index) => (
            <tr key={index}>
              <td>{checkItem.label}</td>
              {checkItem.statuses.map((status, field) => (
                <td key={field}>
                  <label>
                    <input
                      type="checkbox"
                      name={`${index}-${field}`}
                      value={status}
                      checked={checkItem.values[field]}
                      onChange={handleCheckChange}
                    />
                  </label>
                </td>
              ))}
              <td>
                <label>
                  <input
                    id="age"
                    type="number"
                    min="0"
                    max="120"
                    value={checkItem.age}
                    onChange={(event) => handleSetAgeChange(event, index)}
                  />
                </label>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <button type="submit">送信</button>
    </form>
  );
}

export default CheckList;
