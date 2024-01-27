import { SignUp } from "@clerk/nextjs";

export default function RegisterPage() {
  return (
    <main className="h-screen flex justify-center items-center">
      <SignUp />
    </main>
  );
}
