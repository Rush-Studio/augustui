import WhisperText from "../augustui/whisper-text";

export default function WhisperTextDemo() {
  return (
    <WhisperText
      lines={["Good things happen", "to those who take action"]}
      className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
    />
  );
}
