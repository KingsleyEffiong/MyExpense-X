import PropTypes from "prop-types";


Button.propTypes = {
    children: PropTypes.any.isRequired,
    className: PropTypes.string,
    onClick:PropTypes.any.isRequired
  };

function Button(
    {
    children, 
    className="",
    onClick
    }) {
    return (
        <button type="button" className={className} onClick={onClick}>
            {children}
        </button>
    )
}

export default Button
