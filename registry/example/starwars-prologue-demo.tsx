import StarwarsPrologue from "../augustui/starwars-prologue";

export default function StarwarsPrologueDemo() {
  return (
    <div
      className="w-full relative h-[350px] bg-cover bg-center rounded-lg overflow-hidden"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1533613220915-609f661a6fe1?q=80&w=3164&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      }}
    >
      <StarwarsPrologue
        textLines={[
          "A long time ago in a galaxy far, far away...",
          "The Galactic Empire has spread its dominion across countless star systems, ruling with an iron fist and crushing any resistance in its path.",
          "But hope remains. A small band of rebels, united in their determination to restore freedom to the galaxy, has begun to gather strength.",
          "Deep in the Outer Rim territories, brave pilots and warriors train in secret, preparing for the inevitable confrontation with Imperial forces.",
          "As darkness grows deeper, ancient prophecies speak of a chosen one who will bring balance to the Force and challenge the Empire's supremacy.",
          "Now, as the stars align and destinies converge, the fate of the galaxy hangs precariously in the balance...",
        ]}
        repeat={true}
      />
    </div>
  );
}
