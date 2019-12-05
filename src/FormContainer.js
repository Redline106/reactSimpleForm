import React, { Component } from "react";
import FormComponent from "./FormComponent";

//import { Text, Button, View } from "react-native";
// import {
//   StyleSheet,
//   Button,
//   View,
//   SafeAreaView,
//   Text,
//   Alert
// } from "react-native";

class Form extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      age: "",
      favColor: "blue",
      gender: ""
    };
  }
  handleChange = event => {
    let { name, value, type, checked } = event.target;
    switch (type) {
      case "checkbox":
        this.setState({
          [name]: checked
        });
        break;
      case "text":
        this.setState({
          [name]: value
        });
        break;
      default:
        this.setState({
          [name]: value
        });
    }
  };
  handleSubmit(params) {}

  render() {
    return <FormComponent handleChange={this.handleChange} data={this.state} />;
  }
}

export default Form;
