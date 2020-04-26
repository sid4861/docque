import React from 'react';
import classes from './SectionOne.module.css';

const SectionOne = (props) => {
    return(
        <div >
            <div className={classes.SectionOne}>Docque is an open community for medical professionals to ask questions and share knowledge.</div>
            <hr className={classes.Divider} />
        </div>
        
    );
};


export default SectionOne;