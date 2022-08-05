import { ComponentStory, Story, ComponentMeta } from '@storybook/react'

import Example from '.'

export default {
  title: 'Components/Example',
  component: Example
} as ComponentMeta<typeof Example>

export const Default: ComponentStory<typeof Example> | Story = ({
  ...args
}) => <Example {...args} />
