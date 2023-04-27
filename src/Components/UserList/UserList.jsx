import axios from "axios";
import { useEffect, useState } from "react";
import "../UserList/UserList.css";
import {AiFillDelete} from 'react-icons/ai'

const UserList = () => {
  const [userList, setUserList] = useState([{}]);

  useEffect(() => {
    getUserList();
  }, []);

  const getUserList = async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/todos"
    );
    
    setUserList(response.data);
  };

  const handleUserListDelete = (id) => {
    const filteredList=userList?.filter((item) => item.id !== id);
    setUserList(filteredList);
  };

  return (
    <div className="userlist">
        <h2>User List</h2>
        <div className="usercontainer">
          {userList?.map((item) => (
            <div key={item.id} className="user">
              <p><b>{item.id}. </b>{item.title}</p>
              <span>
                <AiFillDelete className="btndelete" onClick={() => {
                    handleUserListDelete(item.id);
                  }}/>
              </span>
            </div>
          ))}
        </div>
    </div>
  );
};

export default UserList;
