import React, {useState} from "react";
import "./Main.scss";

const Main = () => {
    const[name, setName] = useState("");
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");
    const[phone, setPhone] = useState(0);

    const handleChange = e => {
        e.preventDefault();
    }

    return(
        <div className="wrapper-main">
            <section>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            </section>
            <section>
                <div>Sign In</div>
                <div>Register</div>
                <form>
                    <input 
                        type="text" 
                        onChange={e => setName(e.target.value)} 
                        value={name}
                        placeholder="Your Name"
                    />
                    <input 
                        type="password" 
                        onChange={e => setPassword(e.target.value)} 
                        value={password}
                        placeholder="Your Password"
                    />
                    <div className="wrapper-main__button" onClick={handleChange}>Отправить</div>
                </form>
            </section>
        </div>
    )
}
export default Main;