import Login from "@/components/Login";

export const metadata = {
  title: "Login | Haya Building A",
  description: "Login to your Haya Building A account."
};

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-black">
      <Login />
    </main>
  );
}
