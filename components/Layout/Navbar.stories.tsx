import { ComponentMeta } from "@storybook/react";
import Navbar from "./Navbar";

type Component = typeof Navbar;

export default {
  title: "Layout/Navbar",
  component: Navbar,
} as ComponentMeta<Component>;

export const Default = () => <Navbar />;
