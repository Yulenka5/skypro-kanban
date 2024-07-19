import { useContext } from "react";
import { Link } from "react-router-dom";
import * as S from "./PopExit";
import { UserContext } from "../../context/userContext";


function PopExit() {
  const {logoutUser} = useContext(UserContext)
  return (
    <S.PopExit>
      <S.PopExitContainer>
        <S.PopExitBlock>
          <S.PopExitTtl>
            <S.PopExitH>Выйти из аккаунта?</S.PopExitH>
          </S.PopExitTtl>
          <S.PopExitForm>
            <S.PopExitFormGroup>
              <S.PopExitYes onClick={logoutUser}>Да, выйти</S.PopExitYes>
              <S.PopExitNo>
                <Link to="/">Нет, остаться</Link>{" "}
              </S.PopExitNo>
            </S.PopExitFormGroup>
          </S.PopExitForm>
        </S.PopExitBlock>
      </S.PopExitContainer>
    </S.PopExit>
  );
}

export default PopExit;
