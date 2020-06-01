import React from 'react';
import Plot from 'react-plotly.js';
import useTheme from '@material-ui/core/styles/useTheme';

function BarGraph(props) {
  const theme = useTheme();
  const {data, color} = props;
  const colors = [...Object.values(theme.palette.stats)];
  return React.createElement(Plot, {
    data: [
      {
        ...data,
        x: [...data.x],
        y: [...data.y],
        mode: 'lines',
        marker: {
          color: color !== null ? colors[color] : theme.palette.stats.active,
        },
      },
    ],
    layout: {
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
        b: 40,
        t: 10,
        pad: 0,
      },
      yaxis: {
        title: data.y_label,
        tickfont: {
          size: 12,
          color: theme.palette.text.secondary,
        },
        automargin: true,
        fixedrange: true,
      },
      xaxis: {
        title: data.x_label,
        tickfont: {
          color: theme.palette.text.secondary,
        },
        fixedrange: true,
      },
      autosize: true,
    },
    useResizeHandler: true,
    style: {width: '100%', height: '100%'},
    config: {
      responsive: true,
      displayModeBar: false,
    },
  });
}
export default BarGraph;
