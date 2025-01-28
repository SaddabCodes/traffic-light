import { useEffect, useState } from "react";
import "./TrafficLight.css";

export default function TrafficLight() {
  const [red, setRed] = useState(true);
  const [yellow, setYellow] = useState(false);
  const [green, setGreen] = useState(false);

  useEffect(() => {
    const lightColor= setInterval(() => {
      if (red && !yellow && !green) {
        setGreen(true);
        setRed(false);
      } else if (green && !red && !yellow) {
        setYellow(true);
        setGreen(false);
      } else if (yellow && !red && !green) {
        setYellow(false);
        setRed(true);
      }
    }, 2000);
    return ()=>{
      clearInterval(lightColor)
    }
  }, [red,yellow,green]);
  return (
    <div className="container" >
      <p className="circle" style={{ backgroundColor:`${green ?'green':'silver'}` }}></p>
      <p className="circle" style={{ backgroundColor:`${yellow ?'yellow':'silver'}` }}></p>
      <p className="circle" style={{ backgroundColor:`${red ?'red':'silver'}` }}></p>
    </div>
  );
}
