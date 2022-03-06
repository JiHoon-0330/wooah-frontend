import { ComponentMeta, ComponentStory } from "@storybook/react";
import WeverseLockedContent from "./WeverseLockedContent";

type Component = typeof WeverseLockedContent;

export default {
  title: "Modules|Weverse/LockedContent",
  component: WeverseLockedContent,
  args: {
    contentsId: "1",
  },
} as ComponentMeta<Component>;

const Template: ComponentStory<Component> = (args) => (
  <WeverseLockedContent {...args} />
);

export const Default = Template.bind({});
