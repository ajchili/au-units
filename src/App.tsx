import React, { Component } from "react";
import { Input, UnitSelector } from "./Components";
import { Unit } from "./Components/UnitSelector";

const UnitsInKM = {
  "Football Fields": 0.09144,
  Kilometer: 1,
  Manhattans: 21.6,
  "Road Islands": 4000,
  AU: 149597900
};

interface Props {}

interface State {
  inputValue?: number;
  convertFrom: Unit;
  convertTo: Unit;
}

class App extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      convertFrom: "Football Fields",
      convertTo: "Road Islands"
    };
  }

  onInputValueChanged = (newValue: number) => {
    this.setState({ inputValue: newValue });
  };

  onConvertFromChanged = (newValue: Unit) => {
    this.setState({ convertFrom: newValue });
  };

  onConvertToChanged = (newValue: Unit) => {
    this.setState({ convertTo: newValue });
  };

  render() {
    const { inputValue = -1, convertFrom, convertTo } = this.state;

    return (
      <div className="nes-container" style={{ height: "100vh" }}>
        <h1>AU Units</h1>
        <p>The simple way to convert to and from AU Units.</p>
        <div style={styles.input}>
          <Input onInputChange={this.onInputValueChanged} />
        </div>
        <div style={styles.input}>
          <UnitSelector
            title="Convert From"
            onChange={this.onConvertFromChanged}
            selected={convertFrom}
          />
        </div>
        <div style={styles.input}>
          <UnitSelector
            title="Convert To"
            onChange={this.onConvertToChanged}
            selected={convertTo}
          />
        </div>
        {inputValue > -1 && (
          <h3 style={{ marginTop: 20 }}>
            Output:
            {(UnitsInKM[convertFrom] * inputValue) / UnitsInKM[convertTo]}
          </h3>
        )}
        <a
          href="https://github.com/ajchili/au-units/issues"
          className="nes-btn is-warning"
          style={styles.input}
        >
          Are some values missing?
        </a>
      </div>
    );
  }
}

const styles = {
  input: {
    marginTop: 10,
    marginBottom: 10
  }
};

export default App;
