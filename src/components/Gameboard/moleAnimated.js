import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  Animated,
  Easing,
} from 'react-native';
import { connect } from 'react-redux';

const styles = StyleSheet.create({
  containerAnimation: {
    zIndex: 1,
    marginTop: 40,
    justifyContent: 'center',
    alignItems: 'center',
    height: 10,
    backgroundColor: 'transparent',
    position: 'relative'
  },
  holeImage: {
    height: 120,
    width: 120,
  },
});


class Mole extends Component {
  constructor(props) {
    super(props);
    this.state = {
      moleVisible: false,
    };
    this.animatedValue = new Animated.Value(0);
  }

  componentDidMount() {
    this.animate();
  }

  animate() {
    this.setState({ moleVisible: true });
    this.animatedValue.setValue(0);
    Animated.timing(
      this.animatedValue,
      {
        toValue: 1,
        duration: 1000, // 2000
        easing: Easing.linear,
      },
    ).start((a) => {
      if (a.finished) {
        this.setState({ moleVisible: false });
      }
    });
  }


  render() {
    const opacity = this.animatedValue.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [0, 3, 0],
    });
    const movingMargin = this.animatedValue.interpolate({
      inputRange: [0, 0.5, 1.5],
      outputRange: [60, 190, 50],
    });

    return (
      <View style={styles.containerAnimation}>
        <Animated.View
          style={{
            opacity,
            marginBottom: movingMargin,
            height: 120,
            width: 120,
            backgroundColor: 'transparent',
          }}
        >
          <View>
            <TouchableOpacity
              style={{ position: 'relative' }}
              onPress={this.handleTap}
            >
              <Image style={styles.holeImage} source={require('../../../assets/mole.png')} resizeMode="contain" />
            </TouchableOpacity>
          </View>
        </Animated.View>
        <Animated.View
          style={{
            opacity,
            marginTop: 10,
            height: 120,
            width: 120,
            backgroundColor: 'transparent',
            position: 'absolute',
          }}
        >
          <View style={{ position: 'relative' }}>
            <Image style={styles.holeImage} source={require('../../../assets/holeMask.png')} resizeMode="contain" />
          </View>
        </Animated.View>
      </View>
    );
  }
}


export default connect()(Mole)