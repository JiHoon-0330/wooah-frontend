import { MINIMAL_VIEWPORTS } from "@storybook/addon-viewport";
import { QueryClient, QueryClientProvider } from "react-query";
import * as NextImage from "next/image";
import { RouterContext } from "next/dist/shared/lib/router-context";
import "../styles/globals.css";

const OriginalNextImage = NextImage.default;

Object.defineProperty(NextImage, "default", {
  configurable: true,
  value: (props) => <OriginalNextImage {...props} unoptimized />,
});

const customViewports = {
  iPhone12mini: {
    name: "iPhone 12 mini",
    styles: {
      width: "375px",
      height: "812px",
    },
  },
};

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  viewport: {
    viewports: { ...MINIMAL_VIEWPORTS, ...customViewports },
    defaultViewport: "iPhone12mini",
  },
  nextRouter: {
    Provider: RouterContext.Provider,
  },
};

const queryClient = new QueryClient();

export const decorators = [
  (story) => (
    <QueryClientProvider client={queryClient}>{story()}</QueryClientProvider>
  ),
];

if (process.env.STORYBOOK !== "false") {
  const { worker } = require("../mocks/browser");
  worker.start();
}
