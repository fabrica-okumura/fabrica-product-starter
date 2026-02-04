import type { Preview } from "@storybook/react";

import "../src/app/globals.css";

const preview: Preview = {
  parameters: {
    controls: { expanded: true },
  },
};

export default preview;
