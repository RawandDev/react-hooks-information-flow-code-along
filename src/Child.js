import { getRandomColor } from "./randomColorGenerator.js";

function Child(props) {
  console.log(props.onChangeColor);

  return (
    <div
      className="child"
      style={{ backgroundColor: props.color }}
      onClick={() => props.onChangeColor(getRandomColor())}
    />
  );
}

export default Child;
