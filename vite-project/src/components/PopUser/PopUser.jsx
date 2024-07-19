import { useNavigate } from "react-router-dom";
import * as S from "./PopUser.Styles.js";

function PopUser({ user }) {
  const navigate = useNavigate()

  function handleShowQuestionAboutExit() {
    navigate("/exit")
  }

  return (
    <S.HeaderPopUserSet>
      <S.PopUserSetName>{user.name}</S.PopUserSetName>
      <S.PopUserSetMail>{user.login}</S.PopUserSetMail>
      <S.PopUserButton onClick={handleShowQuestionAboutExit}>Выйти</S.PopUserButton>
    </S.HeaderPopUserSet>
  );
}

export default PopUser;
