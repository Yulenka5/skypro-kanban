import * as S from "./PopUser.Styles.js";

function PopUser() {
  return (
    <S.HeaderPopUserSet>
      <a href="">x</a>
      <S.PopUserSetName>Ivan Ivanov</S.PopUserSetName>
      <S.PopUserSetMail>ivan.ivanov@gmail.com</S.PopUserSetMail>
      <S.PopUserSetTheme>
        <S.PopUserSetThemeP>Темная тема</S.PopUserSetThemeP>
        <input type="checkbox" className="checkbox" name="checkbox" />
      </S.PopUserSetTheme>
      <S.PopUserButton>
        <a href="#popExit">Выйти</a>
      </S.PopUserButton>
    </S.HeaderPopUserSet>
  );
}

export default PopUser;
