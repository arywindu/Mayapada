import React from 'react'
import './SectionWhite.css'
import PropTypes from "prop-types";

const SectionWhite = (props) => {
    const { text, type, size, color, fontWeight, children, ...rest } = props;
    return (
        <div className='mb-5 pb-5 pt-5'>
            <div className='section-white'>
                <div className='container'>
                    <h2 style={{
                        fontSize: "40px",
                        fontWeight: "600",
                        color: "#278BC8",
                        textAlign: 'center',
                    }}>
                        {text}
                    </h2>
                    {children}
                </div>
            </div>
        </div>
    )
}

SectionWhite.defaultProps = {
    text: "",
    type: "normal",
    size: "18px",
    color: "#525252",
    fontWeight: "400",
};

SectionWhite.propTypes = {
    text: PropTypes.string,
    type: PropTypes.string,
    size: PropTypes.string,
    color: PropTypes.string,
    fontWeight: PropTypes.string,
};

export default SectionWhite