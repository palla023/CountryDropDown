import React, { useState } from "react";
import "./SelectCountry.css";
import countries from "./Countries";


const SelectCountry = () => {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [selectedPincode, setSelectedPincode] = useState("");
  const [pincodeValid, setPincodeValid] = useState(true);

  const handleCountryChange = (event) => {
    if (event && event.target) {
      setSelectedCountry(event.target.value);
      setSelectedState("");
      setSelectedDistrict("");
      setSelectedPincode("");
    }
  };

  const handleStateChange = (event) => {
    setSelectedState(event.target.value);
    setSelectedDistrict("");
    setSelectedPincode("");
  };

  const handleDistrictChange = (event) => {
    setSelectedDistrict(event.target.value);
    setSelectedPincode("");
  };

  const validatePincode = () => {
    const state = countries
      .find((country) => country.name === selectedCountry)
      ?.states.find((state) => state.name === selectedState);

    if (state && selectedPincode.startsWith(state.pincodePrefix)) {
      return true;
    } else {
      return false;
    }
  };

  const handlePincodeChange = (event) => {
    const pincode = event.target.value;
    setSelectedPincode(pincode);
    const isValid = validatePincode();
    setPincodeValid(isValid);
  };

  return (
    <div className="container">
      <h3 className="text-center">Country and State Selector</h3>
      <div className="card">
        <div className="card-body">
          <form>
            <div className="form-group">
              <div className="form-group">
                <label htmlFor="countrySelect">Select Country</label>
                <select
                  className="form-control"
                  id="countrySelect"
                  value={selectedCountry}
                  onChange={handleCountryChange}
                >
                  <option value="">-- Select Country --</option>
                  {countries.map((country, index) => (
                    <option key={index} value={country.name}>
                      {country.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="stateSelect">Select State</label>
              <select
                className="form-control"
                id="stateSelect"
                value={selectedState}
                onChange={handleStateChange}
                disabled={!selectedCountry}
              >
                <option value="">-- Select State --</option>
                {selectedCountry &&
                  countries
                    .find((country) => country.name === selectedCountry)
                    ?.states.map((state, index) => (
                      <option key={index} value={state.name}>
                        {state.name}
                      </option>
                    ))}
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="districtSelect">Select District</label>
              <select
                className="form-control"
                id="districtSelect"
                value={selectedDistrict}
                onChange={handleDistrictChange}
                disabled={!selectedState}
              >
                <option value="">-- Select District --</option>
                {selectedState &&
                  countries
                    .find((country) => country.name === selectedCountry)
                    ?.states.find((state) => state.name === selectedState)
                    ?.districts.map((district, index) => (
                      <option key={index} value={district}>
                        {district}
                      </option>
                    ))}
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="pincodeInput">Enter Pincode</label>
              <input
                type="text"
                className="form-control"
                id="pincodeInput"
                value={selectedPincode}
                onChange={handlePincodeChange}
                disabled={!selectedDistrict}
              />
              {!pincodeValid && (
                <small className="text-danger">
                  Invalid pincode format for the selected state
                </small>
              )}
            </div>

            <button
              type="submit"
              className="btn btn-primary m-2"
              disabled={
                !selectedCountry ||
                !selectedState ||
                !selectedDistrict ||
                !selectedPincode
              }
            >
              Submit
            </button>
          </form>
        </div>
      </div>
      <div className="card mt-4">
        <div className="card-body text-center">
          <h5 className="card-title text-center">
            Details of {selectedCountry}
          </h5>
          <p>
            Country: <strong>{selectedCountry}</strong>
          </p>
          <p>
            State: <strong>{selectedState}</strong>
          </p>
          <p>
            District: <strong>{selectedDistrict}</strong>
          </p>
          <p>
            Pincode: <strong>{selectedPincode}</strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SelectCountry;
