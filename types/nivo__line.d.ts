declare module '@nivo/line' {
  import { ComponentType } from 'react';

  export interface LineDatum {
    x: string | number;
    y: number;
  }

  export interface LineProps {
    data: {
      id: string;
      data: LineDatum[];
    }[];
    width?: number;
    height?: number;
    margin?: { top: number; right: number; bottom: number; left: number };
    [key: string]: any; // Allow additional properties
  }

  export const ResponsiveLine: ComponentType<LineProps>;
}
declare module '@nivo/bar'; 
