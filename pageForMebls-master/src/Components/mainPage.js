import React from "react";
import { Link, Outlet  } from 'react-router-dom';
import '../Components/mainPAge.css'


function Nav(props) {
    return (
        <div className="navBar">
            <ul>
                <li></li>
            </ul>
        </div>
    )
}


export class MainComponent extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="App">
                <div className="runningString">
                    <p>#buy now           #вседлядому            #швидкотазручно            #buy now           #вседлядому            #швидкотазручно            #buy now           #вседлядому            #швидкотазручно            #buy now           #вседлядому            #швидкотазручно        </p>
                </div>
                <nav>
                    <a href="#">
                        <img src="material-symbols_menu.png"></img>
                        <p>Menu</p>
                    </a>
                    <a href="#">
                        <img src="Union.png"></img>
                    </a>
                    <Link to='/products'>
                        Товари
                    </Link>
                    <Link to='/rooms'>
                        Кімнати
                    </Link>
                    <Link to='/design'>
                        Дизайн
                    </Link>
                    <a href="#">
                        <img src="Vector.png"></img>Київ
                    </a>
                    <a href="#">
                        <img src="uil_user.png"></img>Привіт! Увійдіть в систему
                    </a>
                    <a href="#">
                        <img src="Vector (1).png"></img>
                    </a>
                    <a href="#">
                        <img src="Vector (2).png"></img>
                    </a>
                </nav>
                <div className="searchBar">
                    <img src="Vector (3).png"></img>
                    <input type="text" placeholder="Пошук"></input>
                </div>
                <div className="global">
                    <h1>ВСЕ ДЛЯ ДОМУ</h1>
                    <div className="regAndKat">
                        <Link to="/register">створити акаунт та почати!</Link>
                        <a href="#">каталог <img src="Vector (4).png"></img></a>
                    </div>
                    <div className="forCards">
                        <div className="card">
                            <figure>
                                <figcaption>
                                    TOP
                                </figcaption>
                            </figure>
                            <img src="1.png"></img>
                            <p>подушки</p>
                            <p>спальна кімната...</p>
                            <p>12$</p>
                        </div>
                        <div className="card">
                            <figure>
                                <figcaption>
                                    TOP
                                </figcaption>
                            </figure>
                            <img src="2.png"></img>
                            <p>ковдра</p>
                            <p>спальна кімната...</p>
                            <p>30$</p>
                        </div>
                        <div className="card">
                            <figure>
                                <figcaption>
                                    TOP
                                </figcaption>
                            </figure>
                            <img src="3.png"></img>
                            <p>ліжко</p>
                            <p>спальна кімната...</p>
                            <p>414$</p>
                        </div>
                    </div>
                    <div className="sale">
                        <p>ЛОВИ МОМЕНТ</p>
                        <span></span>
                        <p>Знижки до</p>
                        <p>60%</p>
                        <p>на вибрані категорії товарів!</p>
                    </div>
                </div>
            </div>
        )
    }

}