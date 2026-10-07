import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import LocationsGrid from "@/components/LocationsGrid";
import FinalCta from "@/components/FinalCta";
import BreadcrumbJsonLd, { pageTrail } from "@/components/BreadcrumbJsonLd";
import { locationsPage, home } from "@/data/content";
import { brandImagery } from "@/data/imagery";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Stories Bar and Kitchen Locations | HSR, Nagarbhavi, Rajajinagar",
  absoluteTitle: true,
  description:
    "Find Stories Bar & Kitchen locations across Bengaluru — Stories HSR, Stories Nagarbhavi and Stories Rajajinagar. Menus, events, timings and directions for each bar and restaurant.",
  path: "/locations",
  keywords: [
    "Stories Bar and Kitchen locations",
    "Stories HSR",
    "Stories Nagarbhavi",
    "Stories Rajajinagar",
    "bar and restaurant in HSR Layout",
    "bar and restaurant in Nagarbhavi",
    "bar and restaurant in Rajajinagar",
  ],
});

export default function LocationsPage() {
  return (
    <>
      <BreadcrumbJsonLd items={pageTrail("Locations", "/locations")} />
      <Navbar />
      <main>
        <PageHero
          eyebrow="Our Locations"
          heading={
            <>
              Three locations. <em>Countless stories.</em>
            </>
          }
          body={locationsPage.hero.body}
          image={brandImagery.ourStory.day}
          imageAlt="Seating at Stories Bar & Kitchen, Bengaluru"
        />

        <section className="border-t border-line section-pad">
          <div className="container-site">
            <LocationsGrid showSuitableFor />
          </div>
        </section>

        <FinalCta
          heading={
            <>
              Your next story <em>starts here</em>
            </>
          }
          body={home.finalCta.body}
          buttons={home.finalCta.buttons}
        />
      </main>
      <Footer />
    </>
  );
}
