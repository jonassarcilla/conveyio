import { Meta, StoryObj } from '@storybook/react';
import Navbar from './navbar';

const meta = {
  title: 'Navbar Example',
  component: Navbar,
} satisfies Meta<typeof Navbar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
