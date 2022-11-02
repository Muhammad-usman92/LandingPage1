import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: props => props.color,
    borderRadius: '5px',
    '&:hover': {
      backgroundColor: props => props.color,
    },
  },
}));

export default function CustomButton(props) {
  const propsObj = {className: props.className, ...props}
  const classes = useStyles(props);
  const customClass = propsObj.className

  delete propsObj.className

  return <Button 
              {...propsObj} 
              variant   =  {props.variant ? "outlined" : "contained"}
              color     = "primary"
              className = {classes.root + ' ' + customClass}
              >
            {props.btnText ? 'Contract' : 'Start Free'}
        </Button>
}
