import React, {useState, useEffect} from "react";
import Sidebar from "./Sidebar";
import axios from "axios";

import {
    AttendanceContainer,
    Content,
    AttendanceContent,
    AttendanceHeader,
    AttendanceList,
    AttendanceItem,
    StudentName,
    CheckboxLabel,
    Divider,
    SubmitButton
} from '../../styles/AttendanceStyles'


const Attendance = () => {
    return (
        <AttendanceContainer>
            <Sidebar />
            <Content>
                <AttendanceContent>
                    <AttendanceHeader>Attendance</AttendanceHeader>
                    <AttendanceList>
                        <StudentName></StudentName>
                        <CheckboxLabel>
                            <input
                              type="checkbox" 
                            
                            />
                            Present
                        </CheckboxLabel>
                        <CheckboxLabel>
                            <input
                              type="checkbox" 
                            
                            />
                            Absent
                        </CheckboxLabel>
                        <CheckboxLabel>
                            <input
                              type="checkbox" 
                            
                            />
                            Absent with apology
                        </CheckboxLabel>
                    </AttendanceList>
                    <SubmitButton >Submit</SubmitButton>
                </AttendanceContent>
            </Content>
        </AttendanceContainer>

    )
}

export default Attendance