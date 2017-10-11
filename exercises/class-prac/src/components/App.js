import React from "react";
import Sequels from "./Sequels";

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            badSequels: 0
        }
        this.soManyBadSequels = this.soManyBadSequels.bind(this);
    }

    soManyBadSequels() {
        this.setState(prevState => {
            return {
                badSequels: prevState.badSequels + 1
            }
        });
    }

// RENDER ---------------------------------

    render() {
        return (
            <div>
                <Sequels badSequels={this.state.badSequels}
                         soManyBadSequels={this.soManyBadSequels}/>
            </div>
        )
    }
}

export default App;
