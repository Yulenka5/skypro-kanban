import { Link, useNavigate } from "react-router-dom";
import * as S from "./registr.styles";

function Registr({setAuth}) {

  const navigate = useNavigate();

  function submit() {
    setAuth(true);
    navigate("/");
  }

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
              <S.ModalBtn onClick={submit}>
                Зарегистрироваться
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
