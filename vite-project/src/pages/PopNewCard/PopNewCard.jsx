import "./PopNewCard.Styles.css";
import Calendar from "../../components/Calendar/Calendar";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../context/userContext";
import { addNewCard } from "../../api";
import { CardsContext } from "../../context/cardsContext";

function PopNewCard() {
  const [error, setError] = useState("");
  const { user } = useContext(UserContext);
  const { setCards } = useContext(CardsContext);
  const navigate = useNavigate();

  const [inputValue, setInputValue] = useState({
    date: new Date(),
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
    };

    addNewCard({ token: user.token, newTask })
      .then((res) => {
        setCards(res.tasks);
        navigate("/");
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <div className="pop-new-card" id="popNewCard">
      <div className="pop-new-card__container">
        <div className="pop-new-card__block">
          <div className="pop-new-card__content">
            <h3 className="pop-new-card__ttl">Создание задачи</h3>
            <Link to={"/"} className="pop-new-card__close">
              &#10006;
            </Link>
            <div className="pop-new-card__wrap">
              <form
                className="pop-new-card__form form-new"
                id="formNewCard"
                action="#"
              >
                <div className="form-new__block">
                  <label htmlFor="formTitle" className="subttl">
                    Название задачи
                  </label>
                  <input
                    onChange={onChangeInput}
                    className="form-new__input"
                    type="text"
                    name="title"
                    id="formTitle"
                    placeholder="Введите название задачи..."
                    autoFocus
                  />
                </div>
                <div className="form-new__block">
                  <label htmlFor="textArea" className="subttl">
                    Описание задачи
                  </label>
                  <textarea
                    onChange={onChangeInput}
                    className="form-new__area"
                    name="description"
                    id="textArea"
                    placeholder="Введите описание задачи..."
                  ></textarea>
                </div>
              </form>
              <Calendar />
            </div>
            <div className="pop-new-card__categories categories">
              <p className="categories__p subttl">Категория</p>
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
            </div>
            {error && error}
            <button
              onClick={onAddNewCard}
              className="form-new__create _hover01"
              id="btnCreate"
            >
              Создать задачу
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PopNewCard;
