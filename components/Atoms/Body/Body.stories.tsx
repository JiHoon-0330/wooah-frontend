import { ComponentMeta, ComponentStory } from "@storybook/react";
import Body from "./Body";

type Component = typeof Body;

const args: Parameters<Component>[0] = {
  body: "body",
};

export default {
  title: "Atoms/Body",
  component: Body,
  args,
} as ComponentMeta<Component>;

const Template: ComponentStory<Component> = (args) => <Body {...args} />;
export const Default = Template.bind({});
