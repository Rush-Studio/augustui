import TypingAnimation from "@/registry/augustui/typing-animation";

export default function TypingAnimationDemo() {
  return (
    <TypingAnimation
      text={[
        "Hello, world!",
        "Konichiwa, world!",
        "Hola, world!",
        "Namaste, world!",
      ]}
      loop={true}
    />
  );
}
