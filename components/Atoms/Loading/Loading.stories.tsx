import { ComponentMeta, ComponentStory } from "@storybook/react";
import Loading from "./Loading";

type Component = typeof Loading;

export default {
  title: "Atoms/Loading",
  component: Loading,
} as ComponentMeta<Component>;

const Template: ComponentStory<Component> = (args) => <Loading {...args} />;

export const Default = Template.bind({});
