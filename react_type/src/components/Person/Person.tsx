import { PersonService, PersonList } from "../../module/model";

type PersonProps = {
  name: PersonService["name"];

  roll?: number; // optional
  //   nameList: PersonService[]; // array of objects
  nameList: PersonList[];
};

// console.log("PersonService", PersonService);

const Person = (props: PersonProps) => {
  const {
    name: { first, last, abc },

    roll = 0,
    nameList,
  } = props;

  console.log(abc);
  return (
    <div>
      <h2>Person</h2>
      <h2>First: {first}</h2>
      <h2>Last: {last}</h2>
      <h2>Roll: {roll}</h2>
      {nameList.map((item) => {
        return (
          <div key={item.first}>
            <h3>First: {item.first}</h3>
            <h3>Last: {item.last}</h3>
          </div>
        );
      })}
    </div>
  );
};

export default Person;
