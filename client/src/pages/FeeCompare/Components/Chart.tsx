import React from 'react';
import {
   BarChart, 
   Bar, 
   XAxis, 
   YAxis, 
   CartesianGrid, 
   Tooltip, 
   Legend, 
   ResponsiveContainer 
} from 'recharts';

interface ChartProps {
  feeData: {}[];
}

export default function Chart(chartProps: ChartProps) {

    const horizontalGraphWidth: number = 1000;
    
    const [dimensions, setDimensions] = React.useState({ 
        height: window.innerHeight,
        width: window.innerWidth
      })
      
      React.useEffect(() => {
        function handleResize() {
          setDimensions({
            height: window.innerHeight,
            width: window.innerWidth
          })
        }
        window.addEventListener('resize', handleResize);
        return () => {
          window.removeEventListener("resize", handleResize);
        };
    })

    return (
        <ResponsiveContainer width="100%" aspect={dimensions.width > horizontalGraphWidth ? 3 : NaN}>
          <BarChart
            width={500}
            height={dimensions.width > horizontalGraphWidth ? 300 : 1000}
            data={chartProps.feeData}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
            layout={dimensions.width > horizontalGraphWidth ? 'vertical' : 'horizontal'}
          >
            <CartesianGrid />
            <XAxis dataKey={dimensions.width > horizontalGraphWidth ? '' : 'name'} type={dimensions.width > horizontalGraphWidth ? 'number' : 'category'} />
            <YAxis dataKey={dimensions.width > horizontalGraphWidth ? 'name' : ''}  type={dimensions.width > horizontalGraphWidth ? 'category' : 'number'} />
            <Tooltip />
            <Legend />
            <Bar dataKey="fxFees" name="Currency Exchange Fees" stackId="a" fill="#8884d8" />
            <Bar dataKey="brokerageFees" name="Transaciton Fees" stackId="a" fill="#82ca9d" />
            <Bar dataKey="managementFees" name="Management Fees" stackId="a" fill="#FCF400" />
          </BarChart>
        </ResponsiveContainer>
      );
}