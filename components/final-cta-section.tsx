import { MoveRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

function FinalCTASection() {
  return (
    <div className="w-full py-20 lg:py-40 snap-start">
      <div className="w-full">
        <div className="flex flex-col text-center bg-muted p-4 lg:p-14 gap-8 items-center">
          <div>
            <Badge>Ready to Transform?</Badge>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-3xl md:text-5xl tracking-tighter max-w-4xl font-regular">
              Turn Your Impossible Vision Into Reality
            </h3>
            <p className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-3xl">
              Don't let complex technical challenges hold back your breakthrough ideas. 
              Our team specializes in building cutting-edge solutions that transform ambitious visions 
              into market-leading products. From SaaS platforms to AI automation - we make the impossible, possible.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="gap-4 text-lg md:text-xl px-8 py-4 md:px-10 md:py-5" asChild>
              <a href="/contact">Start Your Project <MoveRight className="w-5 h-5" /></a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export { FinalCTASection };
