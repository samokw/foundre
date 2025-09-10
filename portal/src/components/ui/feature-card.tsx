"use client";

import { useState } from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Rocket, GitBranch, Github } from "lucide-react";

type Props = {
  sampleRepo?: string;
  sampleBranch?: string;
};

export default function FeatureCard({
  sampleRepo = "vercel/nextjs-blog",
  sampleBranch = "main",
}: Props) {
  const [repo, setRepo] = useState(sampleRepo);

  // In your real app, this could POST to /api/deploy or navigate to a new-project flow
  const handleDeploy = async () => {
    // Example: navigate to your create flow with query params
    const url = `/projects/new?repo=${encodeURIComponent(repo)}&branch=${encodeURIComponent(sampleBranch)}`;
    window.location.href = url;
  };

  return (
    <Card className="rounded-2xl shadow-md border border-primary/10 hover:border-primary/30 transition-all duration-300 bg-card">
      <CardHeader className="space-y-1">
        <div className="flex items-center gap-2">
          <Rocket className="h-5 w-5 text-primary" />
          <CardTitle className="font-semibold text-2xl">One-click Deployment</CardTitle>
        </div>
        <CardDescription>
          Point foundre at a repo and launch a production deployment in seconds.
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-6">
        {/* Repo preview */}
        <div className="rounded-xl border p-4 bg-background">
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <Github className="h-5 w-5" />
              <div className="text-sm">
                <div className="font-medium">{sampleRepo}</div>
                <div className="text-muted-foreground flex items-center gap-1">
                  <GitBranch className="h-3.5 w-3.5" />
                  {sampleBranch}
                </div>
              </div>
            </div>
            <Badge variant="secondary">Template</Badge>
          </div>

          <Separator className="my-4" />

          {/* Enter your own repo */}
          <div className="grid gap-3 md:grid-cols-[1fr_auto]">
            <Input
              placeholder="owner/repo or https://github.com/owner/repo"
              value={repo}
              onChange={(e) => setRepo(e.target.value)}
            />
            <Button onClick={handleDeploy} className="md:ml-2">
              Deploy
            </Button>
          </div>

          <div className="mt-3 text-xs text-muted-foreground">
            Tip: paste a GitHub URL or <code>owner/repo</code>. We’ll detect build & runtime automatically.
          </div>
        </div>

        {/* Quick facts */}
        <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
          <Badge variant="outline">Auto-build</Badge>
          <Badge variant="outline">Nixpacks</Badge>
          <Badge variant="outline">HTTPS</Badge>
          <Badge variant="outline">Logs</Badge>
        </div>
      </CardContent>
    </Card>
  );
}