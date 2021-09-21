import React from 'react';
import img from './img/copy_67531238.png';

class Header extends React.Component {

    render() {
        return (
          <div>

              <img src={img} alt="" />
            
            <nav>
                <ul>
                    <li><a href="/login">Login</a></li>
                </ul>
            </nav>

          </div>
        )
    }
}

export default Header;