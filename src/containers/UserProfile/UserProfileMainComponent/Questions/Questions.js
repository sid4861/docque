import React, {Component} from 'react';
import Axios from '../../../../hoc/axios/instance.js';
import Question from '../../../../components/UI/Question/Question.js';
import * as _ from 'underscore';
import { connect } from 'react-redux';
import * as actions from '../../../../store/actions/index.js';

class Questions extends Component{

    state = { questions: [] };

    componentDidMount() {
        console.log('inside componentDidMount')
        this.props.onAuthCheckState();
        if (localStorage.getItem('token')) {
            let userId = localStorage.getItem('userId');
            let token = localStorage.getItem('token');
                const queryParams = '?auth=' + token + '&orderBy="userId"&equalTo="' + this.props.userId + '"';
                Axios.get('/questions.json' + queryParams).then(
                    response => {
                        console.log('reading questions');
                        console.log(response);
                        ///sorting by date, most recent, logic

                        let responseArray = [];
                        Object.keys(response.data).map((key) => {
                            responseArray.push({ ...response.data[key], key: key });
                        });
                        console.log('response array');
                        console.log('-------------------------');
                        console.log(responseArray);
                        console.log('-------------------------');
                        let responseArraySorted = _.sortBy(responseArray, 'date');
                        console.log('response array sorted');
                        console.log(responseArraySorted);
                        ///
                        this.setState({
                            ...this.state,
                            questions: responseArraySorted    // before response.data
                        });

                    }
                );

        }
    }


    render(){
        let questionsVariable = <p>Loading...</p>;
        if(this.state.questions.length !== 0){
            questionsVariable = this.state.questions.map(question => {
                return (
                    <Question
                        key={question.key}
                        questionKey={question.key}
                        title={question.question}
                        noa={question.noOfAnswers}
                        tag={question.tag}
                        noi={question.noOfInsightfuls}
                        date={question.date}
                    />
                );
            });
        }
        return (questionsVariable);

    }
}

const mapDispatchToProps = (dispatch) => {
    return (
        {
            onAuthCheckState: () => { dispatch(actions.authCheckState()) },

        }
    );
};
export default connect(null, mapDispatchToProps)(Questions);
