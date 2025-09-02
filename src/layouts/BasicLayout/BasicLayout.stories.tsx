import type { Meta, StoryObj } from '@storybook/react';
import BasicLayout, { type BasicLayoutProps } from './BasicLayout';

const meta: Meta<BasicLayoutProps> = {
  title: 'Layouts/BasicLayout',
  component: BasicLayout,
  args: { title: 'Demo' },
};

export default meta;

type Story = StoryObj<BasicLayoutProps>;

export const Default: Story = {
  render: (args) => (
    <BasicLayout {...args}>
      <div>Content</div>
    </BasicLayout>
  ),
};
