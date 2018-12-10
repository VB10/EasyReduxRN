import React, { Component } from "react";
import { View, Text, FlatList } from "react-native";
import selectDataReducer from "../../redux/reducers/selectDataReducer";
import { connect } from "react-redux";
class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount = () => {
    console.log(this.props);
  };

  componentDidMount() {}

  render() {
    return (
      <View style={{ flex: 1 }}>
        <FlatList
                data={this.props.velix}
                keyExtractor={datas => datas.id.toString()}
          renderItem={({ index, item }) => {
            return (
              <View
                style={{
                  borderRadius: 1,
                  height: 40,
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <Text>{item.title}</Text>
              </View>
            );
          }}
        />
      </View>
    );
  }
}
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
