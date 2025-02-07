import React from 'react';
import Sidebar from './Sidebar';
import axios from 'axios';
import {
  StudentsContainer,
  Content,
  StudentsContent,
  StudentsHeader,
  StudentList,
  StudentItem,
  AddStudentButton,
  AddStudentForm,
  AddStudentInput
} from '../../styles/StudentsStyles'; 

const StudentSection = () => {


  return (
        <StudentsContainer>
          <Sidebar />
          <Content>
            <StudentsContent>
              <StudentsHeader>Students</StudentsHeader>
              <StudentList>

              </StudentList>
            </StudentsContent>
          </Content>
        </StudentsContainer>
  );
};

export default StudentSection