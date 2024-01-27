import AccountSetup from "@/components/forms/account-setup";
import { UserButton, currentUser } from "@clerk/nextjs";

export default async function OnboardingPage() {
  const user = await currentUser();
  if (!user) return null; // to avoid typescript warnings

  const userData = {
    id: user.id,
    email: user.emailAddresses[0].emailAddress,
  };

  console.log(user);

  //const userInfo = await fetchUser(user.id);
  //if (userInfo) return null;

  return (
    <main className="h-screen p-10">
      <section className="flex items-center gap-4">
        <UserButton afterSignOutUrl="/login" />
        <p className="text-primary/80">Hello, {user.firstName}!</p>
      </section>
      <h1 className="text-3xl font-bold mb-10">
        Let&apos;s finish setting up your account.
      </h1>
      <AccountSetup userData={userData} />
    </main>
  );
}
