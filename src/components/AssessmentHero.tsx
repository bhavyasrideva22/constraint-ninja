import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Brain, Clock, Target } from "lucide-react";

const AssessmentHero = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-primary">
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <Badge variant="secondary" className="mb-6 px-4 py-2 text-sm font-medium">
            Professional Assessment Platform
          </Badge>
          
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Applied Creativity Under{" "}
            <span className="bg-gradient-to-r from-accent to-white bg-clip-text text-transparent">
              Constraints
            </span>
          </h1>
          
          <p className="mb-8 text-xl leading-8 text-white/90">
            Discover your ability to innovate, problem-solve, and deliver workable solutions 
            despite limited time, data, tools, or clarity in today's fast-paced work environment.
          </p>
          
          <div className="mb-10 flex flex-wrap justify-center gap-4">
            <div className="flex items-center gap-2 text-white/80">
              <Clock className="h-5 w-5" />
              <span>45-60 minutes</span>
            </div>
            <div className="flex items-center gap-2 text-white/80">
              <Brain className="h-5 w-5" />
              <span>5 Core Areas</span>
            </div>
            <div className="flex items-center gap-2 text-white/80">
              <Target className="h-5 w-5" />
              <span>Real-world scenarios</span>
            </div>
          </div>
          
          <Button 
            size="lg" 
            variant="secondary"
            className="group px-8 py-4 text-lg font-semibold shadow-elegant"
          >
            Start Assessment
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AssessmentHero;