import { LetterDecoder } from "../augustui/letter-decoder";

export default function LetterDecoderDemo() {
  return (
    <LetterDecoder
      text="Try to decode this, bet you can't"
      triggerOnHover={true}
      triggerOnMount={true}
      scrambleSpeed={50}
      decodeTime={800}
    />
  );
}
