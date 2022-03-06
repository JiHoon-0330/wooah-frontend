import { ComponentMeta, ComponentStory } from "@storybook/react";
import { rest } from "msw";
import dataAttachedVideos from "../../../data/weverse/dataAttachedVideos";
import dataComments from "../../../data/weverse/dataComments";
import dataLockedPost from "../../../data/weverse/dataLockedPost";
import dataPhotos from "../../../data/weverse/dataPhotos";
import useWorker from "../../../mocks/useWorker";
import WeversePost from "./WeversePost";

type Component = typeof WeversePost;

const args: Parameters<Component>[0] = {
  contentsId: "",
  artistName: "default",
  body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, doloremque quaerat doloribus natus velit excepturi eaque hic ex temporibus cum veniam maxime deleniti a dicta accusamus laudantium aspernatur non ab.",
  createdAt: "2022.02.27 10:25",
  profileNickname: "닉네임",
  grade: "ARTIST",
  contentsType: "ARTIST_POST",
  id: 1,
};

export default {
  title: "Modules|Weverse/Post",
  component: WeversePost,
  args,
} as ComponentMeta<Component>;

const Template: ComponentStory<Component> = (args) => <WeversePost {...args} />;

export const Default = Template.bind({});
export const DefaultComments = Template.bind({});
DefaultComments.args = {
  ...args,
  comments: dataComments,
};

const lockedArgs = {
  ...args,
  isLocked: true,
  postError: {},
  contentsId: "1",
};

export const LockedSuccess = Template.bind({});
LockedSuccess.args = lockedArgs;
LockedSuccess.decorators = [
  (story) => {
    useWorker(
      rest.post("/weverse/post/:contentsId", (req, res, ctx) => {
        return res(ctx.status(200), ctx.json(dataLockedPost));
      }),
    );
    return story();
  },
];

export const LockedFail = Template.bind({});
LockedFail.args = lockedArgs;
LockedFail.decorators = [
  (story) => {
    useWorker(
      rest.post("/weverse/post/:contentsId", (req, res, ctx) => {
        return res(ctx.status(400), ctx.json({ data: "비밀번호 오류" }));
      }),
    );
    return story();
  },
];

export const Images = Template.bind({});
Images.args = {
  ...args,
  photos: dataPhotos,
};
export const ImagesComments = Template.bind({});
ImagesComments.args = {
  ...args,
  photos: dataPhotos,
  comments: dataComments,
};

export const Media = Template.bind({});
Media.args = {
  ...args,
  attachedVideos: dataAttachedVideos,
  artistName: "MEDIA",
};
export const MediaComments = Template.bind({});
MediaComments.args = {
  ...args,
  attachedVideos: dataAttachedVideos,
  comments: dataComments,
  artistName: "MEDIA",
};

export const Youtube = Template.bind({});
Youtube.args = {
  ...args,
  youtubeId: "0fJiC8satyY",
  type: "VIDEO",
};
export const YoutubeComments = Template.bind({});
YoutubeComments.args = {
  ...args,
  youtubeId: "0fJiC8satyY",
  type: "VIDEO",
  comments: dataComments,
};
