import React, { PureComponent, useState } from "react";
import {
  ResponsiveContainer,
  AreaChart,
  BarChart,
  Cell,
  ComposedChart,
  Bar,
  Line,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import dataFormatted from "../../../utils/rechartDataFormatter";
// import BarChart from "./BarChart";



function ToolTip(say:any) {
 return ({ active, payload, label }:any) => {
    if (active && payload) {
      const date = new Date(payload[0].payload.fulldate);
      const month = date.toLocaleString("default", { month: "short" });
      const dayOfMonth = date.toLocaleString("default", { day: "numeric" });
  
      return (
        <div className="grid_box" style={{ padding: "10px" }}>
          <h4 style={{ margin: "0px" }}>{month + " " + dayOfMonth}</h4>
          <p style={{ margin: "0px" }}>
            {payload[0].payload.value.toLocaleString()} {say ?? ''} 
          </p>
        </div>
      );
    }
  
    return null;
  };
}



 function HM(props:any) {
  const data = {
    xAxisValue: props.xAxisValue,
    yAxisValue: props.yAxisValue,
    data: props.timeline,
  };

  const formattedData = dataFormatted(data);
  
  if (props.simple) {
    return (
      <ResponsiveContainer  width="100%" height="100%">
        <AreaChart data={formattedData as any}
         margin={{
          top: 0, right: 0, left: 0, bottom: 0,
        }}>
          
          
          <Area
            strokeWidth={2.5}
            isAnimationActive={true}
            animationEasing='linear'
            animationDuration={400}
          
            dataKey="value"
            stroke="#A5CFE3"
            fill="rgba(166, 206, 227, 0.2)"
          />
        </AreaChart>
      </ResponsiveContainer>
    );
  }

  

  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={formattedData as any}>
        <CartesianGrid vertical={false} stroke="#666666" strokeDasharray="7" />
        <XAxis dataKey="name" tickLine={false} ticks={['Jan','Feb','Mar', 'Apr','May']} />
        <YAxis tickLine={false} />
        <Tooltip
          cursor={true}
          content={ToolTip(props.say)}
          isAnimationActive={false}
        />
        {/* <Area type="monotone" dataKey="value" fill="#8884d8" stroke="#8884d8" /> */}
        
        <Bar dataKey="value" fill="rgba(166, 206, 227, 0.5)"   isAnimationActive={false} />

        {/* <Line
         isAnimationActive={false}
          activeDot={false}
          dot={false}
          type="monotone"
          dataKey="value"
          stroke="#A5CFE3"
          strokeWidth={2.5}
        /> */}
      </BarChart>
    </ResponsiveContainer>
  );
}


const memoizedHM = React.memo(HM)
export {
  memoizedHM as HM
}