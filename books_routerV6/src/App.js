import HeaderBooks from './components/HeaderBooks';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./components/Main.js";

function App() {
  return (
      <BrowserRouter>
        <div className="App">
          <HeaderBooks />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/nightpilot" element={<Main selectedBook="Night Pilot" />} />
            <Route path="/duna" element={<Main selectedBook="Duna" />} />
            <Route path="/troy" element={<Main selectedBook="Troy" />} />
          </Routes>
        </div>
      </BrowserRouter>
  );
}

export default App;

// Створити компонент, який відображає список книг з використанням React Router. При кліку на книгу, користувач має бути перенаправлений на окрему сторінку з детальною інформацією про книгу.
