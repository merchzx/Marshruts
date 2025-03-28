import React from "react";
import { useRef, useState } from "react";
import { Link, Outlet } from 'react-router-dom';
import '../Components/registerForm.css'

export function FormPageToLogin() {

    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    function handleEmailChange(e) {
        const value = e.target.value;
        setEmail(value);
        if (emailRef.current) {
            emailRef.current.className = value.length > 5 ? "valid" : "invalid";
        }
    }

    function handlePasswordChange(e) {
        const value = e.target.value;
        setPassword(value);
        if (passwordRef.current) {
            passwordRef.current.className = value.length > 5 ? "valid" : "invalid";
        }
    }
    return (
        <div>
            <img className="defaultImg" src="./Default.png"></img>
            <h1 className="zagol">  заповніть вхід до
                облікового запису</h1>
            <img src="./leftImg.png"></img>
            <form className="toLogin">
                <div className="forInput">
                    <label>Електронна пошта або мобільний номер
                        <input className="invalid" ref={emailRef} onChange={handleEmailChange}></input>
                    </label>
                    <p>By entering your mobile number and one-time code sign-in option, you agree to receive a one-time verification
                        code via SMS from IKEA. Message and data rates may apply.</p>
                    <a href="#">More info about Privacy Policy</a>
                </div>
                <div className="forInput">
                    <label>Пароль
                        <img src="./Vector.png"></img>
                        <input ref={passwordRef} onChange={handlePasswordChange} className="invalid"></input>
                    </label>
                    <a href="#">Забули свій пароль?</a>
                </div>
                <div className="otherInfo">
                    <input type="checkbox"></input><p>Зберегти інформацію</p>
                    <img src="Vector (1).png"></img>
                </div>
                <button className="cont">продовжити</button>

                <p className="makeAc">У вас ще немає облікового запису? Створіть його:</p>
                <button className="makeButt">створити аккаунт</button>
            </form>
        </div >
    )
}

function SimpleInput(props) {
    const valid = useRef(null);
    const [value, setValue] = useState("");

    function handleChange(e) {
        const newValue = e.target.value;
        setValue(newValue);
        if (valid.current) {
            valid.current.className = newValue.length > 5 ? "valid" : "invalid";
        }
    }
    return (
        <div className="forInput">
            <label>{props.name}
                <input ref={valid} onChange={handleChange} className="invalid"></input>
            </label>
        </div>
    )
}

export function FormPageToMakeAcc() {
    const valid = useRef(null);
    const [value, setValue] = useState("");
    function handleChange(e) {
        setValue(e.target.value);
        if (value.length > 5) {
            valid.current.className = "valid"
        }
        else {
            valid.current.className = "invalid"
        }
    }
    return (
        <div>
            <Link to="/"><img className="defaultImg" src="./Default.png"></img></Link>
            <h1 className="zagol">  заповніть вхід до
                облікового запису</h1>
            <img src="Rectangle 2.png"></img>
            <form className="makeAcc">
                <SimpleInput name="Ім'я"></SimpleInput>
                <SimpleInput name="Фамілія"></SimpleInput>
                <SimpleInput name="Дата народження"></SimpleInput>
                <SimpleInput name="Дата народження"></SimpleInput>
                <SimpleInput name="Країна"></SimpleInput>
                <SimpleInput name="Адреса"></SimpleInput>
                <div className="forInput">
                    <label>Mобільний номер
                        <input ref={valid} onChange={handleChange} className="invalid"></input>
                    </label>
                    <p>By entering your mobile number and one-time code sign-in option, you agree to receive a one-time verification
                        code via SMS from IKEA. Message and data rates may apply.</p>
                    <a href="#">More info about Privacy Policy</a>
                </div>
                <SimpleInput name="Адреса"></SimpleInput>
                <p className="verif">Вам потрібно буде пройти верифікацію</p>
                <SimpleInput name="Пароль"></SimpleInput>
                <div className="otherInfo">
                    <input type="checkbox"></input><p>Я, ознайомлений з Політикою конфіденційності з обробки та захисту персональних даних</p>
                </div>
                <button className="cont">продовжити</button>
            </form>
        </div >
    )
}