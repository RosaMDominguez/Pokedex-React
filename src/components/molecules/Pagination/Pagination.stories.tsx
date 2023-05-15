import Pagination from './Pagination';
import { Meta, Story } from '@storybook/react';
import { PaginationProps } from './Pagination.interface';

export default {
  title: 'Components/molecules/Card',
  component: Pagination
} as Meta;

const Template: Story<PaginationProps> = arg => <Pagination {...arg} />;

export const Default = Template.bind({});

Default.args = {
  numPage: 1,
  updateCurrentPage:()=>{}
};