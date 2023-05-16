import { useDispatch, useSelector } from "react-redux";
import { faker } from "@faker-js/faker";
import { addUser, removeAllUser, removeUser } from "./store/slices/userSlices";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  const name = useSelector((state) => state.users);

  const handleAddUser = () => {
    dispatch(addUser(faker.name.fullName()));
  };

  const handleClearAllUser = () => {
    dispatch(removeAllUser());
  };

  const handleDeleteUser = (id) => {
    dispatch(removeUser(id));
  };


  return (
    <div className="App">
      <h1>Redux Toolkit Learning</h1>
      <button className="btn" onClick={handleAddUser}>
        Add user
      </button>
      <div className="users">
        {name?.map((user, id) => {
          return (
            <div key={id} className="user-row">
              <span>{user}</span>
              <button className="btn" onClick={() => handleDeleteUser(id)}>
                Delete user
              </button>
            </div>
          );
        })}
      </div>
      {name.length !== 0 && (
        <button className="btn" onClick={handleClearAllUser}>
          Remove All Users
        </button>
      )}
    </div>
  );
}

export default App;
