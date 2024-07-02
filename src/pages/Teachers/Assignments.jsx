import React from 'react';
import Sidebar from './Sidebar';
import axios from 'axios';
import {
    AssignmentsContainer,
    Content,
    AssignmentsContent,
    AssignmentsHeader,
    AssignmentList,
    AssignmentTitle,
    AddAssignmentButton,
    AddAssignmentForm,
    AddAssignmentInput,
    AddAssignmentTextArea
} from '../../styles/AssignmentsStyles'; 

const AssignmentSection = () => {


  return (
    <AssignmentsContainer>
      <Sidebar />
      <Content>
        <AssignmentsContent>
          <AssignmentsHeader>Assignments</AssignmentsHeader>
          <AddAssignmentForm>
            <AddAssignmentInput
                  type='text'
                  placeholder='Enter Assignment title'
            
            />
            <AddAssignmentTextArea
             placeholder='Enter Assignment description'
            
            />
            <AddAssignmentInput
              type='text'  
              placeholder='Enter Assignment grade'
            />
            <AddAssignmentButton type='submit'>Add Assignment</AddAssignmentButton>
          </AddAssignmentForm>
          <AssignmentList>
            
          </AssignmentList>
        </AssignmentsContent>
      </Content>
    </AssignmentsContainer>

  );
};

export default AssignmentSection;