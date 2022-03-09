import { ComponentMeta, ComponentStory } from "@storybook/react";
import dataReels from "../../../data/reels/dataReels";
import ReelsPost from "./ReelsPost";

type Component = typeof ReelsPost;

export default {
  title: "Modules|Reels/Post",
  component: ReelsPost,
  args: dataReels.data[0],
} as ComponentMeta<Component>;

export const Default: ComponentStory<Component> = (args) => (
  <ReelsPost {...args} />
);
