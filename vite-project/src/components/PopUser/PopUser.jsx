import * as S from "./PopUser.Styles.js";

function PopUser() {
  return (
    <S.HeaderPopUserSet>
      <a href="">x</a>
      <S.PopUserSetName>Ivan Ivanov</S.PopUserSetName>
      <S.PopUserSetMail>ivan.ivanov@gmail.com</S.PopUserSetMail>
      <S.PopUserSetTheme>
        <p>Темная тема</p>
        <input type="checkbox" name="checkbox" />
      </S.PopUserSetTheme>
      <S.PopUserButton>
        <a href="#popExit">Выйти</a>
      </S.PopUserButton>
    </S.HeaderPopUserSet>
  );
}

export default PopUser;
