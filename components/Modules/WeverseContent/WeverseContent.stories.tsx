import { ComponentMeta, ComponentStory } from "@storybook/react";
import dataAttachedVideos from "../../../data/weverse/dataAttachedVideos";
import dataPhotos from "../../../data/weverse/dataPhotos";
import WeverseContent from "./WeverseContent";

type Component = typeof WeverseContent;

const args: Parameters<Component>[0] = {
  body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet eligendi nisi labore quidem quibusdam architecto natus, esse eveniet? Dolores obcaecati assumenda necessitatibus consectetur. Facere at eos, mollitia minus veritatis architecto.",
  createdAt: "2022.02.27 17:54",
  profileNickname: "닉네임",
};

export default {
  title: "Modules|Weverse/Content",
  component: WeverseContent,
  args,
} as ComponentMeta<Component>;

const Template: ComponentStory<Component> = (args) => (
  <WeverseContent {...args} />
);

export const Default = Template.bind({});

export const Images = Template.bind({});
Images.args = {
  ...args,
  photos: dataPhotos,
};

export const Media = Template.bind({});
Media.args = {
  ...args,
  attachedVideos: dataAttachedVideos,
};
