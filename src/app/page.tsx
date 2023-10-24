"use client";
import Image from "next/image";
import { Button } from "@material-tailwind/react";

export default function Home() {
  return (
    <main>
      <div className="flex w-max gap-4">
        <Button variant="filled">filled</Button>
        <Button variant="gradient">gradient</Button>
        <Button variant="outlined">outlined</Button>
        <Button variant="text">text</Button>
      </div>
    </main>
  );
}
