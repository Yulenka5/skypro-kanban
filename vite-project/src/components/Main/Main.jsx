import * as S from "./Main.Styles.js";
import Column from "../Column/Column";
import { statusList } from "../../data/status";

function Main({ cardList }) {
  return (
    <S.Main>
      <S.Container>
        <S.MainBlock>
          <S.MainContent>
            {statusList.map((status) => (
              <Column
                key={status}
                title={status}
                cardList={cardList.filter((card) => card.status === status)}
              />
            ))}
          </S.MainContent>
        </S.MainBlock>
      </S.Container>
    </S.Main>
  );
}

export default Main;
