import { ComponentMeta, ComponentStory, Story } from '@storybook/react'

import Home from '.'

export default {
  title: 'templates/Home',
  component: Home
} as ComponentMeta<typeof Home>

export const Default: ComponentStory<typeof Home> | Story = ({ ...args }) => (
  <Home {...args} />
)
