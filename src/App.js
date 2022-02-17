import React, { useState } from "react";
import ListComp from "./ListComp";

const Apps = () => {
  const [Item, SetItem] = useState("");
  const [NewItem, SetNewItem] = useState([]);
  const ItemEvent = (event) => {
    SetItem(event.target.value);
  };
  let showw = document.getElementsByClassName('btn3')[0];
  let cont = document.getElementsByClassName('container')[0];
  const Added_item = () => {
    if (Item !== "") {
      SetNewItem((pre_val) => {
        showw.style.display = `flex`;
        return [...pre_val, Item];
      });
      const cont1 = document.querySelector('#Main').offsetHeight;
      const cont2 = document.querySelector('#Container').offsetHeight;
      console.log(cont1 - (cont2/0.7)); 
      if(cont1 < cont2/0.68) {cont.style.overflow = `scroll`;}
      SetItem("");
    } else alert("Enter a tast :)");
  };
  const Remove_Items = () => {
    SetNewItem([]);
    showw.style.display = `none`;
  }

  return (
    <>
      <div className="main" id="Main">
        <h1> ToDo&nbsp;List </h1>
        <div className="form">
          <input
            type="text"
            value={Item}
            placeholder="Enter an item"
            onChange={ItemEvent}
          />
          <button type="submit" className="btn1" onClick={Added_item}>
            <i className="fa-solid fa-plus"></i>
          </button>
        </div>
        <div className="container" id="Container">
          <ol>
            {NewItem.map((val, index) => {
              return <ListComp key={index} text={val} />;
            })}
          </ol>
        </div>
        <div className="remove">
          <button type="submit" className="btn3" onClick={Remove_Items}>
            <i className="fa-solid fa-calendar-xmark"></i>
          </button>
        </div>
      </div>
    </>
  );
};

export default Apps;
