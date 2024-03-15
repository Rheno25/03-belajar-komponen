import Image from "next/image";
import Profile from "@/components/profile";
import { Gallery } from "@/components/gallery";
import Bio from "@/components/bio";
import TodoList from "@/components/TodoList";

export default function Home() {
  return (
    <section>
      <center>
      <h1>Ilmuwan yang luar biasa.</h1>
      </center>
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <Gallery />
      </div>
      <Bio />
      <div>
        <TodoList />
      </div>
    </section>
  );
}
