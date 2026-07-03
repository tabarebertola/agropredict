import {
  Nav,
  Hero,
  Architecture,
  DashboardDemo,
  Variables,
  HowItWorks,
  TelegramAlert,
  Footer,
} from "@/components/sections";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Architecture />
      <DashboardDemo />
      <Variables />
      <HowItWorks />
      <TelegramAlert />
      <Footer />
    </main>
  );
}
