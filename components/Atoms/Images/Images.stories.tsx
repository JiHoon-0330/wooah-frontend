import { ComponentMeta, ComponentStory } from "@storybook/react";
import dataImaes from "../../../data/twitter/dataImages";
import Images from "./Images";

type Component = typeof Images;

export default {
  title: "Atoms/Images",
  component: Images,
  args: {
    images: dataImaes,
  },
} as ComponentMeta<Component>;

export const Default: ComponentStory<Component> = (args) => (
  <Images {...args} />
);
