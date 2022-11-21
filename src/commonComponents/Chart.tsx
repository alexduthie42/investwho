import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Sharsies',
    brokerageFees: 4000,
    fxFees: 2400,
    managementFees: 2400,
  },
  {
    name: 'Hatch',
    brokerageFees: 3000,
    fxFees: 1398,
    managementFees: 2210,
  },
  {
    name: 'Stake',
    brokerageFees: 2000,
    fxFees: 9800,
    managementFees: 2290,
  },
  {
    name: 'InvestNow',
    brokerageFees: 2780,
    fxFees: 3908,
    managementFees: 2000,
  },
  {
    name: 'Tiger',
    brokerageFees: 1890,
    fxFees: 4800,
    managementFees: 2181,
  },
  {
    name: 'Jarden Direct',
    brokerageFees: 2390,
    fxFees: 3800,
    managementFees: 2500,
  }
];

export default function Chart() {

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

    if (dimensions.width > 1000)
    {
        return (
            <ResponsiveContainer width="100%" aspect={3}>
              <BarChart
                width={500}
                height={300}
                data={data}
                margin={{
                  top: 20,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
                layout={'vertical'}
              >
                <CartesianGrid />
                <XAxis type="number" />
                <YAxis dataKey="name" type="category" />
                <Tooltip />
                <Legend />
                <Bar dataKey="fxFees" stackId="a" fill="#8884d8" />
                <Bar dataKey="brokerageFees" stackId="a" fill="#82ca9d" />
                <Bar dataKey="managementFees" stackId="a" fill="#FCF400" />
              </BarChart>
            </ResponsiveContainer>
          );
    }
    else {
        return (
            <div className='horizontalChart'>
                <ResponsiveContainer width="100%" height="100%" >
                    <BarChart
                        width={500}
                        height={1000}
                        data={data}
                        margin={{
                        top: 20,
                        right: 30,
                        left: 20,
                        bottom: 5,
                        }}              >
                        <CartesianGrid />
                        <XAxis dataKey="name" type="category"/>
                        <YAxis type="number" />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="fxFees" stackId="a" fill="#8884d8" />
                        <Bar dataKey="brokerageFees" stackId="a" fill="#82ca9d" />
                        <Bar dataKey="managementFees" stackId="a" fill="#FCF400" />
                    </BarChart>
                </ResponsiveContainer>
            </div>
          );
    }

}