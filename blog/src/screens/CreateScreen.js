import React, { useContext } from "react";
import { StyleSheet } from 'react-native';
import { Context } from '../context/BlogContext'
import BlogPostForm from "../context/BlogPostForm";

const CreateScreen = ({ navigation }) => {

    const { createBlogPost } = useContext(Context);

    return (
        <BlogPostForm 
            initialTitle='' 
            initialContent='' 
            onSubmit={(title, content) => createBlogPost(title, content, () => navigation.navigate('Index'))} 

        />
    )
}

const styles = StyleSheet.create({

})

export default CreateScreen;