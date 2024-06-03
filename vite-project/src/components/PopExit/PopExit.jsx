import * as S from "./PopExit.js";

function PopExit() {
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
                <a href="modal/signin.html">Да, выйти</a>{" "}
              </S.PopExitYes>
              <S.PopExitNo>
                <a href="main.html">Нет, остаться</a>{" "}
              </S.PopExitNo>
            </S.PopExitFormGroup>
          </S.PopExitForm>
        </S.PopExitBlock>
      </S.PopExitContainer>
    </S.PopExit>
  );
}

export default PopExit;
