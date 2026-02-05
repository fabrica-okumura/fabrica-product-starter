import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <main style={{ padding: 24 }}>
      <h1>ここから始める</h1>
      <Button variant="neutral" className="btn-accent">
        Start
      </Button>
      <Button variant="accent">Start</Button>
      <Button variant="destructive">Start</Button>
      <Button variant="default">Start</Button>
      <Button variant="default" size="sm">
        Start
      </Button>
      <Button variant="default" size="icon">
        S
      </Button>
      <Button variant="default" size="icon-sm">
        S
      </Button>
      <Button variant="default" size="icon-sm">
        S
      </Button>
    </main>
  );
}
