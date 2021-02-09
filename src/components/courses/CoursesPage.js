import React, { Component } from "react";
import { connect } from "react-redux";
import * as courseActions from "../../redux/actions/course-actions";
import PropTypes from "prop-types";
class CoursesPage extends Component {
  state = {
    course: {
      title: "",
    },
  };

  handleChange = (event) => {
    const course = { ...this.state.course, title: event.target.value };
    this.setState({ course });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.dispatch(courseActions.createCourse(this.state.course));
    this.setState({ course: { title: "" } });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Courses</h2>
        <h3>Add Course</h3>
        <input
          type="text"
          onChange={this.handleChange}
          value={this.state.course.title}
        />
        {/* <input type="text" onChange={this.handleChange} value={this.state.course.title}/> */}
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default connect(
  mapStateToProps
  // mapDispatchToProps
)(CoursesPage);

// ownProps is props from component
function mapStateToProps(state, ownProps) {
  return {
    courses: state.courses,
  };
}

CoursesPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};
// Actions to expose on the component
// function mapDispatchToProps() {}
