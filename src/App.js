import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
      duplicateNumber: [],
      finalNumber: [],
      exitNumber: [10, 14, 18, 30, 20, 26, 100, 300, 151, 7]
    };
  }
  clickHandler = () => {
    var enterdValue = this.state.inputValue;
    var data = enterdValue.split(",");
    var rengeList = [];
    var numberList = [];
    data.forEach((data, index) => {
      if (data.includes("-")) {
        var range = data.split("-");
        for (var i = range[0]; i <= range[1]; i++) {
          rengeList.push(i);
        }
      } else {
        numberList.push(data);
      }
    });
    var finalData = [...rengeList, ...numberList];
    var duplicateNumber = [];
    var uniqueNo = [];
    // for match with exist number
    finalData.forEach((data, index) => {
      var exitNumber = this.state.exitNumber;
      if (exitNumber.includes(Number(data))) {
        duplicateNumber.push(data);
      } else {
        uniqueNo.push(data);
      }
    });
    var totalunidData = [...this.state.exitNumber, ...uniqueNo];
    this.setState({
      duplicateNumber: duplicateNumber,
      finalNumber: totalunidData
    });
  };
  onChangeHandler = e => {
    var data = e.target.value;
    this.setState({ inputValue: data });
  };
  render() {
    var DuplicateNumber = [];
    var FinalData = [];

    if (this.state.duplicateNumber && this.state.duplicateNumber.length > 0) {
      this.state.duplicateNumber.forEach((data, index) => {
        DuplicateNumber.push(<span key={index}>{data + ", "}</span>);
      });
    }
    if (this.state.finalNumber && this.state.finalNumber.length > 0) {
      this.state.finalNumber.forEach((data, index) => {
        FinalData.push(<span key={index}>{data + ", "}</span>);
      });
    }
    return (
      <div className="App">
        <div className="search-container">
          <input
            placeholder="Enter the number"
            className="search-field"
            onChange={e => this.onChangeHandler(e)}
            // value={this.state.inputValue}
          />
        </div>
        <button className="save-button" onClick={() => this.clickHandler()}>
          Enter
        </button>
        <div className="exit-number">Skipped No: {DuplicateNumber}</div>
        <div className="exit-number">Final List:{FinalData}</div>
      </div>
    );
  }
}

export default App;
