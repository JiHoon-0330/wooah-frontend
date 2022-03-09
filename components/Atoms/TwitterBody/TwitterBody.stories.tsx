import { ComponentMeta, ComponentStory } from "@storybook/react";
import TwitterBody from "./TwitterBody";

type Component = typeof TwitterBody;

export default {
  title: "Atoms/TwitterBody",
  component: TwitterBody,
  args: {
    body: `[<a class=twitter__hashtag href="https://twitter.com/hashtag/민서?src=hashtag_click" target="_blank">#민서</a>]
오늘 날씨가 딱 선선하니 너무너무 좋아요!🥰🥰 일요일인데 다들 푸욱 쉬고 맛있는 것도 먹어요~~♥️ 보고시푸다🤣
    
<a class=twitter__hashtag href="https://twitter.com/hashtag/wooah?src=hashtag_click" target="_blank">#wooah</a> <a class=twitter__hashtag href="https://twitter.com/hashtag/우아?src=hashtag_click" target="_blank">#우아</a> <a class=twitter__hashtag href="https://twitter.com/hashtag/MINSEO?src=hashtag_click" target="_blank">#MINSEO</a>`,
  },
} as ComponentMeta<Component>;

export const Default: ComponentStory<Component> = (args) => (
  <TwitterBody {...args} />
);
