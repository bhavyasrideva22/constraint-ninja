import AssessmentHero from "@/components/AssessmentHero";
import AssessmentFeatures from "@/components/AssessmentFeatures";
import AssessmentStats from "@/components/AssessmentStats";
import SampleScenario from "@/components/SampleScenario";
import AssessmentCTA from "@/components/AssessmentCTA";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <AssessmentHero />
      <AssessmentStats />
      <AssessmentFeatures />
      <SampleScenario />
      <AssessmentCTA />
    </div>
  );
};

export default Index;
