import React from "react";
import PropTypes from "prop-types";

const Tab = props => {
  /* Using your props, determine if the `tab` prop matches the `selectedTab` prop, 
      if they match, the className should be: 'tab active-tab', 
      if it is not it should just be 'tab'*/
  const { tab, selectedTab, selectTabHandler } = props;

  return (
    <div
      className={tab === selectedTab ? "tab active-tab" : "tab"}
      onClick={() => selectTabHandler(tab)}
      // onClick={() => 
      // {
      //   /* Replace this dummy click handler function with your selectTabHandler function from props 
      //    you'll need to pass the `tab` in as an argument to this handler. */
      // }}
    >
      {tab.toUpperCase()}
    </div>
  );
};

// Make sure you include PropTypes on your props.
Tab.propTypes = {
  tab: PropTypes.string.isRequired,
  selectedTab: PropTypes.string.isRequired,
  selectTabHandler: PropTypes.func.isRequired
}

export default Tab;
