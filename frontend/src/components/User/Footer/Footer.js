import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import './style.scss';

function Footer() {
  return (
    <div className="footer">
      <Button component={Link} to="/about">
        درباره ما
      </Button>
      <Button component={Link} to="/contact">
        تماس با ما
      </Button>
      <Button component={Link} to="/stores">
        شعب
      </Button>
    </div>
  );
}

export default Footer;
