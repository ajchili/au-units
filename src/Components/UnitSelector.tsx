import React, { Component, InputHTMLAttributes } from "react";

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
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
              onChange(e.target.value as Unit);
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
