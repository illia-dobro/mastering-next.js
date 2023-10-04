
import { getServerSession } from "next-auth";
import Navbar from "./components/navbar";
import ProductCard from "./components/product-card";
import { authOptions } from "./api/auth/[...nextauth]/route";
import { spawn } from "child_process";

export default async function Home() {
  const session = await getServerSession(authOptions)
  return (
    <main>
      <h1>Hello {session && <span>{session.user!.name}</span>}</h1>
      <ProductCard />
    </main>
  )
}
