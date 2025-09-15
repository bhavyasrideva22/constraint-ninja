import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Shield, Trophy, Users } from "lucide-react";

const AssessmentCTA = () => {
  return (
    <section className="py-24 bg-gradient-primary relative overflow-hidden">
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <Badge variant="secondary" className="mb-6 px-4 py-2 text-sm font-medium">
            Ready to Begin?
          </Badge>
          
          <h2 className="mb-6 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Discover Your Creative Problem-Solving Potential
          </h2>
          
          <p className="mb-8 text-lg leading-8 text-white/90">
            Join thousands of professionals who have used this assessment to understand 
            their strengths and accelerate their career growth in creative, fast-paced environments.
          </p>
          
          <div className="mb-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
              <CardContent className="pt-6 text-center">
                <Shield className="h-8 w-8 text-white mx-auto mb-3" />
                <h4 className="font-semibold text-white mb-2">Confidential</h4>
                <p className="text-sm text-white/80">Your results are private and secure</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
              <CardContent className="pt-6 text-center">
                <Trophy className="h-8 w-8 text-white mx-auto mb-3" />
                <h4 className="font-semibold text-white mb-2">Validated</h4>
                <p className="text-sm text-white/80">Research-backed methodology</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
              <CardContent className="pt-6 text-center">
                <Users className="h-8 w-8 text-white mx-auto mb-3" />
                <h4 className="font-semibold text-white mb-2">Actionable</h4>
                <p className="text-sm text-white/80">Get specific improvement steps</p>
              </CardContent>
            </Card>
          </div>
          
          <div className="space-y-4">
            <Button 
              size="lg" 
              variant="secondary"
              className="group px-8 py-4 text-lg font-semibold shadow-elegant"
            >
              Start Your Assessment Now
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            
            <p className="text-sm text-white/70">
              Free trial • No credit card required • Complete in under an hour
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AssessmentCTA;