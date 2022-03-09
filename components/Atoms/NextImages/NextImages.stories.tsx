import { ComponentMeta, ComponentStory } from "@storybook/react";
import dataPhotos from "../../../data/weverse/dataPhotos";
import { getFormattedImages } from "../../../services/images/weverseImages";
import NextImages from "./NextImages";

type Component = typeof NextImages;
const images = getFormattedImages(dataPhotos)!;

export default {
  title: "Atoms/NextImages",
  component: NextImages,
} as ComponentMeta<Component>;

const Template: ComponentStory<Component> = (args) => <NextImages {...args} />;

export const Default = Template.bind({});
Default.args = {
  images,
};
