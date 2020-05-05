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
            {/* <div  >
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
            </div> */}

            <section className="container-fluid px-0">

                <div className="row align-items-center content">
                    <div className="col-md-6 order-2 order-md-2">
                        <img src={ImageOne} className="img-fluid" alt="" />
                    </div>

                        <div className="col-md-6 order-1 order-md-1 blurb mb-5 mb-md-0">
                            <div className="row justify-content-center">
                                <div className="col-10   text-center">

                                    <p className="lead">

                                    Ask questions and gain insights from other medical professionals. Answer them to share your knowledge with the community.


                </p>

                                </div>
                            </div>
                        </div>
                    </div>
            </section>


            <section className="container-fluid px-0">

        <div className="row align-items-center content">
            <div className="col-md-6 order-2 order-md-1">
                <img src={ImageTwo} className="img-fluid" alt="" />
            </div>

            <div className="col-md-6 order-1 order-md-2 blurb mb-5 mb-md-0">
                <div className="row justify-content-center">
                    <div className="col-10   text-center">
                        <p className="lead">
                        Tag your questions with a medical speciality. Browse questions with these tags and contribute more to your field of speciality.
                            
                        </p>

                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className="container-fluid px-0">

<div className="row align-items-center content">
    <div className="col-md-6 order-2 order-md-2">
        <img src={ImageThree} className="img-fluid" alt="" />
    </div>

        <div className="col-md-6 order-1 order-md-1 blurb mb-5 mb-md-0">
            <div className="row justify-content-center">
                <div className="col-10   text-center">

                    <p className="lead">

                    Mark answers and questions as insightful to help content gain credence among users.


</p>

                </div>
            </div>
        </div>
    </div>
</section>


        </div>
    );
};

export default SectionTwo;