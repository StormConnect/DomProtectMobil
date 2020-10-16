import React, { Component } from "react";
import { StyleSheet, View, ScrollView, Dimensions, Image } from "react-native";

const DEVICE_WIDTH = Dimensions.get("window").width;

export default class Carousel extends Component {
  scrollRef = React.createRef();
  constructor(props) {
    super(props);
    this.state = {
      selectIndex: 0
    };
  }

  componentDidMount = () => {
    setInterval(() => {
      this.setState(
        prev => ({
          selectIndex:
            prev.selectIndex === this.props.images.length - 1
              ? 0
              : prev.selectIndex + 1
        }),
        () => {
          this.scrollRef.current.scrollTo({
            animated: true,
            y: 0,
            x: DEVICE_WIDTH * this.state.selectIndex
          });
        }
      );
    }, 4000);
  };

  setSelectedIndex = event => {
    const viewSize = event.nativeEvent.layoutMeasurement.width;
    const contentOffSet = event.nativeEvent.contentOffset.x;
    const selectIndex = Math.floor(contentOffSet / viewSize);
    this.setState({ selectIndex: selectIndex });
  };

  render() {
    const { images } = this.props;
    const { selectIndex } = this.state;
    return (
      <View style={{ height: "100%", width: "100%", position: "relative" }}>
        <ScrollView  horizontal pagingEnabled onMomentumScrollEnd={this.setSelectedIndex} ref={this.scrollRef}>
          {images.map((image, index) => (
            <Image key={index} source={image} style={styles.backgroundImage} />
          ))}
        </ScrollView>
        <View style={styles.circleDiv}>
          {images.map((image, i) => (
            <View
              key={image}
              style={[
                styles.whiteCircle,
                { opacity: i === selectIndex ? 0.5 : 1 }
              ]}
            />
          ))}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  backgroundImage: {
    height: "100%",
    width: DEVICE_WIDTH
  },
  circleDiv: {
    position: "absolute",
    bottom: 50,
    height: 10,
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  whiteCircle: {
    width: 6,
    height: 6,
    borderRadius: 3,
    margin: 5,
    marginTop:1,
    backgroundColor: "black"
  }
});
