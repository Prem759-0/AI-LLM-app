"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <div className="h-screen flex items-center justify-center bg-black text-white">
      <button onClick={() => router.push("/chat")}>
        Enter App
      </button>
    </div>
  );
}
