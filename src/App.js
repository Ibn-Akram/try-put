
import React,{ useState } from "react";
import AddUser from "./components/User/AddUser";
import UserList from "./components/User/UserList";
function App() {
  const [usersList,setUsersList]=useState(['']);
  const addUserHandler=(uName,uAge)=>{
    setUsersList((prevUsersList)=>{
      return[...prevUsersList,{name:uName,age:uAge,id:Math.random().toString()}]
    })
  }
  return (
    <div className="App">
     <h2>
          <AddUser onAddUser={addUserHandler}/>
          <UserList users={usersList}/>
     </h2>
    </div>
  );
}

export default App;
