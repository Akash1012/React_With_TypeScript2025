import { useState } from "react";
import "./App.css";
import Events from "./components/Events/Events";
import Heading from "./components/Heading/Heading";
import Oscar from "./components/Oscar/Oscar";
import Status from "./components/Status/Status";
import Container from "./components/Container/Container";
import Person from "./components/Person/Person";
import LoggedIn from "./components/State/LoggedIn";
import User from "./components/State/User";
import Counter from "./components/State/Counter";
import ThemeContextProvider from "./components/context/ThemeContext";
import Box from "./components/context/Box";
import UserContextProvider from "./components/context/UserContext";
import UserMain from "./components/context/User";
import MutableReference from "./components/Ref/Mutable";
import CounterClass from "./components/class/CounterClass";
import Private from "./components/auth/Private";
import Profile from "./components/auth/Profile";
import List from "./components/Generics/List";
import RandomNumber from "./components/Restriction/RandomNumber";
import TemplateLit from "./components/TemplateLiterals/TemplateLit";
import CustomButton from "./components/HTML/Button";
import CustomCp from "./components/HTML/CustomCp";
import Text from "./components/polymorphic/Text";

function App() {
  const [inputData, setInputData] = useState<string>("");
  const personName = {
    // name: {
    first: "Bruce",
    last: "Wayne",
    abc: [
      {
        data: {
          name: "akash",
        },
      },
    ],
    // },
  };

  const nameList = [
    {
      first: "Bruce 100",
      last: "Wayne",
    },
    {
      first: "Bruce 200",
      last: "Wayne",
    },
    {
      first: "Bruce 300",
      last: "Wayne",
    },
  ];
  UserContextProvider;
  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement>,
    id: number
  ) => {
    console.log("Button clicked", event, id);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { value } = event.target;
    setInputData(value);

    console.log("Input changed", value);
  };
  return (
    <div className="root">
      <h1>Type Script</h1>
      {/* <Greet name="Akash" messageCount={500} isLoggedIn={true} /> */}
      {/* <Person name={personName} nameList={nameList} /> */}
      {/* <Status status="loading" /> */}
      {/* <Heading>Placeholder text</Heading> */}
      {/* <Oscar>
        <Heading>Placeholder text</Heading>
      </Oscar> */}
      {/* 
      <Events
        handleClick={handleClick}
        value={inputData}
        handleChange={handleChange}
      /> */}
      {/* 
      <Container
        name="akash"
        styles={{
          border: "1px solid black",
          padding: "1rem",
        }}
      /> */}

      {/* <LoggedIn /> */}
      {/* <User /> */}
      {/* <Counter /> */}

      {/* <ThemeContextProvider>
        <Box />
      </ThemeContextProvider> */}

      {/* <UserContextProvider>
        <UserMain />
      </UserContextProvider> */}
      {/* <MutableReference /> */}
      {/* <CounterClass message="Hello world" /> */}

      {/* <Private isLoggedIn={false} Component={Profile} /> */}

      {/* <List items={["A", "B", "C"]} onClick={(item) => alert(item)} />
      <List items={["A", 1, "C"]} onClick={(item) => alert(item)} /> */}
      {/* <List
        items={[
          {
            id: 100,
            first: "aaa",
            last: "bbb",
          },
        ]}
        onClick={(item) => console.log(item)}
      /> */}

      {/* <RandomNumber value={100} isPositive /> */}
      {/* <TemplateLit position="center" /> */}
      {/* <CustomButton onClick={() => console.log("Clicked")} variant="primary">
        Primary Button
      </CustomButton> */}

      {/* <CustomCp name="akash" /> */}

      <Text as="h1" size="lg">
        Heading
      </Text>
      <Text as="p" size="md">
        Paragraph
      </Text>
      <Text as="label" htmlFor="someId" size="sm" color="secondary">
        Label
      </Text>
    </div>
  );
}

export default App;
