import React from "react";
import BlogPost from "./BlogPost";
import blogs from "../blogs.json";
import Header from "./header/Header"

function genBlogs(blogs) {
    return blogs.map(item => <BlogPost blog={item}/>)
}

function App() {
    return (
        <div>
            <Header/>
            {genBlogs(blogs)}
        </div>
    )
}

export default App;
