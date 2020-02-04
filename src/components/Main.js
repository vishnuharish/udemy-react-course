import React, {Component} from 'react';
import Title from './Title';
import PhotoWall from './PhotoWall';
import AddPhoto from './AddPhoto';
import {Route} from 'react-router-dom';
class Main extends Component {
    constructor(){
        super();
        console.log("constructor");
    }

    render() {
        // console.log(this.props.posts);
        return(
            <div>
                    <Title title={"Photowall"}/>
                    <Route exact path="/" render = {() => (
                        <div>
                            <PhotoWall {...this.props} />
                        </div>
                    )}/>
                    
                    <Route path="/AddPhoto" render = {({history}) => (
                        <div>
                            <AddPhoto {...this.props} onHistory={history}/>
                        </div>
                    )}/>    
            </div>
        )
    }
}

export default Main;