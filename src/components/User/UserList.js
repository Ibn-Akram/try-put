import React from "react";
import Card from "../UI/Card";
import classes from './UserList.module.css'
const UserList = (props) =>{
return(
   <Card className={classes.users}>
        <ol>
        {props.users.map((user)=>{
             
            return(
              <li>  {user.name} {user.age}</li>
            )
            
               
            
        })}
    </ol>
   </Card>
)
}
export default UserList;