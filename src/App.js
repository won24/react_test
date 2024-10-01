import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import Main from "./pages/Main";
import Menu from "./pages/Menu";
import MenuDetail from "./pages/MenuDetail";
import Order from "./pages/Order";
import { useState } from "react";


function App() {

  const [addMenu, setAddMenu] = useState([])

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
          <Route path="main" element={<Main/>} />
          <Route path="menu">
            <Route index element={<Menu />}/>
            <Route path=":id" element={<MenuDetail addMenu ={addMenu} setAddMenu={setAddMenu}/>}/>
          </Route>
          <Route path="order" element={<Order addMenu={addMenu} />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
