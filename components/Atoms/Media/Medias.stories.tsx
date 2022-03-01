import { ComponentMeta, ComponentStory } from "@storybook/react";
import dataAttachedVideos from "../../../data/weverse/dataAttachedVideos";
import getFormattedMedias from "../../../services/medias/weverseFormatt";
import Media from "./Medias";

type Component = typeof Media;

export default {
  title: "Atoms/Medias",
  component: Media,
  args: {
    medias: getFormattedMedias(dataAttachedVideos),
  },
} as ComponentMeta<Component>;

const Template: ComponentStory<Component> = (args) => <Media {...args} />;

export const Default = Template.bind({});
