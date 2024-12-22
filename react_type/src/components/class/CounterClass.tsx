import { Component } from "react";

type CounterProps = {
  message: string;
};

type CounterState = {
  count: number;
};

class CounterClass extends Component<CounterProps, CounterState> {
  state = {
    count: 0,
  };

  handleClick = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };

  render() {
    const { message } = this.props;
    return (
      <div>
        <h1>
          Counter: {this.state.count} {message}
        </h1>
        <button onClick={this.handleClick}>Increment</button>
      </div>
    );
  }
}

export default CounterClass;
