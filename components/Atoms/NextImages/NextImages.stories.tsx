import { ComponentMeta, ComponentStory } from "@storybook/react";
import dataPhotos from "../../../data/weverse/dataPhotos";
import NextImages from "./NextImages";

type Component = typeof NextImages;
const images = dataPhotos!.map(({ url, width, height }) => ({
  origin: url,
  src: url,
  width,
  height,
}));

export default {
  title: "Atoms/NextImages",
  component: NextImages,
} as ComponentMeta<Component>;

const Template: ComponentStory<Component> = (args) => <NextImages {...args} />;

export const Default = Template.bind({});
Default.args = {
  images,
};
