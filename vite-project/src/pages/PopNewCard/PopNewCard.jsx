import * as S from "./PopNewCard.Styles.js";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../context/userContext";
import { addNewCard } from "../../api";
import { CardsContext } from "../../context/cardsContext";
import { ru } from "date-fns/locale";



function PopNewCard() {
  const [date, setDate] = useState(new Date)
  const [topic, setTopic] = useState('')
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

    const newTask = {
      ...inputValue,
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

  const newDateFormat = (date) => {
    const FormatDate = date.toLocaleDateString("ru-US")
    return <>Выберите срок исполнения {" "} {FormatDate}</>
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
                <S.CalendarBlock locale={ru} weekStartsOn={1} mode="single" selected={date} onSelect={setDate} footer={newDateFormat(date)}/>
                </S.Calendar>
            </S.PopNewCardWrap>
            <S.PopCardCategories>
              <S.PopCardCategoriesSub>Категория</S.PopCardCategoriesSub>
              <S.CategoriesThemes>
                <S.WrapperRadio $isActive={topic === 'Web Design'} className=" _orange ">
                  <S.RadioLabel  htmlFor="theme1">Web Design</S.RadioLabel>
                  <S.RadioInput onChange={(e)=>setTopic(e.target.value)} className="_orange" type={"radio"} id="theme1" name="theme" value='Web Design'/>
                </S.WrapperRadio>
                <S.WrapperRadio $isActive={topic === 'Research'} className=" _green">
                  <S.RadioLabel  htmlFor="theme2">Research</S.RadioLabel>
                  <S.RadioInput onChange={(e)=>setTopic(e.target.value)} className="_green" type={"radio"} id="theme2" name="theme" value='Research'/>
                  </S.WrapperRadio>
                <S.WrapperRadio $isActive={topic === 'Copywriting'} className="_purple">
                  <S.RadioLabel  htmlFor="theme3">Copywriting</S.RadioLabel>
                  <S.RadioInput onChange={(e)=>setTopic(e.target.value)} className="_purple" type={"radio"} id="theme3" name="theme" value='Copywriting'/>
                </S.WrapperRadio>
              </S.CategoriesThemes>
            </S.PopCardCategories>
            {error}
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
