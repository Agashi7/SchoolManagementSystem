import React from 'react';
import Sidebar from './Sidebar';
import axios from 'axios';
import  {
  EventCalendarContainer,
  Content,
  CalendarContainer,
  Events,
  Event,
  AddEventForm,
  EventInput,
  AddEventButton,
  ErrorText

} from '../../styles/EventCalendarStyles';

const EventSection = () => {
  return (
    <EventCalendarContainer>
        <Sidebar />
        <Content>
            <h1>Events and Calender</h1>
            <div>Current Time: </div>
            <CalendarContainer>
                Calendar
            </CalendarContainer>
            <AddEventForm>
                <h2>Add New Event</h2>
                <EventInput 
                  type="text"
                  placeholder="Enter event"
                />
                <AddEventButton type="submit">Add Event</AddEventButton>
            </AddEventForm>

            <Events>
                <h2>Events</h2>
            </Events>
        </Content>
    </EventCalendarContainer>
    

)



};

export default EventSection;