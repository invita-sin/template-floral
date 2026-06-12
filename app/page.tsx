import InvitationWrapper from "@/components/invitation-wrapper";
import HeroCouple from "@/components/hero-couple";
import LoveStory from "@/components/love-story";
import EventDetails from "@/components/event-details";
import Gallery from "@/components/gallery";
import Maps from "@/components/maps";
import Gift from "@/components/gift";
import RSVP from "@/components/rsvp";
import FallingFlowers from "@/components/falling-flowers";

export default function Home() {
  return (
    <InvitationWrapper>
      <FallingFlowers />
      <HeroCouple />
      <LoveStory />
      <EventDetails />
      <Gallery />
      <Maps />
      <Gift />
      <RSVP />
    </InvitationWrapper>
  );
}
