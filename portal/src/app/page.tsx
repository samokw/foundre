import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import FeatureCard from "@/components/ui/feature-card";

export default function HomePage() {
  return (
    <main>
      <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background/60 -z-10" />

      <div className="container mx-auto max-w-6xl px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 text-center md:text-right space-y-4">
            <h1 className="scroll-m-20 text-6xl md:text-7xl font-extrabold tracking-tight text-balance animate-in fade-in slide-in-from-left-8 duration-700">
              foundre
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl animate-in fade-in slide-in-from-left-10 duration-1000 delay-150">
              build projects, not endless infrastructure.
            </p>
          </div>

          <Separator
            orientation="vertical"
            className="hidden md:block h-24 animate-in fade-in duration-1000 delay-300"
          />


          <div className="flex-1 text-center md:text-left space-y-6">
            <h2 className="text-2xl md:text-3xl text-muted-foreground max-w-md mx-auto md:mx-0 animate-in fade-in slide-in-from-right-8 duration-700">
              Deploy and manage projects effortlessly with modern tooling and zero hassle.
            </h2>

            <div className="flex justify-center md:justify-start gap-4 animate-in fade-in slide-in-from-right-10 duration-1000 delay-150">
              <Button size="lg" className="text-lg px-8">
                Get Started
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
       <section id="try" className="py-20">
        <div className="container mx-auto max-w-6xl px-6">
          <div className="max-w-3xl mx-auto">
            <FeatureCard sampleRepo="vercel/nextjs-blog" sampleBranch="main" />
          </div>
        </div>
      </section>
    </main>
    
  );
}
