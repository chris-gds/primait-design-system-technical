// Accessible Tab Pattern
// https://www.w3.org/WAI/ARIA/apg/patterns/tabs/examples/tabs-automatic/

import React, { useState, useRef } from "react";
import Button from "../button/Button"; // Ensure you have the Button component imported
import styles from "./Tabs.module.scss";

// Options for badgeVariant: "neutral", "positive" & "negative".
// Options for variant: "pill", "underline".
const tabConfigs = [
  { label: "Emails", badgeLabel: "", badgeVariant: undefined, variant: "pill" },
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
];

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(1);
  const buttonRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const tabsWrapperRef = useRef<HTMLLIElement | null>(null);

  const handleTabInteraction = (tabIndex: number) => {
    // Update active tab
    setActiveTab(tabIndex);

    // Scroll to the active tab
    const container = tabsWrapperRef.current;
    if (container) {
      const activeTabElement = container.children[tabIndex - 1] as HTMLElement;
      if (activeTabElement) {
        activeTabElement.scrollIntoView({
          behavior: "smooth",
          inline: "center",
        });
      }
    }

    // Focus the active tab button
    buttonRefs.current[tabIndex - 1]?.focus();
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    let newActiveTab = activeTab;

    if (event.key === "ArrowRight") {
      newActiveTab = activeTab < tabConfigs.length ? activeTab + 1 : activeTab;
    } else if (event.key === "ArrowLeft") {
      newActiveTab = activeTab > 0 ? activeTab - 1 : activeTab;
    } else if (event.key === "Home") {
      newActiveTab = 1;
    } else if (event.key === "End") {
      newActiveTab = tabConfigs.length;
    }

    if (newActiveTab !== activeTab) {
      handleTabInteraction(newActiveTab);
    }
  };

  return (
    <div className={styles.tabsOuter}>
      <h2 className="visually-hidden">Menu</h2>
      <ul
        className={styles.tabsContainer}
        role="tablist"
        onKeyDown={handleKeyDown}
        tabIndex={0}
      >
        {tabConfigs.map((tab, index) => (
          <li
            key={tab.label}
            role="presentation"
            className={styles.tabsWrapper}
            ref={tabsWrapperRef}
          >
            <Button
              key={index + 1}
              ariaControls={`panel__${index + 1}`}
              label={tab.label}
              onClick={() => handleTabInteraction(index + 1)}
              selected={activeTab === index + 1}
              variant={tab.variant}
              badgeLabel={tab.badgeLabel}
              badgeVariant={tab.badgeVariant}
              ref={(el) => (buttonRefs.current[index] = el)} // Assign ref to each button
            />
          </li>
        ))}
      </ul>

      <div className={styles.contentContainer}>
        {tabConfigs.map((tab, index) => (
          <div
            aria-labelledby={`tab__${tab.label}`.toLowerCase()}
            key={index + 1}
            role="tabpanel"
            id={`panel__${index}`}
            className={`${styles.tabContent} ${activeTab === index + 1 ? styles["tabContent--active"] : ""}`}
          >
            <p>Content for {tab.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
