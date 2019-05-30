import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Import Style
import styles from './Contact.css';

class Contact extends Component {
  render() {
    return (
      <h2>Łukasz Piotrowski</h2>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

Contact.propTypes = {
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Contact);
