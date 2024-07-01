import { Link } from "react-router-dom";
import * as S from "./registr.styles";
import { signUp } from "../../api";
import { useContext, useState } from "react";
import { UserContext } from "../../context/userContext";

function Registr() {
  const [formData, setFormData] = useState({
    login: "",
    name: "",
    password: "",
  });
  const [error, setError] = useState(null);
  const { loginUser } = useContext(UserContext);

  function onChange(event) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });

    if (error) {
      setError(null);
    }
  }

  function submit(event) {
    event.preventDefault();
    if (
      !formData.login.trim() ||
      !formData.password.trim() ||
      !formData.name.trim()
    ) {
      return setError("введите данные");
    }

    signUp(formData)
      .then((res) => {
        setError(null);
        loginUser(res);
      })
      .catch((error) => {
        setError(error.message);
      });
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
              <S.ModalInput
                type="text"
                name="name"
                placeholder="Имя"
                value={formData.name}
                onChange={onChange}
              />
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
              <S.ModalBtn onClick={submit}>Зарегистрироваться</S.ModalBtn>
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
