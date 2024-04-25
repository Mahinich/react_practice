import {useLocation, NavLink} from 'react-router-dom';


function Users() {
  let url = useLocation();
  return (
    <>
      <h1>Users</h1>
      <ul>
        <li><a href={`${url.pathname}/12`}>Ivanon</a></li>
        <li><a href={`${url.pathname}/34`}>Petrov</a></li>
      </ul>
    </>
  );
}

export default Users;
