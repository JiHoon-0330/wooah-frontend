import Twitter from "./Twitter";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { handlers } from "../../../mocks/handlers";
import dataTwitter from "../../../data/twitter/dataTwitter";
import { rest } from "msw";

type Component = typeof Twitter;

export default {
  title: "Templates/Twitter",
  component: Twitter,
  parameters: {
    msw: handlers,
  },
} as ComponentMeta<Component>;

const Template: ComponentStory<Component> = () => <Twitter />;

export const Default = Template.bind({});

export const Loading = Template.bind({});
Loading.parameters = {
  msw: [
    rest.get("/twitter", (req, res, ctx) => {
      return res(ctx.status(200), ctx.delay(5000), ctx.json(dataTwitter));
    }),
  ],
};

export const Empty = Template.bind({});

Empty.parameters = {
  msw: [
    rest.get("/twitter", (req, res, ctx) => {
      return res(ctx.status(200), ctx.json({}));
    }),
  ],
};

export const Error = Template.bind({});
Error.parameters = {
  msw: [
    rest.get("/twitter", (req, res, ctx) => {
      return res(ctx.status(500), ctx.body("error"));
    }),
  ],
};
