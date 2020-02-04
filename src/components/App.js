import Main from './Main'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux' ;
import * as actions from '../redux/actions';
import {withRouter} from 'react-router';
function mapStateToProps( state){
    return {
        posts: state
    }
}

function mapDispatchToPost(dispatch){
   return bindActionCreators(actions, dispatch)
}

const App = withRouter(connect(mapStateToProps, mapDispatchToPost)(Main));

export default App;

