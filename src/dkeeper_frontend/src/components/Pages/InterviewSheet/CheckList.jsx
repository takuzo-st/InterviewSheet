import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { dkeeper_backend } from "../../../../../declarations/dkeeper_backend"

function CheckList() {
  const navigate = useNavigate();

  const [checkItems, setCheckItems] = useState([
    {
      number: 0,
      diseaseName: "高血圧",
      statuses: { currentTreatment: false, followUp: false, previousDisease: false },
      age: "24",
    },
    {
      number: 1,
      diseaseName: "脂質異常症",
      statuses: { currentTreatment: false, followUp: false, previousDisease: false },
      age: "",
    },
    {
      number: 2,
      diseaseName: "糖尿病",
      statuses: { currentTreatment: true, followUp: false, previousDisease: false },
      age: "",
    }
  ]);

  const handleCheckChange = (event) => {
    const [index, field] = event.target.name.split("-");
    const newCheckItems = [...checkItems];
    if (field == 0) {
      newCheckItems[index].statuses.currentTreatment = event.target.checked;
    } else if (field == 1) {
      newCheckItems[index].statuses.followUp = event.target.checked;
    } else if (field == 2) {
      newCheckItems[index].statuses.previousDisease = event.target.checked;
    }
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

    newCheckItems.map((checkItem) => (setCheckItems(dkeeper_backend.createCheckItem(checkItem.number, checkItem.diseaseName, checkItem.statuses, checkItem.age))));
    navigate("/interview-sheet-submitted", {
      state: { checkItems: checkItems }
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const checkItemArray = await dkeeper_backend.readCheckItem();
    setCheckItems(checkItemArray);
  }

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
              <td>{checkItem.diseaseName}</td>
              {Object.values(checkItem.statuses).map((status, field) => (
                <td key={field}>
                  <label>
                    <input
                      type="checkbox"
                      name={`${index}-${field}`}
                      value={Object.values(status)}
                      checked={status}
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
