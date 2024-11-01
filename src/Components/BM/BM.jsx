import React, {useState} from "react";

//Material UI
import {Drawer} from '@mui/material';



export default function BM({children ,open, onClose}) {


  return (
        <Drawer anchor='right' open={open} onClose={onClose}>
            {children}
        </Drawer>
  )
}
