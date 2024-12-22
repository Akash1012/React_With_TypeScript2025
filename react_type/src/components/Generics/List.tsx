type ListProps<T> = {
  //   items: (string | number | { first: string; last: string })[];
  //   onClick: (value: string | number | { first: string; last: string }) => void;

  items: T[];
  onClick: (value: T) => void;
};

type PersonType = {
  id: number;
  first: string;
  last: string;
};

const List = <T extends PersonType>(props: ListProps<T>) => {
  const { items, onClick } = props;
  return (
    <div>
      <h2>List of items</h2>
      {items.map((item) => {
        return (
          <div key={item.id} onClick={() => onClick(item)}>
            {/* {JSON.stringify(item)} */}
            {item.last}
          </div>
        );
      })}
    </div>
  );
};

export default List;
