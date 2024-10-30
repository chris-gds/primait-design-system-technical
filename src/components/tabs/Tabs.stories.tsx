import React from "react";
import Tabs from "./Tabs";

export default {
  title: "Components/Tabs/All Variations",
  component: Tabs,
};

const Template = (args) => <Tabs {...args} />;

export const Default = Template.bind({});
Default.args = {
  tabConfigs: [
    { label: "Emails", badgeLabel: "", badgeVariant: null, variant: "pill" },
    {
      label: "Files",
      badgeLabel: "Status",
      badgeVariant: "neutral",
      variant: "pill",
    },
    {
      label: "Edits",
      badgeLabel: "Warning",
      badgeVariant: "negative",
      variant: "pill",
    },
    { label: "Dashboard", badgeLabel: "", badgeVariant: null, variant: "pill" },
    { label: "Messages", badgeLabel: "", badgeVariant: null, variant: "pill" },
  ],
};

export const PillWithBadges = Template.bind({});
PillWithBadges.args = {
  tabConfigs: [
    {
      label: "Emails",
      badgeLabel: "New",
      badgeVariant: "neutral",
      variant: "pill",
    },
    {
      label: "Files",
      badgeLabel: "Status",
      badgeVariant: "neutral",
      variant: "pill",
    },
    {
      label: "Edits",
      badgeLabel: "Warning",
      badgeVariant: "negative",
      variant: "pill",
    },
    {
      label: "Dashboard",
      badgeLabel: "Good",
      badgeVariant: "positive",
      variant: "pill",
    },
    { label: "Messages", badgeLabel: "", badgeVariant: null, variant: "pill" },
  ],
};

export const UnderlineWithBadges = Template.bind({});
UnderlineWithBadges.args = {
  tabConfigs: [
    {
      label: "Emails",
      badgeLabel: "",
      badgeVariant: null,
      variant: "underline",
    },
    {
      label: "Files",
      badgeLabel: "Warning",
      badgeVariant: "negative",
      variant: "underline",
    },
    {
      label: "Edits",
      badgeLabel: "",
      badgeVariant: null,
      variant: "underline",
    },
    {
      label: "Dashboard",
      badgeLabel: "Good",
      badgeVariant: "positive",
      variant: "underline",
    },
    {
      label: "Messages",
      badgeLabel: "",
      badgeVariant: null,
      variant: "underline",
    },
  ],
};

export const AllVariants = Template.bind({});
AllVariants.args = {
  tabConfigs: [
    { label: "Emails", badgeLabel: "", badgeVariant: null, variant: "pill" },
    {
      label: "Files",
      badgeLabel: "Status",
      badgeVariant: "neutral",
      variant: "pill",
    },
    {
      label: "Edits",
      badgeLabel: "Warning",
      badgeVariant: "negative",
      variant: "pill",
    },
    { label: "Dashboard", badgeLabel: "", badgeVariant: null, variant: "pill" },
    { label: "Messages", badgeLabel: "", badgeVariant: null, variant: "pill" },
  ],
};

export const AllVariantsWithBadges = Template.bind({});
AllVariantsWithBadges.args = {
  tabConfigs: [
    {
      label: "Emails",
      badgeLabel: "New",
      badgeVariant: "neutral",
      variant: "underline",
    },
    {
      label: "Files",
      badgeLabel: "Warning",
      badgeVariant: "negative",
      variant: "underline",
    },
    {
      label: "Edits",
      badgeLabel: "",
      badgeVariant: null,
      variant: "underline",
    },
    {
      label: "Dashboard",
      badgeLabel: "Good",
      badgeVariant: "positive",
      variant: "underline",
    },
    {
      label: "Messages",
      badgeLabel: "",
      badgeVariant: null,
      variant: "underline",
    },
  ],
};
