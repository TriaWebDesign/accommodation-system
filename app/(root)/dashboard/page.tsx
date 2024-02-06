import { UserButton } from "@clerk/nextjs";

export default function DashboardPage() {
  return (
    <main>
      <h1>Dashboard</h1>
      <UserButton afterSignOutUrl="/login" />
    </main>
  );
}
