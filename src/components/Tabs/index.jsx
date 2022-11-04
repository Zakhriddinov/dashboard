import React, { useState } from "react";
import { Button, Tab, TabContainer } from "./style";

const Tabs = () => {
  const count = [3, 6, 12, 24];
  const [click, setClick] = useState("");
  const toggle = (e) => {
    setClick(e.target.id);
  };
  return (
    <TabContainer>
      <Tab>
        {count.map((item, idx) => (
          <Button
            type="button"
            key={idx}
            className={click == idx ? "active" : undefined}
            onClick={toggle}
            id={idx}
          >
            {item} мес
          </Button>
        ))}
      </Tab>
      <h4 style={{ "text-align": "center", "margin-top": "8px" }}>
        Наценка: <span style={{ "font-weight": "bold" }}>5%</span>
      </h4>
    </TabContainer>
  );
};

export default Tabs;
