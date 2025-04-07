import PhantomHover from "../augustui/phantom-hover";

export default function PhantomHoverDemo() {
  return (
    <div className="flex items-center justify-center">
      <PhantomHover>
        <button className="rounded-md bg-transparent px-4 py-2">
          Hover Me!
        </button>
      </PhantomHover>
    </div>
  );
}
