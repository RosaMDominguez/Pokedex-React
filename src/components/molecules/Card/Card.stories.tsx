import Card from './Card';
import { Meta, Story } from '@storybook/react';
import { CardProps } from './Card.interface';

export default {
  title: 'Components/molecules/Card',
  component: Card
} as Meta;

const Template: Story<CardProps> = arg => <Card {...arg} />;

export const Default = Template.bind({});

Default.args = {
  pokemonId: '1',
  name: '',
  url: '' 
};