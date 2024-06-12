import { Link } from "react-router-dom";
import * as S from "./NotFound.Styles"

function NotFound () {
    return (
        <S.LoaderContent>
            <S.LoaderText>ошибка! такой страницы не существует</S.LoaderText>
            <Link to="/">вернуться на главную</Link>
        </S.LoaderContent>
    )
}

export default NotFound;