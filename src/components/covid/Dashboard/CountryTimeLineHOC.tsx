import React from "react";
import { useQuery } from "react-query";
import { type Country } from "../DataInterfaces/allCountriesDataInterface";

function getCountryTimeLine(countryCode: string) {
   
  return fetch(`https://corona-api.com/countries/${countryCode}`).then((res) =>
    res.json()
  ).then(res => res.data)
}

interface CountryTimeLineHOCProps {
  countryCode: string;
  children: (data: CountryTimeLineHOCallbackProps) => any;
}

interface CountryTimeLineHOCallbackProps {
    country: Country,
    error: Error | null,
    isLoading: boolean
}

export function CountryTimeLineHOC({
  countryCode,
  children,
}: CountryTimeLineHOCProps) {
 
  const { data, error, isLoading } = useQuery(countryCode, getCountryTimeLine, {
    refetchInterval: 0,
    refetchOnWindowFocus: false,
    refetchIntervalInBackground: false,
  });


  const pass: CountryTimeLineHOCallbackProps = {
        country: data,
        isLoading,
        error:error as  Error
  }

  return <>{children(pass)}</>;
}
