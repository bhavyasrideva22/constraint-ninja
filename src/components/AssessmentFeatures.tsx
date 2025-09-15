import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Lightbulb, 
  Cog, 
  Clock, 
  Puzzle, 
  Radar, 
  TrendingUp 
} from "lucide-react";

const features = [
  {
    icon: Lightbulb,
    title: "Scenario-Based Application",
    description: "Navigate realistic workplace constraints like budget cuts, tight deadlines, and changing requirements.",
    category: "Core Assessment",
    color: "text-primary"
  },
  {
    icon: Cog,
    title: "Practical Skills Testing",
    description: "Execute creative solutions with limited tools and incomplete data, mirroring real work conditions.",
    category: "Hands-on",
    color: "text-accent"
  },
  {
    icon: Clock,
    title: "Time & Task Management",
    description: "Demonstrate your ability to prioritize, focus, and adapt when faced with multiple competing demands.",
    category: "Efficiency",
    color: "text-success"
  },
  {
    icon: Puzzle,
    title: "Real-World Problem Solving",
    description: "Tackle messy, ambiguous problems that require both logical thinking and creative innovation.",
    category: "Critical Thinking",
    color: "text-warning"
  },
  {
    icon: Radar,
    title: "PEARL Framework Analysis",
    description: "Get evaluated on Practical Intelligence, Execution, Adaptability, Reliability, and Learning Agility.",
    category: "Comprehensive",
    color: "text-primary"
  },
  {
    icon: TrendingUp,
    title: "Personalized Development Plan",
    description: "Receive a 4-6 week improvement roadmap with specific actions to enhance your creative problem-solving.",
    category: "Growth Path",
    color: "text-accent"
  }
];

const AssessmentFeatures = () => {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4">
            Comprehensive Assessment Framework
          </h2>
          <p className="text-lg text-muted-foreground">
            Our assessment evaluates your creative problem-solving abilities through multiple dimensions, 
            providing insights that matter to today's employers.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="group hover:shadow-elegant transition-all duration-300 border-0 bg-card/80 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-3 rounded-lg bg-gradient-primary/10 ${feature.color}`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {feature.category}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AssessmentFeatures;