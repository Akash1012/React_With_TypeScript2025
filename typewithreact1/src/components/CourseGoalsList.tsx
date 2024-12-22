import { type GoalsListModel } from "../model/goalModel";
import CourseGoal from "./CourseGoal";

interface CourseGoalList {
  goals: GoalsListModel[];
  onDeleteGoal: (id: number) => void;
}

const CourseGoalList = (props: CourseGoalList) => {
  const { goals, onDeleteGoal } = props;
  return (
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
  );
};

export default CourseGoalList;
