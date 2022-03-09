import { ComponentMeta, ComponentStory } from "@storybook/react";
import Message from "./Message";

type Component = typeof Message;

export default {
  title: "Atoms/Message",
  component: Message,
} as ComponentMeta<Component>;

const Template: ComponentStory<Component> = (args) => <Message {...args} />;

export const Error = Template.bind({});
Error.args = {
  message: "에러 메세지",
  type: "error",
};

export const Warn = Template.bind({});
Warn.args = {
  message: "경고 메세지",
  type: "warn",
};
