import React from 'react';
import Sidebar from './Sidebar';
import axios from 'axios';
import {
       ClassContainer,
       SidebarContainer,
       Content,
       ClassHeader,
       ClassList,
       ClassItem
} from '../../styles/ClassesStyles'; 

const ClassSection = () => {


  return (
    <ClassContainer>
      <SidebarContainer>
        <Sidebar />
      </SidebarContainer>
      <Content>
        <ClassHeader>Classes</ClassHeader>
        <ClassList>
          
        </ClassList>
      </Content>
    </ClassContainer>

  );
};

export default ClassSection;