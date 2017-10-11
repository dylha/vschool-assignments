import React from "react";
import NameForm from "./NameForm.js";
import NameList from "./NameList.js";

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            name: "",
            nameList: []
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleChange(event) {
        this.setState({
            name: event.target.value
        });
    }

    handleClick(event) {
        this.setState(prevState => {
            return {
            nameList: [...prevState.nameList, prevState.name],
            name: ""
        }
    });
}

// RENDER ---------------------------------

    render() {
        return (
            <div>
                <NameForm
                    handleChange={this.handleChange}
                    handleClick={this.handleClick}
                    name={this.state.name}/>
                <NameList names={this.state.nameList}/>
            </div>
        )
    }
}
export default App;
