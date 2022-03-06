import { ComponentMeta, ComponentStory } from "@storybook/react";
import Youtube from "./Youtube";

type Component = typeof Youtube;

export default {
  title: "Atoms/Youtube",
  component: Youtube,
  args: {
    youtubeId: "0fJiC8satyY",
  },
} as ComponentMeta<Component>;

export const Default: ComponentStory<Component> = (args) => (
  <Youtube {...args} />
);
