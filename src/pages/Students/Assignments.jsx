import React, {useState, useEffect} from "react";
import Sidebar from "./Sidebar";
import axios from "axios";

import {
    AssignmentsContainer,
    SidebarContainer,
    Content,
    AssignmentButton,
    AssignmentCard,
    AssignmentTitle,
    AssignmentDescription,
    AssignmentDoneMessage

} from '../../styles/AssignmentsStyles';

const AssignmentsSection = () => {
    return (
        <AssignmentsContainer>
            <SidebarContainer>
                <Sidebar />
            </SidebarContainer>
            <Content>
                <h1>Assignments</h1>
            </Content>
        </AssignmentsContainer>


    )
}

export default AssignmentsSection;