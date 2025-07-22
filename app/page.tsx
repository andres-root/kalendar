import { currentUser } from "@clerk/nextjs/server";
import Image from "next/image";

export default async function Home() {
  const user = await currentUser();
  if (!user) {
    return <LandingPage />
  }
  return redirect('/events');
}
