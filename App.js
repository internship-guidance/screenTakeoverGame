/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
// eslint-disable-next-line no-unused-vars
import { View, Share } from 'react-native';
import styles from './Styles';
import CustomButton from './Button';

const INCREMENT = 1;
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { counter: 50, counter2: 50 };
    this.onResetPress = this.onResetPress.bind(this);
    this.onFirstPlayer = this.onFirstPlayer.bind(this);
    this.onSecondPlayer = this.onSecondPlayer.bind(this);
    this.shareMessage = this.shareMessage.bind(this);
    this.showResult = this.showResult.bind(this);

  }

  onResetPress() {
    this.setState({ counter: 0 });
    this.setState({ counter2: 0 });
  }

  onFirstPlayer() {
    const { counter2, counter } = this.state;

    const updatedCounter = counter2 - INCREMENT;
    const updatedCounter2 = counter + INCREMENT;
    this.setState({ counter2: updatedCounter });
    this.setState({ counter: updatedCounter2 });

    if (counter == 100) {
      alert('The green player won!')
    }
    else if (counter == 0) {
      alert('The blue player won!')
    }

    this.setState({
      flexPlus: counter
    })
  }

  onSecondPlayer() {
    const { counter, counter2 } = this.state;

    const updatedCounter = counter - INCREMENT;
    const updatedCounter2 = counter2 + INCREMENT;
    this.setState({ counter: updatedCounter });
    this.setState({ counter2: updatedCounter2 });

    if (counter == 100) {
      alert('The green player won!')
    }
    else if (counter == 0) {
      alert('The blue player won!')
    }

    this.setState({
      flexMinus: counter2
    })
  }

  showResult(result) {
    this.setState({ result });
  }

  shareMessage() {
    Share.share({ message: 'My score! ' }).then(this.showResult);
  }

  render() {
    const { counter, counter2 } = this.state;

    return (

      <View style={styles.view}>
        {/* <Text style={styles.counter}>{counter}</Text> */}
        {/* <CustomButton
        title="Reset"
        style={styles.reset}
        onPress={this.onResetPress}
      /> */}

        <View style={styles.subView}>
          <CustomButton
            title={counter2}
            style={[styles.minus, { flex: this.state.flexMinus }]}
            onPress={this.onSecondPlayer}
          />
          <CustomButton
            title={counter}
            style={[styles.plus, { flex: this.state.flexPlus }]}
            onPress={this.onFirstPlayer}
          />
        </View>

        {/* <CustomButton
        title="Share your score!"
        style={styles.scoreShare}
        onPress={this.shareMessage}
      /> */}
        {/* <Text>{JSON.stringify(result)}</Text> */}
      </View>
    );
  }
}

//TODO piešķirt vienam kkādu augstumu, izmantot touchableOpacity vai tochablewithoutfeedback, vai view tagam -> onpress