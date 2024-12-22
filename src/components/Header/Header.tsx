import { AlignJustify } from "lucide-react";

export default function Header() {
  return (
    <header className="flex justify-between items-center">
      <h1 className="text-[3.2rem] font-bold">
        aj<span className="text-purple-600">.</span>
      </h1>
      <AlignJustify></AlignJustify>
    </header>
  );
}
