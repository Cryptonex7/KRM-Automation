import React from 'react';
import {useTheme} from '@material-ui/core/styles';

function Logo(props) {
  const theme = useTheme();
  return (
    <svg
      id="Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 4193 3019.5"
      className={props.className}
      onClick={props.onClick}
    >
      <title>logo</title>
      <path
        d="M35.7,2250.6h0S476.87,1547.49,1268.41,778.19c32.48-31.56,119.85,119.86,119.85,119.86Z"
        fill="#00aeef"
      />
      <polygon
        points="2790.79 490.67 2671.46 610 1886.09 1395.39 1766.23 1515.24 1646.38 1395.39 1766.23 1275.54 2670.94 370.82 2671.46 371.34 2790.79 490.67"
        fill="#1b75bc"
      />
      <polygon
        points="2621.45 2130.75 2501.6 2250.6 1766.23 1515.24 1646.38 1395.39 1268.66 1017.66 1149.04 898.04 1268.66 778.44 1268.89 778.19 1766.23 1275.54 1886.09 1395.39 2621.45 2130.75"
        fill="#00aeef"
      />
      <rect
        x="3203.58"
        y="150.62"
        width="169.5"
        height="1912.81"
        transform="translate(6396.31 -435.4) rotate(135)"
        fill="#1b75bc"
      />
      <path
        d="M1190.75,2020.35l-138.81,144.71v261.37H814.2V1392.78h237.74v482.86l457.76-482.86h265.8l-428.23,460.71,453.33,572.94H1521.52Z"
        fill={theme.palette.text.primary}
      />
      <path
        d="M2565.49,2426.43l-199.35-287.95h-220v287.95H1906.91V1392.78h447.42c276.13,0,448.9,143.23,448.9,375.06,0,155.05-78.26,268.75-212.63,326.34l231.83,332.25ZM2341,1587.69H2146.12V1948H2341c146.19,0,220-67.93,220-180.16C2561.06,1654.14,2487.23,1587.69,2341,1587.69Z"
        fill={theme.palette.text.primary}
      />
      <path
        d="M3932.85,2426.43l-1.48-620.19-304.19,510.92H3519.39l-302.72-497.63v606.9H2992.22V1392.78H3190.1L3577,2035.12l381-642.34h196.4l2.95,1033.65Z"
        fill={theme.palette.text.primary}
      />
      <text
        transform="translate(814.2 2585.69)"
        fontSize="133.08"
        fill={theme.palette.text.primary}
        fontFamily="Montserrat-Bold, Montserrat"
        fontWeight="700"
      >
        KIIT{' '}
        <tspan x="305.68" y="0" letterSpacing="-0.01em">
          C
        </tspan>
        <tspan x="401.23" y="0">
          ORPOR
        </tspan>
        <tspan x="918.91" y="0" letterSpacing="-0.03em">
          A
        </tspan>
        <tspan x="1016.19" y="0" letterSpacing="0em">
          TE RE
        </tspan>
        <tspan x="1412.5" y="0" letterSpacing="0.01em">
          L
        </tspan>
        <tspan x="1493.68" y="0" letterSpacing="-0.03em">
          A
        </tspan>
        <tspan x="1590.96" y="0">
          TIONSHIP MAN
        </tspan>
        <tspan x="2644.42" y="0" letterSpacing="-0.01em">
          A
        </tspan>
        <tspan x="2745.03" y="0">
          GEMENT
        </tspan>
      </text>
      <path
        d="M814.2,2648.54l1671.55-1,835.77-.27q417.9.38,835.78,1.23v.28q-417.89,1.17-835.78,1.23l-835.77-.27-1671.55-1Z"
        fill="#00aeef"
      />
    </svg>
  );
}

export default Logo;
