import Image from "next/image";
import { Inter } from "next/font/google";
import {useRef, useState} from "react";
import FirstRender from "@/components/FirstRender";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [isGoodby, setGoodby] = useState(false)


  const mosuePosition = useRef(0)
  const counterP = useRef(null)

  const handleClick = () => {
    setGoodby(prevGoodby => !prevGoodby)
  }

  const handleMouseMove = event => {
    mosuePosition.current = event.clientX // nem használom amúgy
    counterP.current.innerHTML = event.clientX
  }

  return (
    <main onMouseMove={handleMouseMove}>
      <h1>Greeting</h1>
      <p>{isGoodby? 'goodby': 'hello'}</p>
      <p ref={counterP}></p>
      <button onClick={handleClick}>Toggle</button>

      <FirstRender />
    </main>
  );
}
