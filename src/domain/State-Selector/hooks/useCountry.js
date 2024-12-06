import { useEffect, useState } from "react";
import apiUrls from "../../../utils/api-urls";
import { getCountryDetails } from "../../../services/api-services";
/**
 * Custom hook to fetch country and state details based on the selected country.
 *
 * @param {string} params.selectedCountry - The name of the country to fetch states for (default: "India").
 * @returns {Object} The hook returns an object containing:
 *  - countryNames: Array of country names.
 *  - hasNoStates: Boolean indicating if the selected country has no states.
 *  - states: Array of states for the selected country.
 *  - error: Error message if any occurs during fetching.
 */
function useCountry({ selectedCountry = "India" }) {
    const [error, setError] = useState(""); 
    const [countryData, setCountryData] = useState([]); 
    const [countryNames, setCountryNames] = useState([]); 
    const [states, setStates] = useState([]); 
    const [hasNoStates, setHasNoStates] = useState(false); 

    useEffect(() => {
        async function fetchCountries() {
            try {
                        // Fetch country data from the api 
                const response = await getCountryDetails(apiUrls.countryDetails.subUrls.getCountries);
                if (response.data && Array.isArray(response.data.data)) {
                    setCountryData(response.data.data);
                    setCountryNames(response.data.data.map((country) => country.name));
                    setError(""); // Clear any previous error
                } else {
                    setError("Unexpected response format");
                    console.error("Unexpected response format:", response.data);
                }
            } catch (err) {
                console.error("Error fetching countries:", err);
                setError("An error occurred while fetching countries");
            }
        }
        fetchCountries();
    }, []); 

    // Recalculate states and hasNoStates when selectedCountry changes
    useEffect(() => {
        if (countryData.length > 0) {
            const selectedCountryData = countryData.find(
                (country) => country.name === selectedCountry
            );
            const stateNames = selectedCountryData?.states.map((state) => state.name) || [];
            setStates(stateNames);
            setHasNoStates(stateNames.length === 0 && selectedCountry !== "");
        }
    }, [selectedCountry, countryData]);
    return { countryNames, hasNoStates, states, error };
}
export default useCountry;







