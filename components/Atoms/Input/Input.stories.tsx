import { ComponentMeta, ComponentStory } from "@storybook/react";
import Input from "./Input";

type Component = typeof Input;

export default {
  title: "Atoms/Input",
  component: Input,
} as ComponentMeta<Component>;

export const Default: ComponentStory<Component> = (args) => <Input {...args} />;
