import { ComponentMeta, ComponentStory } from "@storybook/react";
import Button from "./Button";

type Component = typeof Button;

export default {
  title: "Atoms/Button",
  component: Button,
  args: {
    children: "버튼",
  },
} as ComponentMeta<Component>;

export const Default: ComponentStory<Component> = ({ children, ...args }) => (
  <Button {...args}>{children}</Button>
);
