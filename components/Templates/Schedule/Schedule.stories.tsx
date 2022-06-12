import { ComponentMeta, ComponentStory } from "@storybook/react";
import { rest } from "msw";
import { dataSchedule } from "../../../data/schedule/dataSchedule";
import { handlers } from "../../../mocks/handlers";
import Schedule from "./Schedule";

type Component = typeof Schedule;

export default {
  title: "Templates/Schedule",
  component: Schedule,
  parameters: {
    msw: handlers,
  },
} as ComponentMeta<Component>;

const Template: ComponentStory<Component> = () => <Schedule />;

export const Default = Template.bind({});

export const Loading = Template.bind({});
Loading.parameters = {
  msw: [
    rest.get("/schedule", (req, res, ctx) => {
      return res(ctx.status(200), ctx.delay(5000), ctx.json(dataSchedule));
    }),
  ],
};

export const Empty = Template.bind({});
Empty.parameters = {
  msw: [
    rest.get("/schedule", (req, res, ctx) => {
      return res(ctx.status(200), ctx.json([]));
    }),
  ],
};

export const Error = Template.bind({});
Error.parameters = {
  msw: [
    rest.get("/schedule", (req, res, ctx) => {
      return res(ctx.status(500), ctx.body("error"));
    }),
  ],
};
