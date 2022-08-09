import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { Link } from 'react-router-dom'
import './style.scss'

export default function ProductCard({ data }) {
  return (
    <Link to={`/product/${data.id}`} className="product-card">
      <Card className="card-body">
        <CardMedia
          component="img"
          sx={{ height: 250 }}
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
            <Typography alignSelf="start" component="div" variant="span" className="name">
              {data.name}
            </Typography>
            <Typography variant="subtitle1" component="div" className="price">
              {`${data.price.toLocaleString('fa')} تومان`}
            </Typography>
          </CardContent>
        </Box>
      </Card>
    </Link>
  )
}
