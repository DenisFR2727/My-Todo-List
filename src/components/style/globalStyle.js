import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Arial', sans-serif;
    background-color: #f8f8f8; /* Світлий колір бекграунду */
    /* color: #333;  */
  }

  /* Стилі для заголовків */
  h1 {
    font-size: 36px;
    margin-bottom: 20px;
    color: #555; /* Колір заголовків */
  }

  /* Стилі для інпутів */
  input[type="text"] {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
    font-size: 16px;
    outline: none;
  }

  /* Стилі для кнопок */
  button {
    background-color: #f7b731; /* Колір кнопок */
    color: #fff;
    border: none;
    padding: 10px 15px;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease-in-out;
  }

  button:hover {
    background-color: #eb4d4b; /* Колір при наведенні на кнопку */
  }

  /* Додаткові стилі для інших елементів можна додати тут */
`;

export default GlobalStyle;