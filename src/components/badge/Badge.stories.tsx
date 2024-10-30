import Badge from "./Badge";
import { Meta } from "@storybook/react";

export default {
  title: "Components/Badge",
  component: Badge,
} as Meta;

const Template = (args) => <Badge {...args} />;

export const Neutral = Template.bind({});
Neutral.args = {
  label: "Neutral Badge",
  variant: "neutral",
};

export const Positive = Template.bind({});
Positive.args = {
  label: "Positive Badge",
  variant: "positive",
};

export const Negative = Template.bind({});
Negative.args = {
  label: "Negative Badge",
  variant: "negative",
};
