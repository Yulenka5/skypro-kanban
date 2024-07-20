import * as S from "./Header.Styles.js";
import PopUser from "../Popups/PopUser/PopUser";
import {useContext, useState} from "react";
import { Link } from "react-router-dom";
import {UserContext} from "../../context/userContext.jsx";


function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const userContext = useContext(UserContext)

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <S.Header>
      <S.Container>
        <S.HeaderBlock>
          <S.HeaderLogo>
            <Link to="/">
              <img src="/logo.png" alt="logo" />
            </Link>
          </S.HeaderLogo>
          {/* <S.HeaderLogo>
            <a href="" target="_self">
              <img src="/logo_dark.png" alt="logo" />
            </a>
          </S.HeaderLogo> */}
          <S.HeaderNav>
            <S.HeaderBtnMainNew>
              <Link to={"/newcard"}>Создать новую задачу</Link>
            </S.HeaderBtnMainNew>
            <S.HeaderUser onClick={toggleDropdown}>{userContext.user.name}</S.HeaderUser>
            {isOpen && <PopUser user={userContext.user} />}
          </S.HeaderNav>
        </S.HeaderBlock>
      </S.Container>
    </S.Header>
  );
}

export default Header;
