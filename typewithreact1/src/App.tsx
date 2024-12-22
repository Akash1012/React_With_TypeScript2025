import { useState } from "react";
import Header from "./components/Header";
import goalsImg from "./assets/goals.jpg";
import CourseGoalList from "./components/CourseGoalsList";
import { type GoalsListModel } from "./model/goalModel";
import NewGoal from "./components/NewGoal";

export default function App() {
  const [goals, setGoals] = useState<GoalsListModel[]>([]);

  const handleAddGoal = (goal: GoalsListModel) => {
    // Add new goal to the list
    setGoals((prevGoals) => {
      return [...prevGoals, goal];
    });

    console.log(goal);
  };

  const handleDeleteGoal = (id: number): void => {
    // Remove goal from the list
    setGoals((prevGoals) => prevGoals.filter((goal) => goal.id !== id));
  };

  return (
    <main>
      <Header
        image={{
          src: goalsImg,
          alt: "A list of goals",
        }}
      >
        <h1>Yours Course Goals</h1>
      </Header>
      <NewGoal handleAddGoal={handleAddGoal} />
      <CourseGoalList goals={goals} onDeleteGoal={handleDeleteGoal} />
    </main>
  );
}
