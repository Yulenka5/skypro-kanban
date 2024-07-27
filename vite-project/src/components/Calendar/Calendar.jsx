import * as S from "./Calendar.Styles.js"
import {ru} from "date-fns/locale";


export function Calendar({ date, setDate, footer }) {

  return <S.Calendar locale={ru} mode="single" weekStartsOn={1} selected={date} onSelect={setDate} footer={footer} />;
}
