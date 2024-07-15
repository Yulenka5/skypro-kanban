import * as S from "./Header.Styles.js";
import PopUser from "../PopUser/PopUser";
import { useState } from "react";
import { Link } from "react-router-dom";


function Header({ user }) {
  const [isOpen, setIsOpen] = useState(false);

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
            <Link to={"/newcard"}>
              <S.HeaderBtnMainNew>
                <a href="#popNewCard">Создать новую задачу</a>
              </S.HeaderBtnMainNew>
            </Link>
            <S.HeaderUser onClick={toggleDropdown}>{user.name}</S.HeaderUser>
            {isOpen && <PopUser />}
          </S.HeaderNav>
        </S.HeaderBlock>
      </S.Container>
    </S.Header>
  );
}

export default Header;
