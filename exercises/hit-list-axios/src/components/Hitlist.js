import React from "react";
import HitlistComponent from "./HitlistComponent";
import axios from "axios";

class Hitlist extends React.Component {
    constructor() {
        super();
            this.state = {
                hitlist: []
            }
        }

    componentDidMount() {
        axios.get("http://api.vschool.io:6543/hitlist.json").then((response) => {
            this.setState({
                hitlist: response.data
            })
        })
    }

// RENDER ------------------------

    render() {
        return (st
            <div>
                {this.state.hitlist.map(() => {
                    return (
                        <HitlistComponent
                            name={hitlist.name}
                            image={hitlist.image}/>
                    )
                })}
            </div>
        )
    }
}

export default Hitlist;
