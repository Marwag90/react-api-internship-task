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
    
    const dataMapped =  data?.map((x:any) => {
        return {
            x:  x[xAxisValue],
            y:  x[yAxisValue]
        }
    })

    

    return [{
        id: '1',
        data: dataMapped
    }]
  
}