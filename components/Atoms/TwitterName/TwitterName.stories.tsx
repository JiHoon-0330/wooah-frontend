import TwitterName from "./TwitterName";
import { ComponentMeta, ComponentStory } from "@storybook/react";

type Component = typeof TwitterName;

export default {
  title: "Atoms/TwitterName",
  component: TwitterName,
} as ComponentMeta<Component>;

const Template: ComponentStory<Component> = (args) => <TwitterName {...args} />;

export const Name = Template.bind({});
Name.args = {
  id: "트위터 아이디",
  type: "name",
};

export const ScreenName = Template.bind({});
ScreenName.args = {
  id: "트위터 아이디",
  type: "screen_name",
};

export const Rt = Template.bind({});
Rt.args = {
  id: "트위터 아이디",
  type: "name",
  isRt: true,
};
