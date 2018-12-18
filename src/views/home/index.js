import React, { Component } from "react";
import { View, Text, FlatList, StyleSheet, Platform } from "react-native";
import selectDataReducer from "../../redux/reducers/selectDataReducer";
import { connect } from "react-redux";
import CardCustom from "./card";
import { Content, Container } from "native-base";

const isAndroid = Platform.OS === "android" ? true : false;

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount = () => {
    console.log(this.props);
  };

  componentDidMount() {}

  renderItem(item) {
    return <CardCustom data={item} />;
  }
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.props.velix}
          keyExtractor={datas => datas.id.toString()}
          renderItem={({ item, index }) => this.renderItem(item)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: isAndroid ? 0 : 20
  }
});
const mapStateToProps = state => {
  return {
    velix: state.datas
  };
};

const mapDispatchToProps = {
  selectDataReducer
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);
