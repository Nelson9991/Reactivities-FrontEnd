﻿import { Button, Form, Segment } from 'semantic-ui-react';
import { ChangeEvent, memo, useEffect, useState } from 'react'
import { useStore } from '../../../app/stores/store';
import { observer } from 'mobx-react-lite';
import { Link, useNavigate, useParams } from 'react-router-dom'
import { Activity } from '../../../models/Activity'
import { LoadingComponent } from '../../../app/layout/LoadingComponent'
import {v4 as uuid} from 'uuid';

export const ActivityForm = observer(() => {
  const { activityStore } = useStore();
  const {
    creatActivity,
    updateActivity,
    loadActivity,
    loadingInitial,
    loading,
  } = activityStore;
  
  const {id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const [activity, setActivity] = useState<Activity>({
    id: '',
    title: '',
    category: '',
    description: '',
    date: '',
    city: '',
    venue: ''
  });
   
  useEffect(() => {
    if (id) {
      loadActivity(id).then(activity => {
        setActivity(activity!);
      });
    }
  }, [id, loadActivity]);

  const handleSubmit = () => {
    if (!activity.id) {
      activity.id = uuid()
      creatActivity(activity).then(() => {
        navigate(`/activities/${activity.id}`)
      });
    } else {
      updateActivity(activity).then(() => {
        navigate(`/activities/${activity.id}`)
      });
    }
  };

  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setActivity({ ...activity, [name]: value });
  };
  
  if (loadingInitial) return <LoadingComponent content='Loading activity...'/>

  return (
    <>
      <Segment clearing>
        <Form onSubmit={handleSubmit} autoComplete="off">
          <Form.Input
            placeholder="Title"
            value={activity.title}
            name="title"
            onChange={handleInputChange}
          />
          <Form.TextArea
            placeholder="Description"
            value={activity.description}
            name="description"
            onChange={handleInputChange}
          />
          <Form.Input
            placeholder="Category"
            value={activity.category}
            name="category"
            onChange={handleInputChange}
          />
          <Form.Input
            type="date"
            placeholder="Date"
            value={activity.date}
            name="date"
            onChange={handleInputChange}
          />
          <Form.Input
            placeholder="City"
            value={activity.city}
            name="city"
            onChange={handleInputChange}
          />
          <Form.Input
            placeholder="Venue"
            value={activity.venue}
            name="venue"
            onChange={handleInputChange}
          />
          <Button
            floated="right"
            positive
            type="submit"
            content="Submit"
            loading={loading}
          />
          <Button
            floated="right"
            type="button"
            content="Cancel"
            as={Link}
            to='/activities'
          />
        </Form>
      </Segment>
    </>
  );
});