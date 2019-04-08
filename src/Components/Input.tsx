import React, { Component } from "react";

interface Props {
  onInputChange?: (newValue: number) => void;
}

interface State {
  isNaN: boolean;
}

let inputRef: HTMLInputElement | null;

class Input extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      isNaN: false
    };
  }

  render() {
    const { onInputChange } = this.props;
    const { isNaN: showNaNError } = this.state;

    return (
      <div className="nes-field">
        <label>Value</label>
        <input
          ref={ref => (inputRef = ref)}
          type="text"
          placeholder="Some really big number..."
          className={`nes-input ${showNaNError ? "is-error" : ""}`}
          onKeyUp={() => {
            if (inputRef) {
              if (inputRef.value.length && isNaN(parseFloat(inputRef.value))) {
                this.setState({ isNaN: true });
              } else {
                let value: number = parseFloat(inputRef.value);
                this.setState({ isNaN: false });
                if (onInputChange) onInputChange(value || -1);
              }
            }
          }}
        />
        {showNaNError && (
          <span className="nes-text is-error" style={{ marginTop: 10 }}>
            No number provided! The input must be a number!
          </span>
        )}
      </div>
    );
  }
}

export default Input;
