import React from 'react';
import classes from './SectionTwo.module.css';
import ImageOne from '../../../../assets/images/3081648 - Copy.jpg';
import ImageTwo from '../../../../assets/images/3281755 - Copy.jpg';
import ImageThree from '../../../../assets/images/3263443 - Copy.jpg';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const SectionTwo = (props) => {

    return (
        <div>
            <div  >
                <div><img className={classes.ImageOne} src={ImageOne}  alr="image one" /></div>
                <div className={classes.TextOne} >Ask questions and gain insights from other medical professionals. Answer them to share your knowledge with the community.</div>
            </div>
            <div >
                <div className={classes.TextTwo} >Tag your questions with a medical speciality. Browse questions with these tags and contribute more to your field of speciality.</div>
                <div><img className={classes.ImageTwo} src={ImageTwo}  alr="image one" /></div>
            </div>
            <div >
                <div><img className={classes.ImageThree} src={ImageThree}  alr="image one" /></div>
                <div className={classes.TextThree} >Mark answers and questions as insightful to help content gain credence among users. </div>
            </div>
        </div>
    );
};

export default SectionTwo;