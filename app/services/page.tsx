import ServicesHero from "@/Sections/services/ServicesHero/ServicesHero";

export const metadata = {
  title: "Services | Radnav Solutions",
  description:
    "Reliable radiology staffing and workforce solutions for modern healthcare.",
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white">
      <ServicesHero />
    </main>
  );
}
