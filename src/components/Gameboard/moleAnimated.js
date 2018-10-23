import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  Animated,
  Easing,
} from 'react-native'
import { moleWhacked } from '../../../actions'

const styles = StyleSheet.create({
  containerAnimation: {
    zIndex: .8,
    marginTop: 40,
    justifyContent: 'center',
    alignItems: 'center',
    height: 10,
    backgroundColor: 'transparent',
    position: 'relative',
  },
  holeMask: {
    height: 140,
    width: 150,
    zIndex: 1,
    // marginTop: -5,
    right: 5,
  },
  moleStyle: {
    height: 140,
    width: 140,
    zIndex: 1,
    marginTop: -20,
  }
})


class Mole extends Component {
  constructor(props) {
    super(props);
    this.state = {
      moleVisible: false,
    }
    this.animatedValue = new Animated.Value(0)
    this.handleTap = this.handleTap.bind(this)
  }

  componentDidMount() {
    this.animate()
  }

  animate() {
    this.setState({ moleVisible: true })
    this.animatedValue.setValue(0)
    Animated.timing(
      this.animatedValue,
      {
        toValue: 1,
        duration: 1600,
        easing: Easing.linear,
      },
    ).start((a) => {
      if (a.finished) {
        this.setState({ moleVisible: false })
      }
    })
  }

  handleTap() {
    const { dispatch } = this.props
    if (this.state.moleVisible) {
      this.setState({ moleVisible: false })
      return dispatch(moleWhacked())
    }
    return null
  }


  render() {
    const opacity = this.animatedValue.interpolate({
      inputRange: [0, .25, 0.5, 1],
      outputRange: [0, 1, 3, .5],
    })
    const movingMargin = this.animatedValue.interpolate({
      inputRange: [0, 0.5, 1.5],
      outputRange: [40, 120, 40]
    })

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
          {this.state.moleVisible &&
          <View>
            <TouchableOpacity
              style={{ position: 'relative' }}
              onPress={this.handleTap}
            >
              <Image style={styles.moleStyle} source={require('../../../assets/mole.png')} resizeMode="contain" />
            </TouchableOpacity>
          </View>
          }
        </Animated.View>
        <Animated.View
          style={{
            marginTop: 10,
            height: 140,
            width: 140,
            backgroundColor: 'transparent',
            position: 'absolute',
          }}
        >
          <View style={{
            position: 'relative'
             }}>
            <Image style={styles.holeMask} source={require('../../../assets/holeMask.png')} resizeMode="contain" />
          </View>
        </Animated.View>
      </View>
    );
  }
}

Mole.propTypes = {
  dispatch: PropTypes.func.isRequired,
}

export default connect()(Mole)