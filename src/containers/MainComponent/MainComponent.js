import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Questions from './Questions/Questions.js';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import {Link} from 'react-router-dom';

class MainComponent extends Component {

    userId = localStorage.getItem('userId');

    state = {
        browsingOptions: {
            browseQuestions: null,
            yourQuestions: null,
            yourAnswers: null
        },

        dataSort: 'Recent',
        tag: null
    };

    // for filter dropdown

    onClickHandler = (event) => {
            console.log(event.target.text);
            this.setState({
                ...this.state,
                dataSort: event.target.text
            });
    };

    // for tag filter

    onTagClickHandler = (event) => {
        console.log(event.target.text);
        this.setState({
            ...this.state,
            tag: event.target.text
        });
};


    // for buttons

    onSelectHandler = (event, inputType) => {
        if (inputType === 'Browse Questions') {

            this.setState({
                ...this.state,
                browsingOptions: { ...this.state.browsingOptions, browseQuestions: true, yourQuestions: false },

            });
            
        }
        else if (inputType === 'Your Questions') {

            this.setState({
                ...this.state,
                browsingOptions: {
                    ...this.state.browsingOptions, browseQuestions: false,
                    yourQuestions: true
                },

            });
            
        }
    }

    render() {
        console.log(this.state);
        let dataFilterProp = (Object.keys(this.state.browsingOptions)).filter(key => {
            if (this.state.browsingOptions[key] === true) {
                return key
            }
        });
        console.log(dataFilterProp);
        console.log(this.state.dataSort);
        let questionsVariable = <Questions dataFilter= 'yourQuestions' dataSort={this.state.dataSort}  tagFilter={this.state.tag} />; 
        if(dataFilterProp[0] === 'browseQuestions'){
            questionsVariable = <Questions dataFilter= 'browseQuestions' dataSort={this.state.dataSort}  tagFilter={this.state.tag} />;
        }
        return (
            <div>
                <Container>
                    <Row>
                        <Col><Button variant="warning" onClick={(event) => { this.onSelectHandler(event, 'Browse Questions') }} >Browse Questions </Button></Col>
                        <Col><Button variant="warning" onClick={(event) => { this.onSelectHandler(event, 'Your Questions') }} >Your Questions</Button></Col>
                         <Link to={this.userId+'/answers'} > <Col><Button variant="warning">Your Answers</Button></Col> </Link> 
                        <ButtonGroup>
                        <Col>
                            <DropdownButton style={{ float: 'left', width: '50%' }} variant="warning" title="Filter" style={{ marginTop: '3%', marginLeft: '-46%' }} >
                                <Dropdown.Item id="Recent" onClick={(event) => { this.onClickHandler(event) }}>Recent</Dropdown.Item>
                                <Dropdown.Item id="Older" onClick={(event) => { this.onClickHandler(event) }} >Older</Dropdown.Item>
                                <Dropdown.Item id="Most Answers" onClick={(event) => { this.onClickHandler(event) }} >Most Answers</Dropdown.Item>
                                <Dropdown.Item id="Most insightful" onClick={(event) => { this.onClickHandler(event) }}>Most Insightful</Dropdown.Item>
                            </DropdownButton>
                        </Col>
                        <Col>
                            <DropdownButton style={{ float: 'left', width: '50%' }} variant="warning" title="Tag" style={{ marginTop: '3%', marginLeft: '-86%' }} >
                            <Dropdown.Item id="Ophthalmology" onClick={(event) => { this.onTagClickHandler(event) }}>All</Dropdown.Item>
                                <Dropdown.Item id="Ophthalmology" onClick={(event) => { this.onTagClickHandler(event) }}>Ophthalmology</Dropdown.Item>
                                <Dropdown.Item id="Cardiology" onClick={(event) => { this.onTagClickHandler(event) }} >Cardiology</Dropdown.Item>
                                <Dropdown.Item id="ENT" onClick={(event) => { this.onTagClickHandler(event) }} >ENT</Dropdown.Item>
                                <Dropdown.Item id="Cosmetology" onClick={(event) => { this.onTagClickHandler(event) }} >Cosmetology</Dropdown.Item>
                                <Dropdown.Item id="DentalSciences" onClick={(event) => { this.onTagClickHandler(event) }} >DentalSciences</Dropdown.Item>
                                <Dropdown.Item id="Dermatology" onClick={(event) => { this.onTagClickHandler(event) }} >Dermatology</Dropdown.Item>
                                <Dropdown.Item id="Endocrinology" onClick={(event) => { this.onTagClickHandler(event) }} >Endocrinology</Dropdown.Item>
                                <Dropdown.Item id="Gastroenterology" onClick={(event) => { this.onTagClickHandler(event) }} >Gastroenterology</Dropdown.Item>
                                <Dropdown.Item id="GeneralSurgery" onClick={(event) => { this.onTagClickHandler(event) }} >GeneralSurgery</Dropdown.Item>
                                <Dropdown.Item id="Oncology" onClick={(event) => { this.onTagClickHandler(event) }} >Oncology</Dropdown.Item>
                                <Dropdown.Item id="Nephrology" onClick={(event) => { this.onTagClickHandler(event) }} >Nephrology</Dropdown.Item>
                                <Dropdown.Item id="Neurology" onClick={(event) => { this.onTagClickHandler(event) }} >Neurology</Dropdown.Item>
                                <Dropdown.Item id="Gynecology" onClick={(event) => { this.onTagClickHandler(event) }} >Gynecology</Dropdown.Item>
                                <Dropdown.Item id="Pathology" onClick={(event) => { this.onTagClickHandler(event) }} >Pathology</Dropdown.Item>
                                <Dropdown.Item id="PlasticAndReconstructiveSurgery" onClick={(event) => { this.onTagClickHandler(event) }} >PlasticAndReconstructiveSurgery</Dropdown.Item>
                                <Dropdown.Item id="Psychiatry" onClick={(event) => { this.onTagClickHandler(event) }} >Psychiatry</Dropdown.Item>
                                <Dropdown.Item id="Radiology" onClick={(event) => { this.onTagClickHandler(event) }} >Radiology</Dropdown.Item>
                                <Dropdown.Item id="Urology" onClick={(event) => { this.onTagClickHandler(event) }} >Urology</Dropdown.Item>
                            </DropdownButton>
                        </Col>
                        </ButtonGroup>
                    </Row>

                </Container>
                {questionsVariable}
                

            </div>

        );
    }

}


export default MainComponent;
