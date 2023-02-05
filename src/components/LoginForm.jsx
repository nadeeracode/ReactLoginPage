function LoginForm() {
    return(
        <div className="LoginForm_Card">
            <div className="LoginForm_Text">
                Login
            </div>
            <input
                type="text"
                placeholder="Username"
                className="LoginForm_Username"
            />
            <input 
                type="password"
                placeholder="Password"
                className="LoginForm_Password"
            />
            <button className="LoginForm_Button" >Login</button>
        </div>
    )
}
export default LoginForm