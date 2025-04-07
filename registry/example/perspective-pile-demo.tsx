import PerspectivePile from "../augustui/perspective-pile";

export default function PerspectivePileDemo() {
  return (
    <PerspectivePile
      images={[
        "https://images.unsplash.com/photo-1742268351444-7e153a9fb747?q=80&w=3174&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1742228896964-83f6327740ea?q=80&w=3212&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1742943679519-bb9eb364b152?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      ]}
      className="size-80 pt-16"
    />
  );
}
