import ButtonMigration from "./migrationcomponents/ButtonMigration.svelte"

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
// More on argTypes: https://storybook.js.org/docs/svelte/api/argtypes
export default {
  title: 'Example/Button',
  component: ButtonMigration,
  argTypes: {
    backgroundColor: { control: 'color' },
    label: { control: 'text' },
    onClick: { action: 'onClick' },
    primary: { control: 'boolean' },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
  },
}

export const Base = {
  primary: false,
  label: 'Button',
}
export const Primary = {
  ...Base,
  primary: true,
}
