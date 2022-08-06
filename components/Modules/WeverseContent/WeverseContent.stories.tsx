import { ComponentMeta, ComponentStory } from "@storybook/react";
import WeverseContent from "./WeverseContent";

type Component = typeof WeverseContent;

export default {
  title: "Modules|Weverse/Content",
  component: WeverseContent,
} as ComponentMeta<Component>;

const Template: ComponentStory<Component> = (args) => (
  <WeverseContent {...args} />
);

export const Default = Template.bind({});
