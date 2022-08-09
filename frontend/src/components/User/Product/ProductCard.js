import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { Link } from 'react-router-dom'
import Button from '@mui/material/Button'
import './style.scss'

export default function ProductCard({ data }) {
  return (
    <Link to={`/product/${data.id}`} className="product-card">
      <Card
        sx={{
          width: 270,
          background: '#FAF59A',
          border: 'none',
          padding: 1,
          borderRadius: 4,
        }}
      >
        <CardMedia
          component="img"
          sx={{ width: 250, height: 250, borderRadius: 4 }}
          image={`http://127.0.0.1:8000${data.image}`}
          alt="عکس کالا"
        />
        <Box>
          <CardContent
            sx={{
              display: 'flex',
              flexDirection: 'column',
              fontSize: 20,
            }}
          >
            <Typography alignSelf="start" component="div" variant="span">
              {data.name}
            </Typography>
            <Typography
              mt={2}
              ml={2}
              fontSize={18}
              variant="subtitle1"
              component="div"
            >
              {`قیمت: ${data.price.toLocaleString('fa')} تومان`}
            </Typography>
          </CardContent>
          <Button>افزودن به سبد خرید</Button>
        </Box>
      </Card>
    </Link>
  )
}
