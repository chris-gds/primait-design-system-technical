// Accessible Tab Pattern
// https://www.w3.org/WAI/ARIA/apg/patterns/tabs/examples/tabs-automatic/

import React, { useState, useRef } from "react";
import Button from "../button/Button";
import styles from "./Tabs.module.scss";

interface TabConfig {
  label: string;
  badgeLabel: string;
  badgeVariant?: "neutral" | "positive" | "negative" | null;
  variant: "pill" | "underline";
}

interface TabsProps {
  tabConfigs: TabConfig[];
}

const Tabs: React.FC<TabsProps> = ({ tabConfigs }) => {
  const [activeTab, setActiveTab] = useState(1);
  const buttonRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const tabsWrapperRef = useRef<HTMLUListElement | null>(null);

  const handleTabInteraction = (tabIndex: number) => {
    setActiveTab(tabIndex);
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
    buttonRefs.current[tabIndex - 1]?.focus();
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    let newActiveTab = activeTab;
    if (event.key === "ArrowRight") {
      newActiveTab = activeTab < tabConfigs.length ? activeTab + 1 : activeTab;
    } else if (event.key === "ArrowLeft") {
      newActiveTab = activeTab > 1 ? activeTab - 1 : activeTab;
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
        ref={tabsWrapperRef}
      >
        {tabConfigs.map((tab, index) => (
          <li
            key={tab.label}
            role="presentation"
            className={styles.tabsWrapper}
          >
            <Button
              id={`tab__${tab.label}`}
              ariaControls={`panel__${index + 1}`}
              label={tab.label}
              onClick={() => handleTabInteraction(index + 1)}
              selected={activeTab === index + 1}
              variant={tab.variant}
              badgeLabel={tab.badgeLabel}
              badgeVariant={tab.badgeVariant ?? undefined}
              ref={(el) => (buttonRefs.current[index] = el)}
            />
          </li>
        ))}
      </ul>

      <div className={styles.contentContainer}>
        {tabConfigs.map((tab, index) => (
          <div
            aria-labelledby={`tab__${tab.label}`}
            key={index + 1}
            role="tabpanel"
            id={`panel__${index + 1}`}
            aria-live="polite"
            className={`${styles.tabContent} ${activeTab === index + 1 ? styles["tabContent--active"] : styles["tabContent--hidden"]}`}
          >
            <p>Content for {tab.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
