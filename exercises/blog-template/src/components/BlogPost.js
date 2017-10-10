import React from "react";

function BlogPost(props) {
    const styles = {};
    if (props.blog.author === "Dylan Hardy") {
        styles.color = "red";
    }

    return (
        <div>
            <h2>{props.blog.title}</h2>
            <h3>{props.blog.subtitle}</h3>
            <p>Posted by <span className="author" style={styles}>{props.blog.author}</span> on {props.blog.date}</p>
        </div>
    )
}

export default BlogPost;
