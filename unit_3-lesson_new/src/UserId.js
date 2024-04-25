import { useParams, NavLink } from "react-router-dom";

function UserId() {
    let {userName} = useParams();
    return (
        <div>
            <NavLink to="/users">Назад</NavLink>
            <h1>User:{userName}</h1>
        </div>
    );
}

export default UserId;