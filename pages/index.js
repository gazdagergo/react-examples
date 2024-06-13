import Image from "next/image";
import { Inter } from "next/font/google";
import {useState} from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [greeting, setGreeting] = useState('')
  return (
    <main>
      <p>{greeting}</p>

      <button onClick={() => setGreeting('Hello World')}>Say hello</button>
    </main>
  );
}
