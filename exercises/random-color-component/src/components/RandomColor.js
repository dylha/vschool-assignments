import React from "react";
import axios from "axios";

class RandomColor extends React.Component {
    constructor() {
        super();
        this.state = {
            randomColor: []
        }
    }

    componentDidMount() {
        axios.get("http://www.colr.org/api.html").then((response) => {
            this.setState({
                randomColor: response.data
            })
        })
    }

// RENDER ----------------------------

    render() {
        return (
            <div>

            </div>
        )
    }

}

export default RandomColor;
