import React from "react";
import { Meta, Story } from "@storybook/react";
import Tabs from "./Tabs";

export default {
  title: "Components/Tabs",
  component: Tabs,
  argTypes: {
    label1: { control: "text" },
    badgeLabel1: { control: "text" },
    badgeVariant1: {
      control: "select",
      options: [undefined, "neutral", "positive", "negative", null],
    },
    variant1: {
      control: "select",
      options: ["pill", "underline"],
    },
    label2: { control: "text" },
    badgeLabel2: { control: "text" },
    badgeVariant2: {
      control: "select",
      options: [undefined, "neutral", "positive", "negative", null],
    },
    variant2: {
      control: "select",
      options: ["pill", "underline"],
    },
    label3: { control: "text" },
    badgeLabel3: { control: "text" },
    badgeVariant3: {
      control: "select",
      options: [undefined, "neutral", "positive", "negative", null],
    },
    variant3: {
      control: "select",
      options: ["pill", "underline"],
    },
    label4: { control: "text" },
    badgeLabel4: { control: "text" },
    badgeVariant4: {
      control: "select",
      options: [undefined, "neutral", "positive", "negative", null],
    },
    variant4: {
      control: "select",
      options: ["pill", "underline"],
    },
    label5: { control: "text" },
    badgeLabel5: { control: "text" },
    badgeVariant5: {
      control: "select",
      options: [undefined, "neutral", "positive", "negative", null],
    },
    variant5: {
      control: "select",
      options: ["pill", "underline"],
    },
  },
} as Meta;

const Template: Story = (args) => {
  const tabConfigs = [
    {
      label: args.label1,
      badgeLabel: args.badgeLabel1,
      badgeVariant: args.badgeVariant1,
      variant: args.variant1,
    },
    {
      label: args.label2,
      badgeLabel: args.badgeLabel2,
      badgeVariant: args.badgeVariant2,
      variant: args.variant2,
    },
    {
      label: args.label3,
      badgeLabel: args.badgeLabel3,
      badgeVariant: args.badgeVariant3,
      variant: args.variant3,
    },
    {
      label: args.label4,
      badgeLabel: args.badgeLabel4,
      badgeVariant: args.badgeVariant4,
      variant: args.variant4,
    },
    {
      label: args.label5,
      badgeLabel: args.badgeLabel5,
      badgeVariant: args.badgeVariant5,
      variant: args.variant5,
    },
  ];

  return <Tabs tabConfigs={tabConfigs} />;
};

export const Pill = Template.bind({});
Pill.args = {
  label1: "Emails",
  badgeLabel1: "New",
  badgeVariant1: "neutral",
  variant1: "pill",
  label2: "Files",
  badgeLabel2: "Warning",
  badgeVariant2: "negative",
  variant2: "pill",
  label3: "Edits",
  badgeLabel3: "",
  badgeVariant3: null,
  variant3: "pill",
  label4: "Dashboard",
  badgeLabel4: "Good",
  badgeVariant4: "positive",
  variant4: "pill",
  label5: "Messages",
  badgeLabel5: "",
  badgeVariant5: null,
  variant5: "pill",
};

export const Underline = Template.bind({});
Underline.args = {
  label1: "Emails",
  badgeLabel1: "New",
  badgeVariant1: "neutral",
  variant1: "underline",
  label2: "Files",
  badgeLabel2: "Warning",
  badgeVariant2: "negative",
  variant2: "underline",
  label3: "Edits",
  badgeLabel3: "",
  badgeVariant3: null,
  variant3: "underline",
  label4: "Dashboard",
  badgeLabel4: "Good",
  badgeVariant4: "positive",
  variant4: "underline",
  label5: "Messages",
  badgeLabel5: "",
  badgeVariant5: null,
  variant5: "underline",
};
