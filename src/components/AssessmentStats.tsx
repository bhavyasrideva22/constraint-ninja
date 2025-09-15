import { Card, CardContent } from "@/components/ui/card";
import { Users, Award, Clock, Target } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "15,000+",
    label: "Professionals Assessed",
    description: "Across various industries"
  },
  {
    icon: Clock,
    value: "45-60",
    label: "Minutes Average",
    description: "Comprehensive yet efficient"
  },
  {
    icon: Target,
    value: "94%",
    label: "Accuracy Rate",
    description: "In predicting job performance"
  },
  {
    icon: Award,
    value: "5",
    label: "Core Dimensions",
    description: "PEARL framework analysis"
  }
];

const AssessmentStats = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index} className="text-center border-0 bg-card/60 backdrop-blur-sm hover:shadow-elegant transition-all duration-300">
                <CardContent className="pt-6">
                  <div className="mb-4 flex justify-center">
                    <div className="p-3 rounded-full bg-gradient-primary/10">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-foreground mb-1">
                    {stat.value}
                  </div>
                  <div className="font-medium text-foreground mb-1">
                    {stat.label}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.description}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AssessmentStats;