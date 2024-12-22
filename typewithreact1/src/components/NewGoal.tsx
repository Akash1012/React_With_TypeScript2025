import { useRef } from "react";
import { GoalsListModel } from "../model/goalModel";

type newGoal = {
  handleAddGoal: (goal: GoalsListModel) => void;
};
const NewGoal = (props: newGoal) => {
  const goal = useRef<HTMLInputElement>(null);
  const summay = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { handleAddGoal } = props;

    const enteredGoal = goal.current!.value;
    const enteredSummary = summay.current!.value;

    if (!enteredGoal || !enteredSummary) {
      return;
    }

    let addGoal: GoalsListModel = {
      id: Math.random(),
      title: enteredGoal,
      description: enteredSummary,
    };
    handleAddGoal(addGoal);

    // reset the goal

    event.currentTarget.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <p>
        <label htmlFor="goal">Your Goal</label>
        <input ref={goal} type="text" id="goal" required />
      </p>
      <p>
        <label htmlFor="summary">Short Summary</label>
        <input ref={summay} type="text" id="summary" required />
      </p>
      <p>
        <button>Add Goal</button>
      </p>
    </form>
  );
};

export default NewGoal;
