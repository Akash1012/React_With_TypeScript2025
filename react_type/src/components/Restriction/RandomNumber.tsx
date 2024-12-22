import React from "react";

type RandomNumberType = {
  value: number;
};

type PostiveNumber = RandomNumberType & {
  isPositive: boolean;
  isNegative?: never;
  isZero?: never;
};

type NegativeNumber = RandomNumberType & {
  isNegative: boolean;
  isPositive?: never;
  isZero?: never;
};

type ZeroNumber = RandomNumberType & {
  isZero: boolean;
  isPositive?: never;
  isNegative?: never;
};

type RandomNumberProps = PostiveNumber | NegativeNumber | ZeroNumber;

const RandomNumber = (props: RandomNumberProps) => {
  const { value, isPositive, isNegative, isZero } = props;

  return (
    <div>
      RandomNumber {value} {isPositive && "Postive"} {isNegative && "Negative"}
      {isZero && "Zero"}
    </div>
  );
};

export default RandomNumber;
