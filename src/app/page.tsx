import Image from "next/image";
import { prisma } from "@/utils/prisma";
import HomePage from "../components/HomePage";
export default async function Home() {
  const employees = await prisma.employee.findMany();
  return (
    <main className="flex flex-col items-center justify-between">
      <HomePage employees={employees} />
    </main>
  );
}
