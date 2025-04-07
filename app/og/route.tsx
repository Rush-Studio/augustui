import { Link } from "lucide-react";
import { ImageResponse } from "next/og";

async function loadAssets(): Promise<
  { name: string; data: Buffer; weight: 400 | 600; style: "normal" }[]
> {
  const [
    {
      file: { data: normal },
    },
    {
      file: { data: semibold },
    },
  ] = await Promise.all([
    import("./josefin-sans-otf.json").then((mod) => mod.default || mod),
    import("./josefin-sans-semibold-otf.json").then(
      (mod) => mod.default || mod,
    ),
  ]);

  return [
    {
      name: "Josefin Sans",
      data: Buffer.from(normal, "base64"),
      weight: 400 as const,
      style: "normal" as const,
    },
    {
      name: "Josefin Sans",
      data: Buffer.from(semibold, "base64"),
      weight: 600 as const,
      style: "normal" as const,
    },
  ];
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const title = searchParams.get("title");
  const description = searchParams.get("description");

  const [fonts] = await Promise.all([loadAssets()]);

  return new ImageResponse(
    (
      <div
        tw="flex h-full w-full bg-black text-white"
        style={{ fontFamily: "Josefin Sans" }}
      >
        <div tw="flex border absolute border-neutral-600 border-dashed inset-y-0 left-16 w-[1px]" />
        <div tw="flex border absolute border-neutral-600 border-dashed inset-y-0 right-16 w-[1px]" />
        <div tw="flex border absolute border-neutral-600 inset-x-0 h-[1px] top-16" />
        <div tw="flex border absolute border-neutral-600 inset-x-0 h-[1px] bottom-16" />
        {(title || description) && (
          <div tw="flex absolute flex-row items-center justify-center bottom-24 right-24 text-white">
            <div tw="text-white flex text-[32px] font-semibold tracking-tight ml-2">
              AugustUI
            </div>
          </div>
        )}
        <div tw="flex flex-col absolute justify-center items-center inset-0 p-24 w-full h-full">
          {title || description ? (
            <div tw="flex flex-col items-center justify-center text-center w-full h-full">
              <div tw="tracking-tight flex flex-col justify-center text-white text-balance font-semibold text-[80px]">
                {title} ✨
              </div>
              <div tw="text-[40px] text-gray-300 mt-6 text-balance font-normal">
                {description}
              </div>
            </div>
          ) : (
            <div tw="flex flex-col items-center justify-center text-center w-full h-full gap-2">
              <div tw="text-white flex text-[32px] font-semibold tracking-tight mb-6">
                AugustUI
              </div>
              <div tw="text-white flex text-[80px] font-semibold tracking-tight">
                Modern UI Components ✨
              </div>
              <div tw="text-gray-300 text-2xl flex">
                <p>Build Stunning Web Apps with August UI Components</p>
              </div>
            </div>
          )}
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 628,
      fonts,
    },
  );
}
