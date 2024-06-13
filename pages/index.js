import Image from "next/image";
import { Inter } from "next/font/google";
import {useRef, useState} from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [isGoodby, setGoodby] = useState(false)
  const [mouseP2, setM] = useState(0)

  const mosuePosition = useRef(0)

  const handleClick = () => {
    setGoodby(prevGoodby => !prevGoodby)
  }

  const handleMouseMove = event => {
    mosuePosition.current = event.clientX
    setM(event.clientX)
  }

  return (
    <main onMouseMove={handleMouseMove}>
      <h1>Greeting</h1>
      <p>{isGoodby? 'goodby': 'hello'}</p>
      {/*<p>mouse postion: {mosuePosition.current}</p>*/}
      <p>{mouseP2}</p>
      <button onClick={handleClick}>Toggle</button>
    </main>
  );
}
