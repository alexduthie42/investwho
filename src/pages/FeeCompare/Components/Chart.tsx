import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface ChartProps {
  investmentAmount: number;
  frequency: string;
}

export default function Chart(chartProps: ChartProps) {

    const horizontalGraphWidth: number = 1000;
    const periodsForFrequencies: { [id: string] : number } = {
      "weekly": 52,
      "fortnightly": 26,
      "monthly": 12,
      "yearly": 1
     }

    const data = [
      {
        name: 'Sharesies',
        brokerageFees: chartProps.investmentAmount < 3000 ? 
          Number(periodsForFrequencies[chartProps.frequency] * chartProps.investmentAmount * 0.005).toFixed(2) :
          Number((periodsForFrequencies[chartProps.frequency] * 3000 * 0.005) + (periodsForFrequencies[chartProps.frequency] * (3000 - chartProps.investmentAmount) * 0.001)).toFixed(2),
        fxFees: Number(periodsForFrequencies[chartProps.frequency] * chartProps.investmentAmount * 0.004).toFixed(2),
        managementFees: Number(periodsForFrequencies[chartProps.frequency] * chartProps.investmentAmount * 0.0003).toFixed(2),
      },
      {
        name: 'Hatch',
        brokerageFees: 3 * periodsForFrequencies[chartProps.frequency],
        fxFees: Number(periodsForFrequencies[chartProps.frequency] * chartProps.investmentAmount * 0.005).toFixed(2),
        managementFees: Number(periodsForFrequencies[chartProps.frequency] * chartProps.investmentAmount * 0.0003).toFixed(2),
      },
      {
        name: 'InvestNow',
        brokerageFees: Number(periodsForFrequencies[chartProps.frequency] * chartProps.investmentAmount * 0.005).toFixed(2),
        fxFees: 0,
        managementFees: Number(periodsForFrequencies[chartProps.frequency] * chartProps.investmentAmount * 0.0003).toFixed(2)
      }
    ];

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
            data={data}
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