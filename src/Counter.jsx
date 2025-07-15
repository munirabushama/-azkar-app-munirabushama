/*{
  numoftries = 100,
  backcolor = "blue",
  title = "GoodJob",
}*/
import "./App.css";
import "font-awesome/css/font-awesome.min.css";
import { useEffect, useState } from "react";

const Counter = ({ title, numoftries, backcolor }) => {
  const [counter, setCounter] = useState(numoftries);
  const [color, setColor] = useState(backcolor);

  useEffect(() => {
    setColor(backcolor);
    setCounter(numoftries);
  }, [backcolor, numoftries]);

  const handleReset = (event) => {
    event.stopPropagation();
    setCounter(numoftries);
  };

  const getDarkerColor = (hex) => {
    if (!hex) return 'inherit';
    let c = hex.substring(1);
    let rgb = parseInt(c, 16);
    let r = (rgb >> 16) & 0xff;
    let g = (rgb >> 8) & 0xff;
    let b = (rgb >> 0) & 0xff;
    r = Math.max(0, r - 50);
    g = Math.max(0, g - 50);
    b = Math.max(0, b - 50);
    return "#" + (0x1000000 + (r << 16) + (g << 8) + b).toString(16).slice(1);
  };
  return (
    <div
      className="card-item"
      onMouseOut={() => setColor(backcolor)}
      onMouseOver={() => setColor(getDarkerColor(backcolor))}
      onClick={() => setCounter(prevCounter => prevCounter - 1)}
            style={{ backgroundColor: color }}
    >
      <div className="card-title">{title}</div>
      <div className="card-count">{counter}</div>
      <div className="card-reset" onClick={handleReset}>
        <i className="fa fa-refresh"></i>
      </div>
    </div>
  );
};
export default Counter;
