import "../globals.css";

export const metadata = {
  title: "Haya Building A Chat",
  description: "AI Chat Interface"
};

export default function ChatLayout({ children }) {
  return (
    <section className="min-h-screen bg-black text-white">
      {children}
    </section>
  );
}
