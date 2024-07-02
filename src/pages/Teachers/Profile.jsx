import React from 'react';
import Sidebar from './Sidebar';
import axios from 'axios';
import {
  ProfileContainer,
  SidebarContainer,
  Content,
  ProfileHeader,
  ProfileDetail,
  ProfileLabel,
  ProfileInfo,
  EditButton,
  ProfileDetails

} from '../../styles/SettingsProfileStyles';

const TeacherProfileSection = () => {
  const teacherInfo =  {
    name: 'Jhone Doe',
    email: 'deo@email.com',
    phone: '1111111',
    address: 'AlwarStreet Street Kovilpatti',
    qualification: 'Engineering in ComputerScience'
}
return (
    <ProfileContainer>
        <SidebarContainer>
            <Sidebar />
        </SidebarContainer>
        <Content>
            <ProfileHeader>Profile Details</ProfileHeader>
            <ProfileDetails>
                <ProfileLabel>Name: </ProfileLabel>
                <ProfileInfo>{teacherInfo.name}</ProfileInfo>

                <ProfileLabel>Email: </ProfileLabel>
                <ProfileInfo>{teacherInfo.email}</ProfileInfo>

                <ProfileLabel>Phone: </ProfileLabel>
                <ProfileInfo>{teacherInfo.phone}</ProfileInfo>

                <ProfileLabel>Address: </ProfileLabel>
                <ProfileInfo>{teacherInfo.address}</ProfileInfo>

                <ProfileLabel>Qualification:  </ProfileLabel>
                <ProfileInfo>{teacherInfo.qualification}</ProfileInfo>
            </ProfileDetails>

            <EditButton>Edit Profile</EditButton>
        </Content>
    </ProfileContainer>

)
};

export default TeacherProfileSection;