import Button from "./components/ui/Button";
import "./config/Fonts";

export default function App() {
  return (
    <main>
      <div className="p-5">
        <Button variant="default">Click Me</Button>
        <Button variant="outline">Outline Button</Button>
      </div>
    </main>
  );
}
