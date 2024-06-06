import { Link } from "react-router-dom";
import * as S from "./registr.styles";
function Registr() {
  return (
    <S.Wrapper>
      <S.ContainerSignup>
        <S.Modal>
          <S.ModalBlock>
            <S.ModalTtl>
              <h2>Регистрация</h2>
            </S.ModalTtl>
            <S.ModalFormLogin>
              <S.ModalInput type="text" name="first-name" placeholder="Имя" />
              <S.ModalInput type="text" name="login" placeholder="Эл. почта" />
              <S.ModalInput
                type="password"
                name="password"
                placeholder="Пароль"
              />
              <S.ModalBtn>
                <Link to="/">Зарегистрироваться</Link>{" "}
              </S.ModalBtn>
              <S.ModalFormGroup>
                <p>
                  Уже есть аккаунт? <Link to="/login">Войдите здесь</Link>
                </p>
              </S.ModalFormGroup>
            </S.ModalFormLogin>
          </S.ModalBlock>
        </S.Modal>
      </S.ContainerSignup>
    </S.Wrapper>
  );
}

export default Registr;
