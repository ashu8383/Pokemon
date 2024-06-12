import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignUp from './Component/SignUp/SignUp';
import Login from './Component/Login/Login';
import Main from './Component/Main/Main';

export default function Home() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/pokemons'
          element={<Main />}
        />

        <Route
          path='/signup'
          element={<SignUp />}
        />
        <Route
          path='/'
          element={<Login />}
        />
      </Routes>
    </BrowserRouter>
  );
}
