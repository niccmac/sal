import { SegmentedControl, Group, HoverCard, Text } from "@mantine/core";
import { useState, useEffect } from "react";
import { IconDogBowl } from "@tabler/icons";
import {
  query,
  collection,
  orderBy,
  onSnapshot,
  limit
} from "firebase/firestore";
import { db } from "../firebase";
import MealTime from "./timeMeal";

function Eating() {
  const [meal, setMeal] = useState("Breakfast");
  const [meals, setMeals] = useState([]);

  const handleEating = (e) => {
    setMeal(e);
  };

  function isDateToday(item) {
    const otherDate = new Date(item.time.timestampValue);
    const todayDate = new Date();

    if (
      otherDate.getDate() === todayDate.getDate() &&
      otherDate.getMonth() === todayDate.getMonth() &&
      otherDate.getYear() === todayDate.getYear()
    ) {
      return <MealTime item={item} key={otherDate} />;
    } else {
      return false;
    }
  }

  useEffect(() => {
    const q = query(
      collection(db, "Eating"),
      orderBy("time", "desc"),
      limit(3)
    );
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let meals = [];
      querySnapshot.forEach((doc) => {
        const item = doc._document.data.value.mapValue.fields;
        meals.push(item);
      });
      console.log("update meals");
      setMeals(meals);
    });
    return () => unsubscribe();
  }, [meal]);

  return (
    <>
      <SegmentedControl
        value={meal}
        onChange={(e) => handleEating(e)}
        data={[
          { label: "Breakfast", value: "Breakfast" },
          { label: "Lunch", value: "Lunch" },
          { label: "Dinner", value: "Dinner" }
        ]}
      />
      {meals && meals.map((e) => isDateToday(e))}
    </>
  );
}

export default Eating;
