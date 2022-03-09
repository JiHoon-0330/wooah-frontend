import { ComponentMeta, ComponentStory } from "@storybook/react";
import Card from "./Card";

type Component = typeof Card;

export default {
  title: "Atoms/Card",
  component: Card,
} as ComponentMeta<Component>;

const Template: ComponentStory<Component> = (args) => (
  <Card {...args}>
    <div></div>
  </Card>
);

export const Default = Template.bind({});
