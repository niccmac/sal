import { SegmentedControl } from "@mantine/core";
import { useState } from "react";

function Eating() {
  const [meal, setMeal] = useState("Breakfast");
  const handleEating = (e) => {
    setMeal(e);
  };
  return (
    <SegmentedControl
      value={meal}
      onChange={(e) => handleEating(e)}
      data={[
        { label: "Breakfast", value: "Breakfast" },
        { label: "Lunch", value: "Lunch" },
        { label: "Dinner", value: "Dinner" }
      ]}
    />
  );
}

export default Eating;
