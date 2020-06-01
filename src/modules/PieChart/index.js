import React from 'react';
import Plot from 'react-plotly.js';
import useTheme from '@material-ui/core/styles/useTheme';
import {darken} from '@material-ui/core/styles';

function PieChart(props) {
  const {data} = props;
  const theme = useTheme();

  return React.createElement(Plot, {
    data: [
      {
        ...data,
        values: [...data.values],
        labels: [...data.labels],
        marker: {
          colors: [
            darken(theme.palette.stats.active, 0.85),
            darken(theme.palette.stats.confirmed, 0.75),
            darken(theme.palette.stats.active, 0.75),
            darken(theme.palette.stats.confirmed, 0.85),
            darken(theme.palette.stats.active, 0.65),
            darken(theme.palette.stats.confirmed, 0.65),
            darken(theme.palette.stats.active, 0.55),
            darken(theme.palette.stats.active, 0.45),
          ],
        },
        hoverinfo: 'label+percent',
        textinfo: 'label+percent',
        textposition: 'inside',
        automargin: true,
        title: '',
      },
    ],
    layout: {
      paper_bgcolor: 'rgba(0,0,0,0)',
      plot_bgcolor: 'rgba(0,0,0,0)',
      autosize: true,
      margin: {
        l: 10,
        r: 10,
        b: 0,
        t: 10,
        pad: 0,
      },
      height: Math.min(450, window.innerWidth - 20),
      showlegend: true,
      legend: {
        orientation: 'h',
        font: {
          color: theme.palette.text.primary,
        },
      },
    },
    useResizeHandler: true,
    style: {width: '100%', height: '100%'},
    config: {
      responsive: true,
      displayModeBar: false,
      staticPlot: true,
    },
  });
}
export default PieChart;
