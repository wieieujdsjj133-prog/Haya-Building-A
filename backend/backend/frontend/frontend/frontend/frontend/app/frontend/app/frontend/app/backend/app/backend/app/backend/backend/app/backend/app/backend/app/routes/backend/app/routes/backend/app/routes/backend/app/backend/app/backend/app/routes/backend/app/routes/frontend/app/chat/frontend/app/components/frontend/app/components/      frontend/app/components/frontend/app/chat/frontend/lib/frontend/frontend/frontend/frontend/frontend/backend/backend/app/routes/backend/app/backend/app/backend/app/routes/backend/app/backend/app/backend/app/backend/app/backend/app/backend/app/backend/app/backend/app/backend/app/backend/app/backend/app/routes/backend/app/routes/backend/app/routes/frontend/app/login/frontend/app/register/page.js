import Register from "@/components/Register";

export const metadata = {
  title: "Register | Haya Building A",
  description: "Create a new Haya Building A account."
};

export default function RegisterPage() {
  return (
    <main className="min-h-screen bg-black">
      <Register />
    </main>
  );
}
