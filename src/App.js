import React, { Component } from "react";
import EducationForm from "./components/EducationForm";
import Education from "./components/Education";
import GeneralForm from "./components/GeneralForm";
import General from "./components/General";
import ExperienceForm from "./components/ExperienceForm";
import Experience from "./components/Experience";

//also implement the bullet points array for job responsibilites
// form validation/ styling

class App extends Component {
  constructor() {
    super();

    this.state = {
      userName: "",
      userEmail: "",
      userPhone: "",
      general: {
        userName: "",
        userEmail: "",
        userPhone: "",
        show: false,
      },
      schoolName: "",
      schoolMajor: "",
      schoolDate: "",
      edu: {
        eduName: "",
        eduMajor: "",
        eduDate: "",
        show: false,
      },
      expName: "",
      expTitle: "",
      expDate: "",
      exp: {
        expName: "",
        expTitle: "",
        expDate: "",
        show: false,
      },
    };

    this.handleChange = this.handleChange.bind(this);
    this.onEduSubmit = this.onEduSubmit.bind(this);
    this.onGeneralSubmit = this.onGeneralSubmit.bind(this);
    this.onExpSubmit = this.onExpSubmit.bind(this);
    this.startEditMode = this.startEditMode.bind(this);
  }

  handleChange = (e) => {
    const key = e.target.id;
    this.setState({
      [key]: e.target.value,
    });
  };

  startEditMode = (e) => {
    const id = e.target.id;
    this.setState({
      [id]: {
        show: false,
      },
    });
  };

  onGeneralSubmit = (e) => {
    e.preventDefault();
    this.setState({
      general: {
        userName: this.state.userName,
        userEmail: this.state.userEmail,
        userPhone: this.state.userPhone,
        show: true,
      },
    });
  };

  onEduSubmit = (e) => {
    e.preventDefault();
    this.setState({
      edu: {
        eduName: this.state.schoolName,
        eduMajor: this.state.schoolMajor,
        eduDate: this.state.schoolDate,
        show: true,
      },
    });
  };

  onExpSubmit = (e) => {
    e.preventDefault();
    this.setState({
      exp: {
        expName: this.state.expName,
        expTitle: this.state.expTitle,
        expDate: this.state.expDate,
        show: true,
      },
    });
  };

  render() {
    const { userName, userEmail, userPhone } = this.state.general;
    const { eduName, eduMajor, eduDate } = this.state.edu;
    const { expName, expTitle, expDate } = this.state.exp;
    return (
      <div>
        {/* FORMS */}
        {!this.state.general.show && (
          <GeneralForm
            change={this.handleChange}
            submit={this.onGeneralSubmit}
            name={this.state.userName}
            email={this.state.userEmail}
            phone={this.state.userPhone}
          />
        )}

        {!this.state.edu.show && (
          <EducationForm
            change={this.handleChange}
            submit={this.onEduSubmit}
            name={this.state.schoolName}
            major={this.state.schoolMajor}
            date={this.state.schoolDate}
          />
        )}

        {!this.state.exp.show && (
          <ExperienceForm
            change={this.handleChange}
            submit={this.onExpSubmit}
            name={this.state.expName}
            title={this.state.expTitle}
            date={this.state.expDate}
          />
        )}
        {/* RENDERED INFORMATION FROM FORMS */}
        {this.state.general.show && (
          <General
            name={userName}
            email={userEmail}
            phone={userPhone}
            edit={this.startEditMode}
          />
        )}
        {this.state.edu.show && (
          <Education
            name={eduName}
            major={eduMajor}
            date={eduDate}
            edit={this.startEditMode}
          />
        )}
        {this.state.exp.show && (
          <Experience
            name={expName}
            title={expTitle}
            date={expDate}
            edit={this.startEditMode}
          />
        )}
      </div>
    );
  }
}

export default App;
