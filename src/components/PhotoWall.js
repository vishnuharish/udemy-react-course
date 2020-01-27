import React from 'react';
import Photo from './Photo';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
function PhotoWall(props){
    return  <div>
                <Link to="/AddPhoto" className="addIcon" />
                <div className="photoGrid">
                    {props.posts.sort((x,y) => y.id-x.id)
                    .map((post, index) => <Photo key = {post.id} post={post} onRemovePhoto={props.onRemovePhoto}/>)}
                </div>
            </div>    
}

PhotoWall.propTypes = {
    posts: PropTypes.array.isRequired,
    onRemovePhoto: PropTypes.func.isRequired
}


export default PhotoWall;