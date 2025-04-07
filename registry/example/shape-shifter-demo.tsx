import ShapeShifter from "../augustui/shape-shifter";

export default function ShapeShifterDemo() {
  const sampleImages = [
    "https://images.unsplash.com/photo-1721059537602-e844ccc60c94?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1661962399580-80301d32d791?q=80&w=3850&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1663792573804-0347dfaffdab?q=80&w=3880&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1664700651198-42cf8d382dc3?q=80&w=3871&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1722929517020-69d5530e8c92?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1711239682372-fd545e32cb5b?q=80&w=3276&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1663868891817-8853b9eb83f0?q=80&w=3864&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1721059571819-e57015549fa1?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];

  const defaultShapeVariants = [
    {
      borderRadius: "100%",
      width: "75px",
      height: "75px",
      rotate: 0,
    },
    {
      borderRadius: "100px",
      width: "150px",
      height: "75px",
      rotate: 0,
    },
    {
      borderRadius: "30px",
      width: "250px",
      height: "150px",
      rotate: 0,
    },
    {
      borderRadius: "30px",
      width: "200px",
      height: "250px",
      rotate: 10,
    },
    {
      borderRadius: "30px",
      width: "180px",
      height: "180px",
      rotate: -10,
    },
    {
      borderRadius: "30px",
      width: "150px",
      height: "150px",
      rotate: 0,
    },
  ];

  return (
    <div className="flex items-center gap-4">
      <p className="whitespace-nowrap text-2xl font-bold">Well this is</p>
      <ShapeShifter
        images={sampleImages}
        shapeVariants={defaultShapeVariants}
      />
      <p className="whitespace-nowrap text-2xl font-bold">NOTHING</p>
    </div>
  );
}
