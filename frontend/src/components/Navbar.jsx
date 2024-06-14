import 'bootstrap/dist/css/bootstrap.css';
import logo from '../assets/Logo.png';

function Navbar(){

    return (
      <nav className={"navbar navbar-expand-lg navbar-dark bg-dark"}>
          <div className={"container m-1"}>
              <a className={"navbar-brand"}>
                  <img src={logo} height={"40"}/>
              </a>
          </div>
      </nav>
    );
}


export default Navbar;