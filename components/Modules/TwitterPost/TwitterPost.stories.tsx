import { ComponentMeta, ComponentStory } from "@storybook/react";
import dataMedia from "../../../data/twitter/dataMedia";
import dataMeta from "../../../data/twitter/dataMeta";
import dataTwitter from "../../../data/twitter/dataTwitter";
import TwitterPost from "./TwitterPost";

type Component = typeof TwitterPost;

export default {
  title: "Modules|Twitter/Post",
  component: TwitterPost,
} as ComponentMeta<Component>;

const Template: ComponentStory<Component> = (args) => <TwitterPost {...args} />;

export const Default = Template.bind({});
Default.args = dataTwitter.data[0];

export const Media = Template.bind({});
Media.args = dataMedia;

export const Meta = Template.bind({});
Meta.args = dataMeta;
