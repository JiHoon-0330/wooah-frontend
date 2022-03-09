import { ComponentMeta, ComponentStory } from "@storybook/react";
import { rest } from "msw";
import dataWeverse from "../../../data/weverse/dataWeverse";
import Weverse from "./Weverse";

type Component = typeof Weverse;

export default {
  title: "Templates/Weverse",
  component: Weverse,
} as ComponentMeta<Component>;

const Template: ComponentStory<Component> = (args) => <Weverse />;

export const Default = Template.bind({});
Default.parameters = {
  msw: [
    rest.get("/weverse", (req, res, ctx) => {
      return res(ctx.status(200), ctx.json(dataWeverse));
    }),
  ],
};

export const Loading = Template.bind({});
Loading.parameters = {
  msw: [
    rest.get("/weverse", (req, res, ctx) => {
      return res(ctx.status(200), ctx.delay(5000), ctx.json(dataWeverse));
    }),
  ],
};

export const Empty = Template.bind({});
Empty.parameters = {
  msw: [
    rest.get("/weverse", (req, res, ctx) => {
      return res(ctx.status(200), ctx.json({}));
    }),
  ],
};

export const Error = Template.bind({});
Error.parameters = {
  msw: [
    rest.get("/weverse", (req, res, ctx) => {
      return res(ctx.status(500), ctx.body("error"));
    }),
  ],
};
