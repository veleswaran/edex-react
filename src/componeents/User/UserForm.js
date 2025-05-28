import { useState } from "react"
import axios from 'axios';

export default function UserForm() {
    const [user, setUser] = useState({});

    function handleChange(e) {
        setUser({ ...user, [e.target.name]: e.target.value })
    }
    async function handleSubmit(e) {
        e.preventDefault();
        const res = await axios.post('https://dummyapi-wine.vercel.app/users', user)
        if (res.status == 201) {
            console.log(user);
            setUser({
                email: "",
                age: "",
                phone: "",
                name: ""
            })
        }else{
            alert("api call is not working")
        }

    }
    return (
        <div className="container">
            <form action="/action_page.php" onSubmit={handleSubmit}>
                <div class="mb-3 mt-3">
                    <label for="name" class="form-label">Name:</label>
                    <input type="text" class="form-control" id="name" placeholder="Enter name" name="name" onChange={handleChange} value={user.name} />
                </div>
                <div class="mb-3 mt-3">
                    <label for="email" class="form-label">Email:</label>
                    <input type="email" class="form-control" id="email" placeholder="Enter email" name="email" onChange={handleChange} value={user.email} />
                </div>
                <div class="mb-3 mt-3">
                    <label for="phone" class="form-label">Phone:</label>
                    <input type="tel" class="form-control" id="phone" placeholder="Enter phone" name="phone" onChange={handleChange} value={user.phone} />
                </div>
                <div class="mb-3">
                    <label for="age" class="form-label">Age:</label>
                    <input type="number" class="form-control" id="age" placeholder="Enter age" name="age" onChange={handleChange} value={user.age} />
                </div>
                <div class="form-check mb-3">
                    <label class="form-check-label">
                        <input class="form-check-input" type="checkbox" name="remember" /> Remember me
                    </label>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}