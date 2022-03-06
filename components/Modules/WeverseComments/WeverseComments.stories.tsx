import { ComponentMeta, ComponentStory } from "@storybook/react";
import dataComments from "../../../data/weverse/dataComments";
import WeverseComments from "./WeverseComments";

type Component = typeof WeverseComments;

const args: Parameters<Component>[0] = {
  comments: [dataComments[0]],
};

export default {
  title: "Modules|Weverse/Comments",
  component: WeverseComments,
  args,
} as ComponentMeta<Component>;

const Template: ComponentStory<Component> = (args) => (
  <WeverseComments {...args} />
);

export const Default = Template.bind({});

export const Multiple = Template.bind({});
Multiple.args = {
  comments: dataComments,
};
