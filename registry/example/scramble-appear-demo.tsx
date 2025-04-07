import ScrambleAppear from "../augustui/scramble-appear";

export default function ScrambleAppearDemo() {
  return (
    <div className="relative flex min-h-[350px] w-full items-center justify-center overflow-hidden">
      <ScrambleAppear text="HELLO, WORLD!" className="rounded-xl" />
      <div className="relative z-10 flex flex-col items-center justify-center">
        <p className="text-4xl font-bold">Scramble Appear</p>
        <p className="text-sm text-muted-foreground">
          Letters in motion, revealing meaning.
        </p>
      </div>
    </div>
  );
}
