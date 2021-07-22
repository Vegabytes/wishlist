import React from 'react';
import PropTypes from 'prop-types';

const Header = ({label}) => <h1>{label}</h1>;

Header.propTypes = {
    label: PropTypes.string
};

Header.defaultProps = {
    label: 'MyWishlist'
}

export default Header;