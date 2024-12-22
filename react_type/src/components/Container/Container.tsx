type containerProps = {
  styles: React.CSSProperties;
  name: string;
};

const Container = ({ styles, name }: containerProps) => {
  // const { styles } = props;
  return (
    <div style={styles}>
      <h1>Container {name}</h1>
    </div>
  );
};

export default Container;
