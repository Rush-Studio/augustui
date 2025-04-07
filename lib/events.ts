import mixpanel from "mixpanel-browser";
import { z } from "zod";

const eventSchema = z.object({
  name: z.enum([
    "copy_npm_command",
    "copy_usage_code",
    "copy_source_code",
    "open_in_v0",
    "pageview",
    "sidebar_nav_click",
    "header_nav_click",
    // "copy_primitive_code",
    // "copy_theme_code",
  ]),
  // declare type AllowedPropertyValues = string | number | boolean | null
  properties: z
    .record(z.union([z.string(), z.number(), z.boolean(), z.null()]))
    .optional(),
});

export type Event = z.infer<typeof eventSchema>;

export function trackEvent(input: Event): void {
  const event = eventSchema.parse(input);
  if (event) {
    mixpanel.track(event.name, event.properties);
  }
}
