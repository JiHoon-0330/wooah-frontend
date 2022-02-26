// storybook.test.js
import initStoryshots from "@storybook/addon-storyshots";

// The required import from the @storybook/addon-storyshots-puppeteer addon
import { imageSnapshot } from "@storybook/addon-storyshots-puppeteer";
import { devices } from "puppeteer";
const iPhone = devices["iPhone 12 Mini"];

// Function to customize the snapshot location
const getMatchOptions = ({ context: { fileName } }) => {
  // Generates a custom path based on the file name and the custom directory.

  const snapshotPath =
    process.cwd() + "/storybook-snapshots/" + fileName.split(".")[0];

  return { customSnapshotsDir: snapshotPath };
};

const customizePage = (page) => page.emulate(iPhone);

initStoryshots({
  // your own configuration
  test: imageSnapshot({
    // invoke the function above here
    getMatchOptions,
    customizePage,
  }),
});
