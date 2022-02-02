import React from 'react';
import { Typography } from '@material-ui/core';
const Generaltab = () => {
  return (
      <>
    <Typography>
    Number of Master nodes: 1
   </Typography>
   <Typography>
    Number of Worker nodes: 3
   </Typography>
   <Typography>
    k8s version: v1.20
   </Typography>
   </>
  );
};

export default Generaltab;
