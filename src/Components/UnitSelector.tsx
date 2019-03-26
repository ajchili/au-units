import React, { Component } from "react";

export type Unit =
  | "Football Fields"
  | "Kilometer"
  | "Manhattans"
  | "Road Islands"
  | "AU";

interface Props {
  title: "Convert From" | "Convert To";
  selected: Unit;
  onChange: (newValue: Unit) => void;
}

let selectRef: HTMLSelectElement | null;

class UnitSelector extends Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    const { title, selected, onChange } = this.props;

    return (
      <div>
        <label>{title}</label>
        <div className="nes-select">
          <select
            ref={ref => (selectRef = ref)}
            onChange={() => {
              if (selectRef) onChange((selectRef.value as Unit) || "Kilometer");
            }}
            value={selected}
          >
            <option value="Football Fields">Football Fields</option>
            <option value="Kilometer">Kilometer</option>
            <option value="Manhattans">Manhattans</option>
            <option value="Road Islands">Road Islands</option>
            <option value="AU">AU</option>
          </select>
        </div>
      </div>
    );
  }
}

export default UnitSelector;
