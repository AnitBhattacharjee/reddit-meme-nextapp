import Image from "next/image";
import Header from "./components/Header";
import Memes from "./components/Memes";
export default function Home() {
  return (
    <div>
      <Header />
      <Memes />
    </div>
  );
}
