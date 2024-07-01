import { Link } from "react-router-dom";
import * as S from "./login.Styles";
import { useState } from "react";
import { signIn } from "../../api";
import { useContext } from "react";
import { UserContext } from "../../context/userContext";


function Login() {
  const [formData, setFormData] = useState({ login: "", password: "" });
  const [error, setError] = useState(null);
  const {loginUser} = useContext(UserContext)

  function onChange(event) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });

    if (error) {
      setError(null)
    }
  }

  function submit(event) {
    event.preventDefault();
    
    if (!formData.login.trim() || !formData.password.trim()) {
      return setError("введите учетные данные");
    }
    signIn(formData)
      .then((res) => {
        setError(null);
      loginUser(res)
      })
      .catch((error) => {
        setError(error.message);
      });
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
              <S.ModalInput
                type="text"
                name="login"
                placeholder="Эл. почта"
                value={formData.login}
                onChange={onChange}
              />
              <S.ModalInput
                type="password"
                name="password"
                placeholder="Пароль"
                value={formData.password}
                onChange={onChange}
              />
              {error && <p>{error}</p>}
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
