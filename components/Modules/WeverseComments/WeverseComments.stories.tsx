import { ComponentMeta, ComponentStory } from "@storybook/react";
import dataComments from "../../../data/weverse/dataComments";
import WeverseComments from "./WeverseComments";

type Component = typeof WeverseComments;

export default {
  title: "Modules|Weverse/Comments",
  component: WeverseComments,
} as ComponentMeta<Component>;

const Template: ComponentStory<Component> = (args) => (
  <WeverseComments {...args} />
);

export const Artist = Template.bind({});
Artist.args = {
  comments: dataComments,
};
