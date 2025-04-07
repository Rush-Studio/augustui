import mixpanel from "mixpanel-browser";

const MIXPANEL_TOKEN = process.env.NEXT_PUBLIC_MIXPANEL_TOKEN;
const IS_DEVELOPMENT = process.env.NODE_ENV === "development";

// Create a no-op implementation for development
const noopMixpanel = {
  track: () => {},
  identify: () => {},
  reset: () => {},
  // Add other mixpanel methods as needed
};

export const initMixpanel = () => {
  if (IS_DEVELOPMENT) {
    // In development, replace the mixpanel instance with our no-op version
    Object.assign(mixpanel, noopMixpanel);
    return;
  }

  if (!MIXPANEL_TOKEN) {
    console.warn("Mixpanel token is missing! Check your .env file.");
    return;
  }

  mixpanel.init(MIXPANEL_TOKEN);
};
