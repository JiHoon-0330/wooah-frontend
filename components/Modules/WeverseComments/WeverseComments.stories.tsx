import { ComponentMeta, ComponentStory } from "@storybook/react";
import dataComments from "../../../data/weverse/dataComments";
import WeverseComments from "./WeverseComments";

type Component = typeof WeverseComments;

export default {
  title: "Modules|Weverse/Comments",
  component: WeverseComments,
} as ComponentMeta<Component>;

const Template: ComponentStory<Component> = (args) => (
  <WeverseComments {...args} />
);

export const Artist = Template.bind({});
Artist.args = {
  comments: dataComments,
  grade: "ARTIST",
};

export const Fan = Template.bind({});
Fan.args = {
  comments: [
    {
      id: 1685916316937888,
      body: "아까는 너무 재밌었어❤️☺️\n벌써 보고싶은거 알지...🥺\n헤헤 얼른 다시 가자❤️",
      createdAt: "2022-03-04T23:04:13+09:00",
      grade: "ARTIST",
      profileNickname: "🍑소라야🍒",
      artistId: 111,
    },
  ],
  grade: "FAN",
};
