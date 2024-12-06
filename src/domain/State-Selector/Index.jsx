import { useState } from "react";
import DropdownField from "../../components/DropdownField";
import useCountry from "./hooks/useCountry";

function StateSelector() {
    const [selectedCountry, setSelectedCountry] = useState(""); 
    const [selectedState, setSelectedState] = useState(""); 
    const { countryNames, hasNoStates, states, error: countryError } = useCountry({ selectedCountry });

    /**
     * Handles the change of selected country
     * @param {string} country - The name of the selected country
     */
    function countryChanged(country) {
        setSelectedCountry(country); // Update selected country
        setSelectedState(""); // Reset state selection
    }

    return (
        <div className="pt-5 mx-2">
            <div className="container-fluid mx-auto rounded p-4 shadow theme-color" style={{ maxWidth: "500px" }}>
                <h2 className="text-center mb-4 text-3xl text-white">Select Country and State</h2>

                {/* Display error message if any */}
                {countryError && <p className="text-danger text-center">{countryError}</p>}

                {/* Dropdown for selecting country */}
                <div className="mb-3">
                    <DropdownField
                        label="Country"
                        onValueChange={countryChanged}
                        options={countryNames}
                        selectedValue={selectedCountry}
                    />
                </div>

                {/* Dropdown for selecting state */}
                <div className="mb-4">
                    <DropdownField
                        label="State"
                        onValueChange={(state) => setSelectedState(state)} // Set selected state
                        options={states}
                        selectedValue={selectedState}
                    />
                </div>

                {/* Display the selected country */}
                {selectedCountry && (
                    <div className="alert alert-info text-center" role="alert">
                        <strong>Your selected country:</strong> {selectedCountry}
                    </div>
                )}

                {/* Display message if selected country has no states */}
                {hasNoStates && (
                    <div className="alert alert-danger text-center" role="alert">
                        <strong>{selectedCountry} has no states</strong>
                    </div>
                )}

                {/* Display the selected state, if any */}
                {selectedState && !hasNoStates && (
                    <div className="alert alert-success text-center" role="alert">
                        <strong>Your selected state:</strong> {selectedState}
                    </div>
                )}
            </div>
        </div>
    );
}

export default StateSelector;
