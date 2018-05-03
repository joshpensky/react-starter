import React, { Component, Fragment } from 'react';
import { Helmet } from 'react-helmet';
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
      <Fragment>
        <Helmet>
          <title>Home</title>
        </Helmet>
        <div>
          <H1>{!valid && 'Not'} React Starter</H1>
          <img
            src="static/img/logo.png"
            height="50"
            onClick={this.updateTitle}
          />
        </div>
      </Fragment>
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
