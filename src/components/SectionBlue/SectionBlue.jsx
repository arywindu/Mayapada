import React from 'react'
import PropTypes from "prop-types";
import './SectionBlue.css'
import { propTypes } from 'react-bootstrap/esm/Image';
import img from '../../assets/images/landasanHukum.png'

const SectionBlue = (props) => {
    const { text, liText, type, size, color, fontWeight, paddingTop, children, ...rest } = props;
    return (
        <div>
            <div className='section-blue' {...rest}>
                <img className='image-blue' src={img}
                    style={{
                        background: '(180deg, #2EB4E8 0%, #248BCB 100%)',
                        mixBlendMode: 'multiply'
                    }}>
                </img>
                <div className='container'>
                    <h2
                        style={{
                            fontSize: "40px",
                            fontWeight: "600",
                            color: "#FFFFFF",
                            paddingTop: "75px",
                            zIndex: 2,
                        }}>
                        {text}
                    </h2>
                    {children}
                </div>
            </div>
        </div >
    )
}


SectionBlue.defaultProps = {
    text: "Typography",
    liText: "",
    type: "normal",
    size: "18px",
    color: "#FFFFFF",
    fontWeight: "400",
    paddingTop: "75px",
};

SectionBlue.propTypes = {
    text: PropTypes.string,
    liText: propTypes.string,
    type: PropTypes.string,
    size: PropTypes.string,
    color: PropTypes.string,
    fontWeight: PropTypes.string,
    paddingTop: PropTypes.string,
};

export default SectionBlue