import React from 'react';
import Sidebar from './Sidebar';
import axios from 'axios';
import {
  AnnouncementContainer,
  Content,
  Title,
  AnnouncementForm,
  FormGroup,
  Label,
  TextArea,
  Button,
  AnnouncementItem,
  AnnouncementList,
  AnnouncementContent

} from '../../styles/AnnouncementStyles'

const CheckAnnouncementSection = () => {


  return (
    <AnnouncementContainer>
        <Sidebar />
        <Content>
            <Title>Announcement</Title>
            <AnnouncementForm>
                <label htmlFor="announcement" >Announcement</label>
                <TextArea 
                  id="announcement"
                  required
                  rows={4}
                  cols={50}
                />
                <Button type="submit">Send Announcement</Button>
            </AnnouncementForm>


            <h2>Announcement</h2>
            <AnnouncementList>
                
            </AnnouncementList>
        </Content>
    </AnnouncementContainer>

)
};

export default CheckAnnouncementSection;