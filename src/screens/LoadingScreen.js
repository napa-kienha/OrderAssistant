import React, { Component } from "react";
import { Animated, Easing } from "react-native";
import LottieView from "lottie-react-native";

export default class LoadingScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      progress: new Animated.Value(0)
    };
  }

  componentDidMount() {
    Animated.timing(this.state.progress, {
      toValue: 1,
      duration: 5000,
      easing: Easing.linear
    }).start();
  }

  render() {
    return (
      <LottieView
        progress={this.state.progress}
        source={require("../assets/animations/222-trail-loading.json")}
        autoPlay
        loop
      />
    );
  }
}
