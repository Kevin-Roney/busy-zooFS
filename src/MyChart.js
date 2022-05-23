import React from 'react';
import { VictoryBar, VictoryPie, VictoryTheme, VictoryChart } from 'victory';
<<<<<<< HEAD
=======

>>>>>>> d6212602ee4356534da06a3b30ea000022d088e9

export default function MyChart() {
  return (
    <div>
      <VictoryChart
        theme={VictoryTheme.material}
        domainPadding={100}
      >
        <VictoryBar
          style={{ data: { fill: '#c43a31' } }}
          data={[
            { country: 'USA', amount: 1000, colorScale: 'blue' },
            { country: 'France', amount: 800, colorScale: 'blue' },
            { country: 'UK', amount: 600, colorScale: 'blue' },
            { country: 'Canada', amount: 700, colorScale: 'blue' },
          ]}
          x='country'
          y='amount'
        />
      </VictoryChart>
      <VictoryPie
        colorScale={['tomato', 'orange', 'gold', 'cyan', 'navy']}
        data={[
          { country: 'USA', amount: 1000 },
          { country: 'France', amount: 800 },
          { country: 'UK', amount: 600 },
          { country: 'Canada', amount: 700 },
        ]}
        x='country'
        y='amount'
      />
    </div>
  );
}
