import React, { useState } from 'react'
import { Button, ButtonGroup } from '@material-ui/core'
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'
import { Typography } from '@mui/material'
import './styles.scss'

function Counter({
  data, inventory, handleIncrement, handleDecrement,
}) {
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
      <ButtonGroup className="product-counter" size="small">
        <Button className="counter-button" onClick={handleIncrease}>
          <AddIcon />
        </Button>
        <Typography className="counter-text" variant="p">
          {count === inventory ? `حداکثر${count}` : count}
        </Typography>
        <Button className="counter-button" onClick={handleDecrease}>
          <RemoveIcon />
        </Button>
      </ButtonGroup>
    </div>
  )
}

export default Counter
