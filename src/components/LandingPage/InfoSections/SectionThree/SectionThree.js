import React from 'react';
import classes from './SectionThree.module.css';
import {Link} from 'react-router-dom';
const SectionThree = (props) => {
    return (
        <div>
            <hr className={classes.Divider} />
            <div className={classes.SectionThree}>“The important thing is not to stop questioning.” <br /> Albert Einstein </div>
            {/* <button className={classes.ButtonCreate}>Create Account</button> */}
            <Link className={classes.ButtonCreate} to='/signup' >Create Account</Link>
        </div>

    );
};

export default SectionThree;