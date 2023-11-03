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
        if (props.UserName && Value !== "" && TrimValue !== "") {
            const massages = getMassages(props.MovieId)
            const massage = JSON.parse(JSON.stringify(Massage));
            massage[props.MovieId] = [...massages, `${props.UserName}: ${Value}`]
            SetMassage(massage)
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
                <input
                    type="text"
                    className="form-control"
                    value={Value}
                    onChange={onChangeComment}
                />
            </div>
            <div className="form-group">
                <button className="btn btn-primary btn-block" onClick={HandleButton}>Отправить</button>
            </div>
        </div>
    )
}

export default Chat;