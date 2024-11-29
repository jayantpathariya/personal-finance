import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex h-full items-center justify-center gap-x-2">
      <Button>Primary</Button>
      <Button variant="secondary">Primary</Button>
      <Button variant="tertiary">Primary</Button>
      <Button variant="destructive">Primary</Button>
    </div>
  );
}
