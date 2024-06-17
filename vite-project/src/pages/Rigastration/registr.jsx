import { Link, useNavigate } from "react-router-dom";
import * as S from "./registr.styles";
import { signUp } from "../../api";
import { useState } from "react";

function Registr() {
  const [formData, setFormData] = useState({login: '', name: '', password: ''})

  const navigate = useNavigate();

  function onChange(event) {
    const {name, value} = event.target
    setFormData({...formData, [name]:value})
    }

  function submit(event) {
    event.preventDefault()
    if (!formData.login.trim() || !formData.password.trim() || !formData.name.trim() ) {
      alert('//')
      return 
    }

    signUp(formData)
    // setAuth(true);
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
              <S.ModalInput type="text" name="name" placeholder="Имя" value={formData.name} onChange={onChange}/>
              <S.ModalInput type="text" name="login" placeholder="Эл. почта" value={formData.login} onChange={onChange}/>
              <S.ModalInput
                type="password"
                name="password"
                placeholder="Пароль"
                value={formData.password} onChange={onChange}
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
