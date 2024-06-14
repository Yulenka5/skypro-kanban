import { Link, useNavigate } from "react-router-dom";
import * as S from "./login.Styles";

function Login({ setAuth }) {
  const navigate = useNavigate();

  function submit() {
    setAuth(true);
    navigate("/");
  }

  return (
    <S.Wrapper>
      <S.ContainerSignin>
        <S.Modal>
          <S.ModalBlock>
            <S.ModalTtl>
              <h2>Вход</h2>
            </S.ModalTtl>
            <S.ModalFormLogin>
              <S.ModalInput type="text" name="login" placeholder="Эл. почта" />
              <S.ModalInput
                type="password"
                name="password"
                placeholder="Пароль"
              />
              <S.ModalBtnEnter onClick={submit}>Войти</S.ModalBtnEnter>
              <S.ModalFormGroup>
                <p>Нужно зарегистрироваться?</p>
                <Link to="/register">Регистрируйтесь здесь</Link>
              </S.ModalFormGroup>
            </S.ModalFormLogin>
          </S.ModalBlock>
        </S.Modal>
      </S.ContainerSignin>
    </S.Wrapper>
  );
}

export default Login;
