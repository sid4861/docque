import React, {Component} from 'react';
import Comment from '../../Comment/Comment.js';

class Comments extends Component {
    
    state = {
        comments: this.props.commentsFromAnswer
    };

    render(){
        console.log(this.props.commentsFromAnswer);
        let comments = null;
        if(this.state.comments !== undefined){
             comments =  Object.keys(this.state.comments).map((key) => {
                return (<Comment content = {this.state.comments[key].comment} date = {this.state.comments[key].date}  />);
                
            });
        }

        else{
            comments = <p>No comments</p>
        }
   
    console.log('--------------------');
    console.log(comments);
    return(comments);
    }
    
}

export default Comments;