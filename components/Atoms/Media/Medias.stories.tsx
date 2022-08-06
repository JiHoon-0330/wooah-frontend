import { ComponentMeta, ComponentStory } from "@storybook/react";
import Media from "./Medias";

type Component = typeof Media;

export default {
  title: "Atoms/Medias",
  component: Media,
  args: {},
} as ComponentMeta<Component>;

const Template: ComponentStory<Component> = (args) => <Media {...args} />;

export const Default = Template.bind({});
