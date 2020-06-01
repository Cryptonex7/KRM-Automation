import React from 'react';
import {useStyles} from './styles';
import {Grid} from '@material-ui/core';
// import {useState} from 'react';

function GridItem({xs, children, title, isTabbed}) {
  const classes = useStyles();
  // const [size, setsize] = useState(6);
  // const [width, setwidth] = useState(0);
  // const ref = useRef(null);

  // useEffect(() => {
  //   setwidth(ref.current ? ref.current.offsetWidth : 0);
  // }, [size]);

  // const handleSizeChange = (size) => {
  //   setsize(size);
  //   // setwidth(ref.current ? ref.current.offsetWidth : 0);
  //   // console.log('Size Changed to: ', size, width);
  // };

  return (
    <Grid item xs={xs} style={{padding: 4}}>
      {/* <Grid item xs={5} className={classes.gridItemHead}></Grid>
      <Grid item xs={7} className={classes.gridItemHead}>
        <Button onClick={() => handleSizeChange(3)}>Small</Button>
        <Button onClick={() => handleSizeChange(6)}>Medium</Button>
        <Button onClick={() => handleSizeChange(12)}>Large</Button>
      </Grid> */}
      {/* <Grid item className={classes.gridItemHead}> */}
      {/* {React.cloneElement(children, {
          parentWidth: width,
        })} */}
      <div className={`${classes.gridItem} `}>
        <div
          className={`${classes.title} ${isTabbed ? '' : classes.bottomMargin}`}
        >
          {title}
        </div>
        {children}
      </div>
      {/* </Grid> */}
    </Grid>
  );
}

export default GridItem;
