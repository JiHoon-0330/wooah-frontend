import Twitter from "./Twitter";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import useWorker from "../../../mocks/useWorker";
import { twitterApi } from "../../../mocks/twitterHandlers";
import dataTwitter from "../../../data/twitter/dataTwitter";

type Component = typeof Twitter;

export default {
  title: "Templates/Twitter",
  component: Twitter,
} as ComponentMeta<Component>;

const Template: ComponentStory<Component> = () => <Twitter />;

const api = (func: Parameters<typeof twitterApi>[1]) => {
  useWorker(twitterApi("GET TWITTER_POST /twitter", func));
};

export const Default = Template.bind({});
Default.decorators = [
  (story) => {
    api((req, res, ctx) => {
      return res(ctx.status(200), ctx.json(dataTwitter));
    });
    return story();
  },
];

export const Loading = Template.bind({});
Loading.decorators = [
  (story) => {
    api((req, res, ctx) => {
      return res(ctx.status(200), ctx.delay(5000), ctx.json(dataTwitter));
    });
    return story();
  },
];

export const Empty = Template.bind({});
Empty.decorators = [
  (story) => {
    api((req, res, ctx) => {
      return res(ctx.status(200), ctx.json({}));
    });
    return story();
  },
];

export const Error = Template.bind({});
Error.decorators = [
  (story) => {
    api((req, res, ctx) => {
      return res(ctx.status(500), ctx.body("error"));
    });
    return story();
  },
];
