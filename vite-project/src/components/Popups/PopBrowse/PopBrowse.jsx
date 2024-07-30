import { useNavigate, useParams} from "react-router-dom";
import * as S from "./PopBrowse.Styles.js";
import {Calendar} from "../../Calendar/Calendar.jsx";
import {useContext, useEffect, useState} from "react";
import {deleteCard, editCard} from "../../../api.js";
import {UserContext} from "../../../context/userContext.jsx";
import {CardsContext} from "../../../context/cardsContext.jsx";
import {getTopicColor} from "../../../data/topic.js";


function PopBrowse() {
  const {id} = useParams()
  const navigate = useNavigate()
  const [isBrowsing, setIsBrowsing] = useState(true)
  const { user } = useContext(UserContext)
  const { cards, setCards } = useContext(CardsContext)
  const [error, setError] = useState("")

  const [inputValue, __setInputValue] = useState({
    topic: "",
    title: "",
    description: "",
    status: "Без статуса",
    date: new Date(),
  })

  function setInputValue(value) {
    console.log(value)
    __setInputValue(value)
  }

  const onChangeInput = (e) => {
    const { value, name } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  }

  const setDate = (date) => {
    if (isBrowsing)
      return

    setInputValue({ ...inputValue, date });
  }

  useEffect(() => {
    const task = cards.filter((card) => card._id === id)[0]
    console.log(task.date)
    setInputValue({...task, date: new Date(task.date)})
    // setInputValue({
    //   topic: task.topic,
    //   title: task.title,
    //   description: task.description,
    //   status: task.status,
    //   date: new Date(task.date),
    // })
  }, [])

  function startEditingTask() {
    setIsBrowsing(false)
  }

  function saveEditedTask() {
    editCard({ token: user.token, task: inputValue })
      .then((res) => {
        setCards(res)
        navigate("/")
      })
      .catch((error) => {
        setError(error.message)
      })
  }

  function cancelEditingTask() {
    setIsBrowsing(true)
  }

  function deleteTask() {
    deleteCard({ token: user.token, id })
      .then((res) => {
        setCards(res);
        navigate("/");
      })
      .catch((error) => {
        setError(error.message);
      })
  }

  function closeTask() {
    navigate("/")
  }

  const newDateFormat = (date) => {
    if (!date)
      return (<>Выберите срок исполнения: ___</>)

    const FormatDate = date.toLocaleDateString("ru-US")

    return (<>Выбранная дата: {FormatDate}</>)
  }

  return (
    <S.PopBrowse>
      <S.PopBrowseConteiner>
        <S.PopBrowseBlock>
          <S.PopBrowseContent>
            <S.PopBrowseTopBlock>
              <S.PopBrowseTtl>{inputValue.title}</S.PopBrowseTtl>
              {
                isBrowsing
                  && (
                    <S.CategoriesTheme $themeColor={getTopicColor(inputValue.topic)}>
                      <p>{inputValue.topic}</p>
                    </S.CategoriesTheme>
                  )
              }
            </S.PopBrowseTopBlock>
            <S.Status>
              <S.StatusP>Статус</S.StatusP>
              <S.StatusThemes>
                {
                  isBrowsing
                    ? (
                      <S.StatusTheme>
                        <label>{inputValue.status}</label>
                      </S.StatusTheme>
                    )
                    : (
                      <>
                        <S.StatusTheme $isActive={inputValue.status === "Без статуса"}>
                          <label htmlFor="status1">Без статуса</label>
                          <S.RadioInput onChange={onChangeInput} type="radio" id="status1" name="status" value="Без статуса" />
                        </S.StatusTheme>
                        <S.StatusTheme $isActive={inputValue.status === "Нужно сделать"}>
                          <label htmlFor="status2">Нужно сделать</label>
                          <S.RadioInput onChange={onChangeInput} type="radio" id="status2" name="status" value="Нужно сделать" />
                        </S.StatusTheme>
                        <S.StatusTheme $isActive={inputValue.status === "В работе"}>
                          <label htmlFor="status3">В работе</label>
                          <S.RadioInput onChange={onChangeInput} type="radio" id="status3" name="status" value="В работе" />
                        </S.StatusTheme>
                        <S.StatusTheme $isActive={inputValue.status === "Тестирование"}>
                          <label htmlFor="status4">Тестирование</label>
                          <S.RadioInput onChange={onChangeInput} type="radio" id="status4" name="status" value="Тестирование" />
                        </S.StatusTheme>
                        <S.StatusTheme $isActive={inputValue.status === "Готово"}>
                          <label htmlFor="status5">Готово</label>
                          <S.RadioInput onChange={onChangeInput} type="radio" id="status5" name="status" value="Готово" />
                        </S.StatusTheme>
                      </>
                    )
                }
              </S.StatusThemes>
            </S.Status>
            <S.PopBrowseWrap>
              <S.PopBrowseForm
                className="form-browse"
                action="#"
              >
                <S.FormBrowseBlock>
                  <label htmlFor="textArea01" className="subttl">
                    Описание задачи
                  </label>
                  <S.FormBrowseArea
                    name="description"
                    id="textArea01"
                    $readonly={isBrowsing}
                    placeholder="Введите описание задачи..."
                    value={inputValue.description}
                    onChange={onChangeInput}
                  />
                </S.FormBrowseBlock>
              </S.PopBrowseForm>
              <S.Calendar>
                <S.CalendarTtl>Даты</S.CalendarTtl>
                <Calendar date={inputValue.date} setDate={setDate} footer={newDateFormat(inputValue.date)} />
              </S.Calendar>
            </S.PopBrowseWrap>

            {
              isBrowsing || (
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
              )
            }
            {error}

            <S.PopBrowseBtnBrowse>
              <S.BtnGroup>
                {
                  isBrowsing
                    ? (
                      <S.BtnBor onClick={startEditingTask}>
                        Редактировать задачу
                      </S.BtnBor>
                    )
                    : (
                      <>
                        <S.BtnBg onClick={saveEditedTask}>
                          Сохранить
                        </S.BtnBg>
                        <S.BtnBor onClick={cancelEditingTask}>
                          Отменить
                        </S.BtnBor>
                      </>
                    )
                }
                <S.BtnBor onClick={deleteTask}>
                  Удалить задачу
                </S.BtnBor>
              </S.BtnGroup>
              <S.BtnBg onClick={closeTask}>
                Закрыть
              </S.BtnBg>
            </S.PopBrowseBtnBrowse>
          </S.PopBrowseContent>
        </S.PopBrowseBlock>
      </S.PopBrowseConteiner>
    </S.PopBrowse>
  );
}

export default PopBrowse;
