import { Link } from "react-router-dom";
import * as S from "./PopUser.Styles.js";

function PopUser( user ) {
  return (
    <S.HeaderPopUserSet>
      <a href="">x</a>
      <S.PopUserSetName>{user.name}</S.PopUserSetName>
      <S.PopUserSetMail>{user.login}</S.PopUserSetMail>
      <S.PopUserSetTheme>
        <p>Темная тема</p>
        <input type="checkbox" name="checkbox" />
      </S.PopUserSetTheme>
      <S.PopUserButton>
        <Link to="/exit">Выйти</Link>
      </S.PopUserButton>
    </S.HeaderPopUserSet>
  );
}

export default PopUser;
