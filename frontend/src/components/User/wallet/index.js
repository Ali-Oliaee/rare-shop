import { useState } from 'react'
import Popover from '@mui/material/Popover'
import Button from '@mui/material/Button'
import { Link as LinkIcon, LinkOff } from '@mui/icons-material'
import { TextField, Tooltip } from '@mui/material'
import './style.scss'
import { CircularProgress } from '@material-ui/core'

const ethers = require('ethers')

export default function Wallet() {
  const [anchorEl, setAnchorEl] = useState(null)
  const [account, setAccount] = useState(null)
  const handleClose = () => setAnchorEl(null)

  const connectWallet = (event) => {
    setAnchorEl(event.currentTarget)
    if (window.ethereum) {
      window.ethereum.request({ method: 'eth_requestAccounts' })
        .then((address) => {
          window.ethereum
            .request({
              method: 'eth_getBalance',
              params: [address[0], 'latest'],
            // eslint-disable-next-line max-len
            }).then((balance) => setAccount({ address, balance: ethers.utils.formatEther(balance) }))
        })
    } else console.error('Please install MetaMask to use this dapp')
  }

  const disconnectWallet = () => {
    setAccount(null)
    handleClose()
  }

  return (
    <div>
      <Tooltip title="اتصال حساب" className="header-icon">
        <Button onClick={connectWallet}>
          {account ? <LinkIcon /> : <LinkOff /> }
        </Button>
      </Tooltip>
      <Popover
        open={!!anchorEl}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <div className="wallet-popover">
          {account ? (
            <>
              <TextField label="Address" disabled variant="standard" value={account?.address} />
              <TextField label="Balance" disabled variant="standard" value={`${account?.balance} ETH`} />
              <Button onClick={disconnectWallet}>قطع اتصال</Button>
            </>
          ) : <CircularProgress />}
        </div>
      </Popover>
    </div>
  )
}
