import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { updateHomeTitle } from 'actions/home';
import { H1 } from 'style';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      valid: this.props.valid,
    };
    this.updateTitle = this.updateTitle.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.valid !== this.props.valid) {
      this.setState({
        valid: nextProps.valid,
      });
    }
  }

  updateTitle() {
    this.props.updateHomeTitle(!this.state.valid);
  }

  render() {
    let { valid } = this.state;
    return (
      <div>
        <H1>{!valid && 'Not'} React Boilerplate</H1>
        <img src="static/img/logo.png" height="50" onClick={this.updateTitle} />
      </div>
    );
  }
}

Home.propTypes = {
  updateHomeTitle: PropTypes.func.isRequired,
  valid: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  valid: state.home.valid,
});

export default connect(mapStateToProps, { updateHomeTitle })(Home);
