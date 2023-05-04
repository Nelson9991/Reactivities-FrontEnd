import { Header, Menu } from 'semantic-ui-react';
import { Calendar } from 'react-calendar'

export const ActivityFilters = () => {
  return (
    <>
      <Menu vertical style={{ width: '100%', marginTop: 28 }}>
        <Header icon="filter" attached color="teal" content="Filters" />
        <Menu.Item content="All Activitites" />
        <Menu.Item content="I'm going" />
        <Menu.Item content="I'm hosting" />
      </Menu>
      <Header />
      <Calendar/>
    </>
  );
};
