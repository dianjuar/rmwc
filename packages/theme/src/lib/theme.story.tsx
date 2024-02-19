import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Theme } from './theme'; // replace with your actual component import
import { themeOptions } from './theme-options';
import { TopAppBar, TopAppBarRow } from '@rmwc/top-app-bar';
import { Tab, TabBar } from '@rmwc/tabs';

export default {
  title: 'Theme',
  component: Theme
} as Meta;

type Story = StoryObj<Parameters<typeof Theme>[0]>;

export const ThemeStory: Story = {
  render: (args) => {
    const themeStyle = {
      padding: '16px',
      margin: '16px',
      display: 'inline-block',
      width: '96px',
      height: '96px',
      verticalAlign: 'top'
    };

    return (
      <div style={{ backgroundColor: '#999' }}>
        <Theme use={['textHintOnLight']} style={themeStyle}>
          Test
        </Theme>
        {themeOptions.map((theme, i) => (
          <Theme key={i} use={theme} style={themeStyle}>
            {theme}
          </Theme>
        ))}
      </div>
    );
  }
};

export const ThemeFixesStory: Story = {
  render: (args) => (
    <div>
      <div>
        <div>Tabs should be proper color on top app bar</div>
        <TopAppBar>
          <TopAppBarRow>
            <TabBar>
              <Tab>One</Tab>
              <Tab>Two</Tab>
              <Tab>Three</Tab>
            </TabBar>
          </TopAppBarRow>
        </TopAppBar>
      </div>
    </div>
  )
};
