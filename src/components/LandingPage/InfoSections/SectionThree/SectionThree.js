import React from 'react';
import classes from './SectionThree.module.css';
import {Link} from 'react-router-dom';
const SectionThree = (props) => {
    return (
        <div className="flex-column justify-content-center">
            <hr className={classes.Divider} />
            <p className={classes.SectionThree}>“The important thing is not to stop questioning.” <br /> Albert Einstein </p>
            {/* <button className={classes.ButtonCreate}>Create Account</button> */}
            <Link className={classes.ButtonCreate} to='/signup' >Create Account</Link>
        </div>

    );
};

export default SectionThree;