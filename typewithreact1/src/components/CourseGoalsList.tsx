import { ReactNode } from "react";
import { type GoalsListModel } from "../model/goalModel";
import CourseGoal from "./CourseGoal";
import InfoBox from "./infoBox";

interface CourseGoalList {
  goals: GoalsListModel[];
  onDeleteGoal: (id: number) => void;
}

const CourseGoalList = (props: CourseGoalList) => {
  const { goals, onDeleteGoal } = props;

  if (goals.length === 0) {
    return (
      <InfoBox mode="hint">
        You have no course goals yet. Start adding some!
      </InfoBox>
    );
  }

  let warningBox: ReactNode;

  if (goals.length >= 4) {
    warningBox = (
      <InfoBox mode="warning" severity="high">
        You have reached the maximum number of course goals {goals.length}.
        Consider breaking down your goals into smaller, more manageable tasks.
      </InfoBox>
    );
  }
  return (
    <>
      {warningBox}
      <ul>
        {goals.map((goal: GoalsListModel) => {
          const { id, title, description } = goal;
          return (
            <li key={id}>
              <CourseGoal title={title} onDelete={onDeleteGoal} id={id}>
                {description}
              </CourseGoal>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default CourseGoalList;
