import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import { Card, CardItem, Text, H1 } from "native-base";
import selectDataReducer from "../../redux/reducers/selectDataReducer";
import { connect } from "react-redux";
import { selectData } from "../../redux/actions";
class CardCustom extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  renderDescription() {
    console.log(this.props);
    const { id, description } = this.props.data;

    if (id === this.props.selectID) {
      return <Text>{description}</Text>;
    }
  }

  render() {
    const { data } = this.props;
    return (
      <Card
        style={{ width: 300, alignItems: "center" }}
        onTouchStart={() => {
          this.props.selectData(data.id);
        }}
      >
        <CardItem style={{ flexDirection: "column" }}>
          <H1>{data.title} </H1>
          {this.renderDescription()}
        </CardItem>
      </Card>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    selectID: state.dataSelection
  };
};

const mapDispatchToProps = {
  selectData
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CardCustom);
