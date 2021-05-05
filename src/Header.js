import {Navbar,Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';
function Header(){
return(
    <div>
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">FoodX</Navbar.Brand>
            <Nav className="mr-auto">
                <Link class="nav-link active" to="/home">Home</Link>
                <Link class="nav-link active" to="/features">Features</Link>
                <Link class="nav-link active" to="/pricing">Pricing</Link>
            </Nav>
            <Nav>
                <Link class="nav-link active" to="/login">Login</Link>
                <Link class="nav-link active" to="/register">Register</Link>
            </Nav>
            
        </Navbar>
    </div>
);
}

export default Header;