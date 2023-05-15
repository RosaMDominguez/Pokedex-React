import Button from './Button';
import { Meta, Story } from '@storybook/react';
import { ButtonProps } from './Button.interface';

export default {
  title: 'Components/atoms/Button',
  component: Button
} as Meta;

const Template: Story<ButtonProps> = arg => <Button {...arg} />;

export const Default = Template.bind({});

Default.args = {
 title: 'Enter',
 onClickButton: ()=>{}
};