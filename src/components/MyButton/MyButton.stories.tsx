import React from 'react';
import MyButton from './MyButton';
import type { Meta, StoryObj } from '@storybook/react';
import { withActions } from '@storybook/addon-actions/decorator';

const meta: Meta<typeof MyButton> = {
  title: 'Components/MyButton',
  component: MyButton,
  argTypes: {
    borderColor: { control: 'color' },
  },

  // parameters: {
  //   actions: {
  //     handles: 'click',
  //   },
  // },
  decorators: [withActions],
  tags: ['autodocs'],
};

type Story = StoryObj<typeof MyButton>;

export const Primary: Story = {
  args: {
    label: 'Primary 😃',
    borderColor: 'initial',
  },
};

export const Secondary: Story = {
  args: {
    ...Primary.args,
    label: 'Secondary',
  },
};

export default meta;
