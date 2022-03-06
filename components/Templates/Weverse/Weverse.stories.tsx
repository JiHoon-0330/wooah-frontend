import { ComponentMeta, ComponentStory } from "@storybook/react";
import dataWeverse from "../../../data/weverse/dataWeverse";
import useWorker from "../../../mocks/useWorker";
import { weverseApi } from "../../../mocks/weverseHandlers";
import Weverse from "./Weverse";

type Component = typeof Weverse;

export default {
  title: "Templates/Weverse",
  component: Weverse,
} as ComponentMeta<Component>;

const Template: ComponentStory<Component> = (args) => <Weverse />;

const api = (func: Parameters<typeof weverseApi>[1]) => {
  useWorker(weverseApi("GET WEVERSE_POST /weverse", func));
};

export const Default = Template.bind({});
Default.decorators = [
  (story) => {
    api((req, res, ctx) => {
      return res(ctx.status(200), ctx.json(dataWeverse));
    });
    return story();
  },
];

export const Loading = Template.bind({});
Loading.decorators = [
  (story) => {
    api((req, res, ctx) => {
      return res(ctx.status(200), ctx.delay(5000), ctx.json(dataWeverse));
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
