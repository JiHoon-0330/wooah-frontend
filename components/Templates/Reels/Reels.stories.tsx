import { ComponentMeta, ComponentStory } from "@storybook/react";
import { rest } from "msw";
import dataReels from "../../../data/reels/dataReels";
import { handlers } from "../../../mocks/handlers";
import Reels from "./Reels";

type Component = typeof Reels;

export default {
  title: "Templates/Reels",
  component: Reels,
  parameters: {
    msw: handlers,
  },
} as ComponentMeta<Component>;

const Template: ComponentStory<Component> = () => <Reels />;

export const Default = Template.bind({});

export const Loading = Template.bind({});
Loading.parameters = {
  msw: [
    rest.get("/instagram/reels", (req, res, ctx) => {
      return res(ctx.status(200), ctx.delay(5000), ctx.json(dataReels));
    }),
  ],
};

export const Empty = Template.bind({});
Empty.parameters = {
  msw: [
    rest.get("/instagram/reels", (req, res, ctx) => {
      return res(ctx.status(200), ctx.json({}));
    }),
  ],
};

export const Error = Template.bind({});
Error.parameters = {
  msw: [
    rest.get("/instagram/reels", (req, res, ctx) => {
      return res(ctx.status(500), ctx.body("error"));
    }),
  ],
};
