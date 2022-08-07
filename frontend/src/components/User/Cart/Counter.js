import React, { useState } from 'react'
// import {Button} from "@material-ui/core";
// import {ButtonGroup} from "@material-ui/core";
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'
import { Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'

const useStyle = makeStyles({
  root: {
    background: '#ff5d8f',
    padding: 3.5,
    '& .myButton': {
      border: 'none',
    },
  },
  counterText: {
    textAlign: 'center',
  },
})
function Counter({
  data, inventory, handleIncrement, handleDecrement,
}) {
  const classes = useStyle()
  const [count, setCount] = useState(data?.count || 1)
  const handleIncrease = () => {
    if (count < inventory) {
      setCount(count + 1)
      handleIncrement([data?.productDetail, count + 1])
    }
  }
  const handleDecrease = () => {
    if (count > 1) {
      setCount(count - 1)
      handleDecrement([data?.productDetail, count - 1])
    }
  }
  return (
    <div>
      {/* <ButtonGroup
            className={classes.root}
            size="small"
            aria-label="small outlined button group"
         >
            <Button className="myButton" onClick={handleIncrease}>
               <AddIcon />
            </Button>
            <Typography className={classes.counterText} variant="p">
               {count === inventory ? "حداکثر" + count : count}
            </Typography>

            <Button className="myButton" onClick={handleDecrease}>
               <RemoveIcon />
            </Button>
         </ButtonGroup> */}
    </div>
  )
}

export default Counter
