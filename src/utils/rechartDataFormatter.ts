import { Timeline } from "../components/covid/DataInterfaces/allCountriesDataInterface";
import sma from "../utils/sma";
export default function format({
  yAxisValue,
  data,
}: {
  yAxisValue: string;
  data: Timeline[] | undefined | null;
}) {
  
  if (!data) {
    return null;
  }





  const dataMapped = data?.map((x:any,i:number) => {
    return {
      name: new Date(x.date).toLocaleString("default", { month: "short" }),
      fulldate: x.date,
      value: x[yAxisValue],
      // movingAvg: mavg[i]

    };
  });

  return dataMapped.reverse();
}
