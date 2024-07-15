import * as S from "./PopNewCard.Styles.js";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../context/userContext";
import { addNewCard } from "../../api";
import { CardsContext } from "../../context/cardsContext";
import {DayPicker} from "react-day-picker";


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
    if (!inputValue.description) {
      return setError("Введите описание задачи");
    }
    const title = inputValue.title || "Новая задача";
    const topic = inputValue.topic || "Research";

    const newTask = {
      ...inputValue,
      topic,
      title,
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
              <S.PopNewCardForm
                action="#"
              >
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
                  ></S.FormNewArea>
                </S.FormNewBlock>
              </S.PopNewCardForm>
              <S.Calendar>
                <S.CalendarTtl>Даты</S.CalendarTtl>
                <DayPicker weekStartsOn={1} mode="single" selected={date} onSelect={setDate}/>
                </S.Calendar>
            </S.PopNewCardWrap>
            <S.PopCardCategories>
              <S.PopCardCategoriesSub>Категория</S.PopCardCategoriesSub>
              <div className="categories__themes">
                <div className="categories__theme _orange _active-category">
                  <p className="_orange">Web Design</p>
                </div>
                <div className="categories__theme _green">
                  <p className="_green">Research</p>
                </div>
                <div className="categories__theme _purple">
                  <p className="_purple">Copywriting</p>
                </div>
              </div>
            </S.PopCardCategories>
            {error && error}
            <S.FormNewCreateButton
              onClick={onAddNewCard}
            >
              Создать задачу
            </S.FormNewCreateButton>
          </S.PopNewCardContent>
        </S.PopNewCardBlock>
      </S.PopNewCardContainer>
    </S.PopNewCard>
  );
}

export default PopNewCard;
