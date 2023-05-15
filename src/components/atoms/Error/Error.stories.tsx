import Error from './Error';
import { Meta, Story } from '@storybook/react';
import { ErrorProps } from './Error.interface';

export default {
  title: 'Components/atoms/Button',
  component: Error
} as Meta;

const Template: Story<ErrorProps> = arg => <Error {...arg} />;

export const Default = Template.bind({});

Default.args = {
 text: 'Ha ocurrido un error.'
};