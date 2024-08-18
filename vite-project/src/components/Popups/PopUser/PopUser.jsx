import { useNavigate } from "react-router-dom";
import * as S from "./PopUser.Styles.js";

function PopUser({ userContext }) {
  const navigate = useNavigate()

  function handleShowQuestionAboutExit() {
    navigate("/exit")
  }

  return (
    <S.HeaderPopUserSet>
      <S.PopUserSetName>{userContext.name}</S.PopUserSetName>
      <S.PopUserSetMail>{userContext.login}</S.PopUserSetMail>
      <S.PopUserButton onClick={handleShowQuestionAboutExit}>Выйти</S.PopUserButton>
    </S.HeaderPopUserSet>
  );
}

export default PopUser;
