import Image from "next/image";
import { Inter } from "next/font/google";
import {useState} from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [isGoodby, setIsGoodby] = useState(false)
  return (
    <main>
      <p>{isGoodby ? 'Goodby' : 'Hello'} world</p>

      <button onClick={() => setIsGoodby(true)}>Say goodby</button>
    </main>
  );
}
