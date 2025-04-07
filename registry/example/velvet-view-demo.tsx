import VelvetView from "../augustui/velvet-view";

export default function VelvetViewDemo() {
  return (
    <VelvetView
      slides={[
        {
          imageSrc:
            "https://images.unsplash.com/photo-1481018085669-2bc6e4f00eed?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          imageText: "Ashen grace in slow motion",
        },
        {
          imageSrc:
            "https://images.unsplash.com/photo-1475070929565-c985b496cb9f?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          imageText: "Time hums in glass veins",
        },
        {
          imageSrc:
            "https://images.unsplash.com/photo-1509023464722-18d996393ca8?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          imageText: "Static hearts, cinematic longing.",
        },
      ]}
    />
  );
}
