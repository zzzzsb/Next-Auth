import { getSession } from "@/lib/getSession";
import { redirect } from "next/navigation";

export default async function laytout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getSession();
  console.log("layout session", session);
  if (session) redirect("/");
  return (
    <>
      <h1>laytout Component</h1>
    </>
  );
}
