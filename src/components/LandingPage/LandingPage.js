import React from 'react';
import JumbotronHeader from './Jumbotron/JumbotronHeader.js';
import SectionOne from './InfoSections/SectionOne/SectionOne.js';
import SectionTwo from './InfoSections/SectionTwo/SectionTwo.js';
import SectionThree from './InfoSections/SectionThree/SectionThree.js';

const LandingPage = (props) => {
    return (
        <div>

            <JumbotronHeader />
            <SectionOne />
            <SectionTwo />
            <SectionThree />

        </div>
    );
}

export default LandingPage;