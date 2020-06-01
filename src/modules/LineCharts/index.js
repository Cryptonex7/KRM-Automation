import React from 'react';
import Plot from 'react-plotly.js';
import {useTheme} from '@material-ui/core/styles';

function LineChart(props) {
  const {data} = props;
  const theme = useTheme();

  return React.createElement(Plot, {
    data: [
      {
        ...data,
        x: [...data.x],
        y: [...data.y],
        mode: 'lines',
        line: {
          color: 'red',
        },
      },
    ],
    layout: {
      yaxis: {
        title: data.y_label,
        type: 'linear',
        gridcolor: theme.palette.graphLines.default,
        showline: true,
        tickfont: {
          color: theme.palette.text.secondary,
        },
        fixedrange: true,
      },
      xaxis: {
        title: data.x_label,
        nticks: 5,
        gridcolor: theme.palette.graphLines.default,
        tickfont: {
          color: theme.palette.text.secondary,
        },
        fixedrange: true,
      },
      transition: {
        duration: 500,
        easing: 'cubic-in-out',
        ordering: 'traces first',
      },
      paper_bgcolor: 'rgba(0,0,0,0)',
      plot_bgcolor: 'rgba(0,0,0,0)',
      margin: {
        l: 40,
        r: 20,
        b: 40,
        t: 10,
        pad: 0,
      },
      height: Math.min(450, (window.innerWidth - 20) / 2),
      legend: {orientation: 'h'},
      autoresize: true,
    },
    useResizeHandler: true,
    style: {width: '100%', height: '100%'},
    config: {
      responsive: true,
      displayModeBar: false,
    },
  });
}
export default LineChart;
