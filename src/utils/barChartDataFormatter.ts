import { Country, Timeline } from "../components/covid/DataInterfaces/allCountriesDataInterface";

export default function format( 
    {
        xAxisValue,
        yAxisValue, 
        data} : {
            xAxisValue: string
            yAxisValue: string
            data: Timeline[] | undefined | null
        }
        
        
    ) {


    if(!data) {
        return null
    }
    
    return data?.map((x:any) => {
        return {
            id:  x[xAxisValue],
            value:  x[yAxisValue]
        }
    }).reverse()

    

   
  
}