import { ReactElement } from "react";
import "./Checkbox.css";

interface CheckboxType {
  handleCheck: Function;
  checked: boolean;
  editMode: boolean;
}

const Checkbox = ({ handleCheck, checked, editMode }: CheckboxType): ReactElement => {
  return (
    <label className={`checkContainer ${editMode ? '' : 'hideNoEdit'}`} data-testid="checkbox">
      <input
        type="checkbox"
        onChange={() => {
          handleCheck();
        }}
        checked={checked}
      />
      <span className="checkmark"></span>
    </label>
  );
};

export default Checkbox;
