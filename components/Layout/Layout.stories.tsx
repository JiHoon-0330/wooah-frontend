import { ComponentMeta, ComponentStory } from "@storybook/react";
import dataWeverse from '../../data/weverse/dataWeverse';
import WeverseTemplate from "../Templates/Weverse/Weverse";
import Layout from "./Layout";

type Component = typeof Layout;

export default {
  title: "Layout/Layout",
  component: Layout,
} as ComponentMeta<Component>;

const Template: ComponentStory<Component> = ({ children, ...args }) => (
  <Layout {...args}>{children}</Layout>
);

export const Weverse = Template.bind({});
Weverse.args = {
  children: <WeverseTemplate initialData={dataWeverse} />,
};
