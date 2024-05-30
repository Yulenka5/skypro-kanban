import './Header.Styles.css'
import Logo from '../../../public/logo.png'
import LogoDark from '../../../public/logo_dark.png'
import PopUser from '../PopUser/PopUser';
import { useState } from 'react';
 

function Header({ addCard}) {

  const [isOpen, setIsOpen] = useState(false)

  const toggleDropdown = () => setIsOpen(!isOpen)

  return (
    <header className="header">
      <div className="container">
        <div className="header__block">
          <div className="header__logo _show _light">
            <a href="" target="_self">
              <img src={Logo} alt="logo" />
            </a>
          </div>
          <div className="header__logo _dark">
            <a href="" target="_self">
              <img src={LogoDark} alt="logo" />
            </a>
          </div>
          <nav className="header__nav">
            <button onClick={addCard} className="header__btn-main-new _hover01" id="btnMainNew">
              <a>Создать новую задачу</a>
            </button>
            <a onClick={toggleDropdown}  className="header__user _hover02">
              Ivan Ivanov
            </a>
            {isOpen && (<PopUser />)}
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
