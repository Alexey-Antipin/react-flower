import React, { useRef, useState, useEffect } from "react";
import { throttle } from "throttle-debounce";
import "./index.scss";

export const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [menu, setMenu] = useState();

  const toggleClick = () => {
    setToggle(!toggle);
  };

  const clickMenu = () => {
    let navbar = document.getElementById("navbar");

    for (let index = 1; index <= 4; index++) {
      let id = index.toString();
      let todoList = document.getElementById(`navbar__under-${id}`);

      todoList.classList.remove("navbar__ul-under");
      todoList.classList.remove("navbar__ul-under-none");
      todoList.classList.add("navbar__ul-under-stock");
    }

    if (navbar.style.display == "block") {
      navbar.style.display = "none";
    } else {
      navbar.style.display = "block";
    }
  };

  const clickUl = (e) => {
    let id = e.currentTarget.id;
    let navbar = document.getElementById(`navbar__under-${id}`);
    navbar.classList.remove("navbar__ul-under-stock");

    if (navbar.classList == "navbar__ul-under") {
      navbar.classList.remove("navbar__ul-under");
      navbar.classList.add("navbar__ul-under-none");
    } else {
      navbar.classList.add("navbar__ul-under");
      navbar.classList.remove("navbar__ul-under-none");
    }
  };

  const windowRef = useRef();

  useEffect(() => {
    const resizeHandler = throttle(500, () => {
      const _width = windowRef.current.offsetWidth;
      setMenu(_width);
    });

    if (windowRef.current.offsetWidth <= 800) {
      setMenu(700);
    }

    window.addEventListener("resize", resizeHandler);

    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);

  return (
    <header className="header" ref={windowRef}>
      {menu <= 700 ? (
        <>
          {/* Mobile */}
          <nav className="header__navbar-mobile">
            <button className="navbar__menu" onClick={() => clickMenu()}>
              Меню
            </button>
            <ul className="navbar__ul" id="navbar">
              <li className="navbar__li">
                <a className="navbar__a">Главная страница</a>
                <button
                  className="navbar__button"
                  id="1"
                  onClick={(e) => clickUl(e)}>
                  +
                </button>
              </li>
              <ul className="navbar__ul-under-stock" id="navbar__under-1">
                <li className="navbar__li-under">
                  <a className="navbar__a-under">Амариллис</a>
                </li>
                <li className="navbar__li-under">
                  <a className="navbar__a-under">Астры</a>
                </li>
                <li className="navbar__li-under">
                  <a className="navbar__a-under">Анемоны</a>
                </li>
              </ul>

              <li className="navbar__li">
                <a className="navbar__a">Цветы</a>
                <button
                  className="navbar__button"
                  id="2"
                  onClick={(e) => clickUl(e)}>
                  +
                </button>
              </li>
              <ul className="navbar__ul-under-stock" id="navbar__under-2">
                <li className="navbar__li-under">
                  <a className="navbar__a-under">Малые</a>
                </li>
                <li className="navbar__li-under">
                  <a className="navbar__a-under">Большие</a>
                </li>
                <li className="navbar__li-under">
                  <a className="navbar__a-under">Экзотика</a>
                </li>
              </ul>

              <li className="navbar__li">
                <a className="navbar__a">Комнатные растения</a>
                <button
                  className="navbar__button"
                  id="3"
                  onClick={(e) => clickUl(e)}>
                  +
                </button>
              </li>
              <ul className="navbar__ul-under-stock" id="navbar__under-3">
                <li className="navbar__li-under">
                  <a className="navbar__a-under">Кактус</a>
                </li>
                <li className="navbar__li-under">
                  <a className="navbar__a-under">Алоэ Вера</a>
                </li>
                <li className="navbar__li-under">
                  <a className="navbar__a-under">Золотой Ус</a>
                </li>
              </ul>

              <li className="navbar__li">
                <a className="navbar__a">Розы</a>
                <button
                  className="navbar__button"
                  id="4"
                  onClick={(e) => clickUl(e)}>
                  +
                </button>
              </li>
              <ul className="navbar__ul-under-stock" id="navbar__under-4">
                <li className="navbar__li-under">
                  <a className="navbar__a-under">Розы белые</a>
                </li>
                <li className="navbar__li-under">
                  <a className="navbar__a-under">Розы красные</a>
                </li>
                <li className="navbar__li-under">
                  <a className="navbar__a-under">Розы жёлтые</a>
                </li>
              </ul>
              <div className="navbar__footer"></div>
            </ul>
          </nav>
        </>
      ) : (
        <>
          {/* Computer */}
          <nav className="header__navbar">
            <ul className="navbar__ul">
              <div className="navbar__passage">
                {toggle ? (
                  <button
                    className="passage__button-colour"
                    onClick={() => toggleClick()}>
                    Выйти
                  </button>
                ) : (
                  <button
                    className="passage__button"
                    onClick={() => toggleClick()}>
                    Войти
                  </button>
                )}
              </div>
              <li className="navbar__li-active">
                <a className="navbar__a">Главная страница</a>
              </li>
              <li className="navbar__li">
                <a className="navbar__a">Цветы</a>
                <ul className="ul">
                  <li className="li">
                    <a className="a">Амариллис</a>
                  </li>
                  <li className="li">
                    <a className="a">Астры</a>
                  </li>
                  <li className="li">
                    <a className="a">Анемоны</a>
                  </li>
                </ul>
              </li>
              <li className="navbar__li">
                <a className="navbar__a">Комнатные растения</a>
                <ul className="ul">
                  <li className="li">
                    <a className="a">Лимонные деревья</a>
                  </li>
                  <li className="li">
                    <a className="a">Орхидея домашняя</a>
                  </li>
                  <li className="li">
                    <a className="a">Комнатные цветы</a>
                  </li>
                </ul>
              </li>
              <li className="navbar__li">
                <a className="navbar__a">Розы</a>
                <ul className="ul">
                  <li className="li">
                    <a className="a">Розы по цвету</a>
                  </li>
                  <li className="li">
                    <a className="a">Букеты роз</a>
                  </li>
                  <li className="li">
                    <a className="a">Розы штучно</a>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
        </>
      )}
      <div className="header__banner">Магазин цветов</div>
    </header>
  );
};
