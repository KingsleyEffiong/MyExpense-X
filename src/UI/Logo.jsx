import logo from "../assets/images/Vector.png";
import PropTypes from "prop-types";
Logo.propTypes = {
    size: PropTypes.number,
    className: PropTypes.string
  };

function Logo({
    size = 90,
    className=""
}) {
    return (
            <img src={logo} alt="logo" className={className}  style={{
                width:`${size}px`,
                height:`${size}px`
            }}/>
    )
}

export default Logo
