import axios from "axios"
import { useEffect, useState } from "react"

export default function UserList() {
    const [users,setUsers] = useState([])
    async function getUsers(){
        const res = await axios.get("https://dummyapi-wine.vercel.app/users");
        console.log(res)
        if(res.status === 200){
            setUsers(res.data);
        }else{
            alert("API is not working")
        }
    }

    useEffect(()=>{
        getUsers()
    },[])


    return (
        <div class="container mt-3">
            <h2>User List Table</h2>
            <table class="table table-dark table-hover">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Age</th>
                    </tr>
                </thead>
                <tbody>
                    {users && users.map((val,id)=>
                      <tr >
                        <td>{id+1}</td>
                        <td>{val.name}</td>
                        <td>{val.email}</td>
                        <td>{val.phone}</td>
                        <td>{val.age}</td>
                    </tr>
                    )}
                  
                   
                </tbody>
            </table>
        </div>
    )
}