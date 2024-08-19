import Image from "next/image";
import Topnav from "@/layout/topnav";

export default function Home() {
  return (
    <>
      <Topnav />
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1 className="text-6xl font-displa text-primary tracking-wide">Hello There</h1>
      </main>
    </>
  );
}
