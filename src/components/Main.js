import React, {Component} from 'react';
import List from './List';
import Title from './Title';

class Main extends Component {
    render() {
        return(
            <div>
                <Title title={"Todos"}/>
                <List tasks = {["Take out the trash","Shovel the driveway","Walk the dog"]}/>
                <List tasks = {["Hose the driveway","Walk the dog"]}/>
            </div>
        )
    }
}

export default Main;