import Image from "next/image";
import { Inter } from "next/font/google";
import {useState} from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [isGoodby, setGoodby] = useState(false)
  const handleClick = () => {
    setGoodby(prevGoodby => !prevGoodby)
  }

  return (
    <main>
      <p>{isGoodby? 'goodby': 'hello'}</p>

      <button onClick={handleClick}>Toggle</button>
    </main>
  );
}
