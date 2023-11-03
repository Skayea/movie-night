import { useState } from "react";
import { useLocalStorage } from "../hook/useLocalStorage";

const Chat = (props) => {
    const [Massage, SetMassage] = useLocalStorage('CHAT', {});
    const [Value, SetValue] = useState("");
    
    const getMassages = (movieId) => {
        const massages = Massage[movieId]
        if (massages !== undefined) {
            return massages
        }
        return []
    }

    const HandleButton = () => {
        const TrimValue = Value.trim();
        //Если пользователь вошел в аккаунт =>
        if (props.UserName && Value !== "" && TrimValue !== "") {
            //Добавляем новое сообщение из input и имя пользователя и =>
            const massage = getMassages(props.MovieId)
            Massage[props.MovieId] = [...massage, `${props.UserName}: ${Value}`]
            SetMassage(Massage)
            console.log('HandleButton')
        console.log(Massage)
            //Очищаем поле ввода
            SetValue("")
        }
    };

    const onChangeComment = (e) => {
        SetValue(e.target.value);
      };

    return (
        <div>
            <div className="ChatStyling">
                <div>Оставить отзыв</div>
                {getMassages(props.MovieId).map((el, i) => {
                    return (
                        <div key={i}>
                            <span style={{ color: 'blueviolet' }}>{el}</span>
                        </div>
                    );
                })}
            </div>
            <div className="form-group">
                <label></label>
                <input
                    type="text"
                    className="form-control"
                    value={Value}
                    onChange={onChangeComment}
                />
            </div>
            <div className="form-group">
                <button className="btn btn-primary btn-block" onClick={HandleButton}>Send</button>
            </div>
        </div>
    )
}

export default Chat;