import { NumberInput } from "@/components/ui/number-input";

export default function StarterPage() {
  return (
    <div className="flex min-h-[calc(100vh-180px)] flex-col items-center justify-center gap-4 rounded-md bg-background pt-8">
      <div className="text-center text-lg text-muted-foreground max-w-md">
        To get started, click the open in v0 button!
      </div>
      <NumberInput />
    </div>
  );
}
