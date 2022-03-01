import { ComponentMeta, ComponentStory } from "@storybook/react";
import Header from "./Header";

type Component = typeof Header;

export default {
  title: "Layout/Header",
  component: Header,
} as ComponentMeta<Component>;

export const Default: ComponentStory<Component> = () => <Header />;
