import React from 'react';
import {Link} from 'react-router-dom'


function Title(props){
    return( <h1> <Link to="/">{props.title}</Link></h1>)
}

// class Title extends Component {
//     render(){
//         return(
//             <h1>{this.props.title}</h1>
//         )
//     }
// }

export default Title;