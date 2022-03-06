import Date from "./Date";
import { ComponentMeta, ComponentStory } from "@storybook/react";

type Component = typeof Date;

export default {
  title: "Atoms/Date",
  component: Date,
} as ComponentMeta<Component>;

export const Default: ComponentStory<Component> = () => (
  <Date date="2022.02.26 16:44" />
);
