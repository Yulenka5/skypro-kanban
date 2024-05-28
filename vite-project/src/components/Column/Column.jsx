import "./Column.Styles.css";
import Card from "../Card/Card";

function Column({ title, cardList }) {
  return (
    <>
      <div className="main__column column">
        <div className="column__title">
          <p>{title}</p>
        </div>
        <div className="cards">
          {cardList.map(({ id, topic, title, date }) => {
            return <Card key={id} id={id} topic={topic} title={title} date={date} />;
          })}
        </div>
      </div>
    </>
  );
}
export default Column;
