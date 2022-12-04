import React, { useContext } from 'react';
import { WindowContext } from './../../../helpers/WindowContext';
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
    const { clientWidth } = useContext(WindowContext);

    return (
        <ResponsiveContainer width="100%" aspect={clientWidth > horizontalGraphWidth ? 3 : NaN}>
          <BarChart
            width={500}
            height={clientWidth > horizontalGraphWidth ? 300 : 1000}
            data={chartProps.feeData}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
            layout={clientWidth > horizontalGraphWidth ? 'vertical' : 'horizontal'}
          >
            <CartesianGrid />
            <XAxis tickFormatter={(value) => clientWidth > horizontalGraphWidth ? `$${value}` : value} dataKey={clientWidth > horizontalGraphWidth ? '' : 'name'} type={clientWidth > horizontalGraphWidth ? 'number' : 'category'} />
            <YAxis tickFormatter={(value) => clientWidth > horizontalGraphWidth ? value : `$${value}`} dataKey={clientWidth > horizontalGraphWidth ? 'name' : ''}  type={clientWidth > horizontalGraphWidth ? 'category' : 'number'} width={clientWidth > horizontalGraphWidth ? 70 : 40} />
            <Tooltip formatter={(value) => `$${value}`} />
            <Legend />
            <Bar dataKey="fxFees" name="Currency Exchange Fees" stackId="a" fill="#00B0F6" />
            <Bar dataKey="brokerageFees" name="Transaction Fees" stackId="a" fill="#00E3B7" />
            <Bar dataKey="managementFees" name="Management Fees" stackId="a" fill="#F0EE16" />
          </BarChart>
        </ResponsiveContainer>
    );
}