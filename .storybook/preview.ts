import type { Preview } from "@storybook/angular";
import { applicationConfig } from "@storybook/angular";
import { provideHttpClient } from "@angular/common/http";
import { provideAngularSvgIcon } from "angular-svg-icon";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    applicationConfig({
      providers: [provideHttpClient(), provideAngularSvgIcon()],
    }),
  ],
};

export default preview;
