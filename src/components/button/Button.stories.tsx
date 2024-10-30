import Button from "./Button";
import { Meta } from "@storybook/react";

export default {
  title: "Components/Button",
  component: Button,
} as Meta;

const Template = (args) => <Button {...args} />;

export const PillSelected = Template.bind({});
PillSelected.args = {
  label: "Label",
  onClick: () => alert("Label Clicked!"),
  disabled: false,
  selected: true,
  variant: "pill",
};

export const PillUnselected = Template.bind({});
PillUnselected.args = {
  label: "Label",
  onClick: () => alert("Label Clicked!"),
  disabled: false,
  selected: false,
  variant: "pill",
};

export const UnderlineSelected = Template.bind({});
UnderlineSelected.args = {
  label: "Label",
  onClick: () => alert("Label Clicked!"),
  disabled: false,
  selected: true,
  variant: "underline",
};

export const UnderlineUnselected = Template.bind({});
UnderlineUnselected.args = {
  label: "Label",
  onClick: () => alert("Label Clicked!"),
  disabled: false,
  selected: false,
  variant: "underline",
};

export const PillSelectedWithBadge = Template.bind({});
PillSelectedWithBadge.args = {
  label: "Label",
  onClick: () => alert("Label Clicked!"),
  disabled: false,
  selected: true,
  variant: "pill",
  badgeVariant: "positive",
  badgeLabel: "Label",
};
