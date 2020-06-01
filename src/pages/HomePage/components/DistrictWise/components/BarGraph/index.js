import React from 'react';
import Plot from 'react-plotly.js';

function BarGraph(props) {
  const {data, color} = props;
  const colors = [...Object.values(theme.palette.stats)];

  return (
    <Plot
      data={[
        {
          ...data,
          x: [...data.x],
          y: [...data.y],
          mode: 'lines',
          marker: {
            color: color !== null ? colors[color] : theme.palette.text.primary,
          },
        },
      ]}
      layout={{
        paper_bgcolor: 'rgba(0,0,0,0)',
        plot_bgcolor: 'rgba(0,0,0,0)',
        transition: {
          duration: 500,
          easing: 'cubic-in-out',
          ordering: 'traces first',
        },
        margin: {
          l: 70,
          r: 10,
          b: 20,
          t: 10,
          pad: 0,
        },
        yaxis: {
          tickfont: {
            size: 12,
            color: theme.palette.text.secondary,
          },
          automargin: true,
          fixedrange: true,
        },
        xaxis: {
          tickfont: {
            color: theme.palette.text.secondary,
          },
          fixedrange: true,
        },
        width: Math.min(600, window.innerWidth - 20),
        height: 503,
      }}
      config={{
        responsive: true,
        displayModeBar: false,
      }}
    />
  );
}
export default BarGraph;
