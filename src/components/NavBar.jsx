import { AppBar, Toolbar, Typography, Button, Container } from '@mui/material';
import Logo from '../assets/Logo'
import CartWidget from './CartWidget/CartWidget';
import { Link, NavLink } from 'react-router-dom';

  

const NavBar = () => {
    return (
        <AppBar position="sticky" sx={{ backgroundColor: '#f941a2' }}>
          <Container maxWidth="lg">
            <Toolbar disableGutters>
    
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                <Link to='/'>
                  <Logo/>
                </Link>
              </Typography>
    
              <div className="Categories">
                <NavLink to={`/category/celular`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'} />
                <NavLink to={`/category/tablet`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'} />
                <NavLink to={`/category/notebook`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'} />
              </div>
              
              <CartWidget/>
    
            </Toolbar>
          </Container>
        </AppBar>
    )
}

export default NavBar