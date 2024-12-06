/**
 * DropdownField component renders a customizable dropdown list with a label.
 *
 * @param {string} label - The label to be displayed above the dropdown.
 * @param {function} onValueChange - Callback function to handle the change in selected value.
 * @param {Array} options - The array of options to be displayed in the dropdown.
 * @param {string} selectedValue - The currently selected value in the dropdown.
 */
function DropdownField({ label, onValueChange, options = [], selectedValue = "" }) {
    return (
        <div className="d-flex justify-content-between align-items-center bg-white p-3 rounded-lg text-sm rounded">
            <div className="w-full">
                <label className="text-secondary h4 mb-2">{label}</label>
                <select
                    className="form-select form-select-lg bg-info"
                    value={selectedValue} 
                    onChange={(e) => onValueChange && onValueChange(e.target.value)} // trigger onValueChange callback
>
                    <option value="" disabled>Select {label}</option>
  
                    {/* Options in the dropdown */}
                    {options.map((option, index) => (
                        <option className="bg-light" key={index} value={option}>
                            {option} {/* Displaying option value */}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
  }
  
  export default DropdownField;
  