import * as S from "./PopNewCard.Styles.js";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../../context/userContext.jsx";
import { addNewCard } from "../../../api.js";
import { CardsContext } from "../../../context/cardsContext.jsx";
import {Calendar} from "../../Calendar/Calendar.jsx";




function PopNewCard() {
  const [date, setDate] = useState(new Date)
  const [error, setError] = useState("");
  const { user } = useContext(UserContext);
  const { setCards } = useContext(CardsContext);
  const navigate = useNavigate();

  const [inputValue, setInputValue] = useState({
    topic: "",
    title: "",
    description: "",
    status: "Без статуса",
  });

  const onChangeInput = (e) => {
    const { value, name } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };

  const onAddNewCard = () => {
    setError("");

    if (!inputValue.title)
      return setError("Введите заголовок задачи")

    if (!inputValue.description)
      return setError("Введите описание задачи")

    if (!inputValue.topic)
      return setError("Выберите категорию задачи")

    if (!date)
      return setError("Выберите дату в календаре")

    const newTask = {
      ...inputValue,
      date,
    };

    addNewCard({ token: user.token, newTask })
      .then((res) => {
        setCards(res);
        navigate("/");
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const newDateFormat = (date) => {
    if (!date)
      return (<>Выберите срок исполнения: ___</>)

    const FormatDate = date.toLocaleDateString("ru-US")

    return (<>Выбранная дата: {FormatDate}</>)
  }

  return (
    <S.PopNewCard>
      <S.PopNewCardContainer>
        <S.PopNewCardBlock>
          <S.PopNewCardContent>
            <S.PopNewCardText>Создание задачи</S.PopNewCardText>
            <Link to={"/"}>
              &#10006;
            </Link>
            <S.PopNewCardWrap>
              <S.PopNewCardForm action="#">
                <S.FormNewBlock>
                  <S.PopNewCardLabel htmlFor="formTitle">
                    Название задачи
                  </S.PopNewCardLabel>
                  <S.FormNewInput
                    onChange={onChangeInput}
                    type="text"
                    name="title"
                    placeholder="Введите название задачи..."
                    autoFocus
                  />
                </S.FormNewBlock>
                <S.FormNewBlock>
                  <S.PopNewCardLabel htmlFor="textArea" >
                    Описание задачи
                  </S.PopNewCardLabel>
                  <S.FormNewArea
                    onChange={onChangeInput}
                    name="description"
                    placeholder="Введите описание задачи..."
                  />
                </S.FormNewBlock>
              </S.PopNewCardForm>
              <S.Calendar>
                <S.CalendarTtl>Даты</S.CalendarTtl>
                <Calendar date={date} setDate={setDate} footer={newDateFormat(date)} />
                </S.Calendar>
            </S.PopNewCardWrap>
            <S.PopCardCategories>
              <S.PopCardCategoriesSub>Категория</S.PopCardCategoriesSub>
              <S.CategoriesThemes>
                <S.WrapperRadio $isActive={inputValue.topic === "Web Design"} $themeColor={"_orange"}>
                  <S.RadioLabel htmlFor="theme1">Web Design</S.RadioLabel>
                  <S.RadioInput onChange={onChangeInput} type="radio" id="theme1" name="topic" value="Web Design" />
                </S.WrapperRadio>
                <S.WrapperRadio $isActive={inputValue.topic === "Research"} $themeColor={"_green"}>
                  <S.RadioLabel htmlFor="theme2">Research</S.RadioLabel>
                  <S.RadioInput onChange={onChangeInput} type="radio" id="theme2" name="topic" value="Research" />
                  </S.WrapperRadio>
                <S.WrapperRadio $isActive={inputValue.topic === "Copywriting"} $themeColor={"_purple"}>
                  <S.RadioLabel htmlFor="theme3">Copywriting</S.RadioLabel>
                  <S.RadioInput onChange={onChangeInput} type="radio" id="theme3" name="topic" value="Copywriting" />
                </S.WrapperRadio>
              </S.CategoriesThemes>
            </S.PopCardCategories>
            {error}
            <S.FormNewCreateButton onClick={onAddNewCard}>
              Создать задачу
            </S.FormNewCreateButton>
          </S.PopNewCardContent>
        </S.PopNewCardBlock>
      </S.PopNewCardContainer>
    </S.PopNewCard>
  );
}

export default PopNewCard;
