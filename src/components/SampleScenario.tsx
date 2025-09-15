import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { CheckCircle2, Clock, DollarSign } from "lucide-react";

const SampleScenario = () => {
  const [selectedOption, setSelectedOption] = useState<string>("");
  const [showFeedback, setShowFeedback] = useState(false);

  const handleSubmit = () => {
    if (selectedOption) {
      setShowFeedback(true);
    }
  };

  return (
    <section className="py-24 bg-background">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4">
            Sample Assessment Question
          </h2>
          <p className="text-lg text-muted-foreground">
            Experience the type of real-world scenarios you'll encounter in this assessment
          </p>
        </div>

        <Card className="shadow-elegant border-0 bg-gradient-secondary">
          <CardHeader>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-warning/10">
                <DollarSign className="h-5 w-5 text-warning" />
              </div>
              <Badge variant="outline">Scenario 1: Budget-Cut Campaign</Badge>
            </div>
            <CardTitle className="text-2xl">The Budget-Cut Challenge</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="p-4 bg-muted/50 rounded-lg border-l-4 border-l-warning">
              <p className="text-foreground leading-relaxed">
                You're midway through designing a marketing campaign when you're told your budget has been cut by 40%. 
                The CEO still expects results within the original timeline. Your team is already stretched thin, 
                and stakeholders are expecting the same deliverables.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-foreground">What's your best course of action?</h4>
              
              <RadioGroup value={selectedOption} onValueChange={setSelectedOption}>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3 p-4 rounded-lg border hover:bg-muted/30 transition-colors">
                    <RadioGroupItem value="cancel" id="cancel" className="mt-1" />
                    <Label htmlFor="cancel" className="flex-1 cursor-pointer">
                      <span className="font-medium">Cancel the campaign and propose a new one</span>
                      <p className="text-sm text-muted-foreground mt-1">
                        Start fresh with realistic scope and budget alignment
                      </p>
                    </Label>
                  </div>
                  
                  <div className="flex items-start space-x-3 p-4 rounded-lg border hover:bg-muted/30 transition-colors">
                    <RadioGroupItem value="focus" id="focus" className="mt-1" />
                    <Label htmlFor="focus" className="flex-1 cursor-pointer">
                      <span className="font-medium">Focus the remaining budget on one high-performing channel</span>
                      <p className="text-sm text-muted-foreground mt-1">
                        Concentrate resources for maximum impact in proven areas
                      </p>
                    </Label>
                  </div>
                  
                  <div className="flex items-start space-x-3 p-4 rounded-lg border hover:bg-muted/30 transition-colors">
                    <RadioGroupItem value="extend" id="extend" className="mt-1" />
                    <Label htmlFor="extend" className="flex-1 cursor-pointer">
                      <span className="font-medium">Ask for a deadline extension while renegotiating scope</span>
                      <p className="text-sm text-muted-foreground mt-1">
                        Buy time to properly adjust expectations and deliverables
                      </p>
                    </Label>
                  </div>
                  
                  <div className="flex items-start space-x-3 p-4 rounded-lg border hover:bg-muted/30 transition-colors">
                    <RadioGroupItem value="reduce" id="reduce" className="mt-1" />
                    <Label htmlFor="reduce" className="flex-1 cursor-pointer">
                      <span className="font-medium">Reduce quality across all deliverables equally</span>
                      <p className="text-sm text-muted-foreground mt-1">
                        Maintain all planned elements but with lower production values
                      </p>
                    </Label>
                  </div>
                </div>
              </RadioGroup>
            </div>

            <div className="flex items-center justify-between pt-4">
              <div className="flex items-center gap-2 text-muted-foreground text-sm">
                <Clock className="h-4 w-4" />
                <span>Estimated time: 3-5 minutes</span>
              </div>
              
              <Button 
                onClick={handleSubmit}
                disabled={!selectedOption || showFeedback}
                className="bg-gradient-primary hover:opacity-90"
              >
                {showFeedback ? (
                  <>
                    <CheckCircle2 className="mr-2 h-4 w-4" />
                    Submitted
                  </>
                ) : (
                  "Submit Answer"
                )}
              </Button>
            </div>

            {showFeedback && (
              <div className="mt-6 p-4 bg-success/10 border border-success/20 rounded-lg">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-success mt-0.5" />
                  <div>
                    <h5 className="font-semibold text-success mb-2">Great thinking!</h5>
                    <p className="text-sm text-foreground">
                      In the real assessment, you'd receive detailed feedback on your reasoning approach, 
                      alternative strategies to consider, and how your response compares to successful professionals 
                      in similar situations.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default SampleScenario;