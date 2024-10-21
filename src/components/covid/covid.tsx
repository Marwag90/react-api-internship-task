import React from "react";
import Dashboard from "./Dashboard/Dashboard";
import ControlForm from "./Dashboard/Controls";
import COVIDData from "./Dashboard/CovidDataHOC";
import useCovidData from "./Dashboard/CovidDataHOC";

function RenderCovid() {
  const {
      allCountriesData,
      error,
      changeCountry,
      countryData,
      isLoading,
      globalTimeline,
      retry,


  } = useCovidData({
    startingCountry: 'Pakistan'
  })
  if (!error) {
    return (
      <>
        <ControlForm
          isLoading={isLoading}
          allCountriesData={allCountriesData}
          changeCountry={changeCountry}
          countryData={countryData}
        />
        <Dashboard
          allCountriesData={allCountriesData}
          isLoading={isLoading}
          globalTimeline={globalTimeline}
          countryData={countryData}
        />
      </>
    );
  } else {
    return (
      <>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <h4>An Error Occurred</h4>
          <p>Please Try Again Later</p>
          <p style={{ width: "240px" }}>
            But don't worry it has been automatically reported
          </p>
          <br></br>
          <button
            onClick={retry}
            style={{
              borderRadius: "2px",
              color: "white",
              background: "#1f78b4",
              outline: "none",
              border: "0px",
              fontSize: "15px",
              height: "40px",
              display: "block",
              width: "200px",
            }}
          >
            Retry
          </button>
        </div>
      </>
    );
  }
}

export default function Covid(props:any) {
  return (
    <main>
      <div className="main_content">
            <RenderCovid/>
      </div>
    </main>
  );
}
