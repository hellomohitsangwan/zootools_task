import OtherStatsSection from "../Components/OtherStatsSection";
import ParticipantsSection from "../Components/ParticipantsSection";
import ZooToolsSection from "../Components/ZooToolsSection";

function Home() {
  return (
    <main className="bg-gray-100">
      {/* NoOfParticipantsChart */}
      <ParticipantsSection />

      {/* ZooTools Section */}
      <ZooToolsSection />
      {/* OtherStatsSection */}
      <OtherStatsSection />
    </main>
  );
}

export default Home;
