import Image from "next/image";
import Profile from "@/components/profile";
import { Gallery } from "@/components/gallery";
import Bio from "@/components/bio";

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
    </section>
  );
}
