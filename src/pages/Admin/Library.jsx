import React, {useState, useEffect} from "react";
import Sidebar from "./Sidebar";
import axios from "axios";

import {
    LibraryContainer,
    Content,
    Title,
    AddBookForm,
    FormGroup,
    Label,
    Input,
    Button,
    BookAuthor,
    ActionButton,
    BookList
} from '../../styles/LibraryStyles'


const Library = () => {
    return (
      <LibraryContainer>
        <Sidebar />
        <Content>
            <Title>Library Management</Title>
            <AddBookForm>
                <h2>Add New Book</h2>
                <FormGroup>
                    <Label htmlFor="title">Title</Label>
                    <Input type="text" id='title' />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="author">Author</Label>
                    <Input type="text" id='author' />
                </FormGroup>
                <Button type="submit">Add Book</Button>
            </AddBookForm>

            <h2>Books</h2>
            <BookList>
                
            </BookList>
        </Content>
      </LibraryContainer>

    )
}

export default Library