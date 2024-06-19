import * as S from "./Column.Styles.js";
import Card from "../Card/Card";

function Column({ title, cardList }) {
  return (
    <>
      <S.MainColumn>
        <S.ColumnTitle>
          <S.ColumnText>{title}</S.ColumnText>
        </S.ColumnTitle>
        <S.Cards>
          {cardList.map(({ _id, topic, title, date }) => {
            return (
              <Card key={_id} id={_id} topic={topic} title={title} date={date} />
            );
          })}
        </S.Cards>
      </S.MainColumn>
    </>
  );
}
export default Column;
