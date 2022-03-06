import { ComponentMeta, ComponentStory } from "@storybook/react";
import WeverseNickname from "./WeverseNickname";

type Component = typeof WeverseNickname;

export default {
  title: "Atoms/WeverseNickname",
  component: WeverseNickname,
  args: {
    nickname: "닉네임",
  },
} as ComponentMeta<Component>;

const Template: ComponentStory<Component> = (args) => (
  <WeverseNickname {...args} />
);

export const Default = Template.bind({});
