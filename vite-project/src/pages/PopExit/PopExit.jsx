import { Link, useNavigate } from "react-router-dom";
import * as S from "./PopExit.js";

function PopExit({setAuth}) {

  const navigate = useNavigate()

  function handleSubmit () {
    setAuth(false)
    navigate ("/login")
  }
  return (
    <S.PopExit>
      <S.PopExitContainer>
        <S.PopExitBlock>
          <S.PopExitTtl>
            <S.PopExitH>Выйти из аккаунта?</S.PopExitH>
          </S.PopExitTtl>
          <S.PopExitForm>
            <S.PopExitFormGroup>
              <S.PopExitYes>
                <a onClick={handleSubmit}>Да, выйти</a>{" "}
              </S.PopExitYes>
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
