import * as S from "./Header.Styles.js";
import PopUser from "../PopUser/PopUser";
import { useState } from "react";

function Header({ addCard }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <S.Header>
      <S.Container>
        <S.HeaderBlock>
          <S.HeaderLogo>
            <a href="" target="_self">
              <img src="/logo.png" alt="logo" />
            </a>
          </S.HeaderLogo>
          {/* <S.HeaderLogo>
            <a href="" target="_self">
              <img src="/logo_dark.png" alt="logo" />
            </a>
          </S.HeaderLogo> */}
          <S.HeaderNav>
            <S.HeaderBtnMainNew onClick={addCard}>
              Создать новую задачу
            </S.HeaderBtnMainNew>
            <S.HeaderUser onClick={toggleDropdown}>Ivan Ivanov</S.HeaderUser>
            {isOpen && <PopUser />}
          </S.HeaderNav>
        </S.HeaderBlock>
      </S.Container>
    </S.Header>
  );
}

export default Header;
