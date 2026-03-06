import "./Loginpage.css"
const Form_Login=()=>{
    return <div className="maincontainer-loginform">
        <div className="inner-container-loginform" >
        <div className="track_expense_text">
         Track Your Expense
        </div>
        <form action="" className="form-parent-tag">
            <label htmlFor="Username">UserName</label>
            <input  className="rounded-2 border-1 p-1" type="text" /><br />
            <label htmlFor="Password">Password</label>
            <input className="rounded-2 border-1 p-1" type="text" /><br />
            <button className="Formsubmit-button">Login</button>
        </form>
            <div className="last-text d-flex ">
                <div className="forgot-pas">Forgot password</div>
                <div className="Dont-haveacc">Dont have account?</div>
            </div>
    </div>
    </div>
}
export default Form_Login;