import './App.css';
import { useEffect } from 'react';
import { RouterProvider } from "react-router-dom"
import { fetchProduct } from './store/reducers/actionCreators';
import { useDispatch } from 'react-redux';
import { getCategory } from './store/reducers/product';
import { fakeData } from './assets/fakeData';
import { activeUser, valid } from './store/reducers/user';
import { router } from './pages/index.js';

function App() {
  const dispatch = useDispatch()
  // const isValid = useSelector((state) => state.user.isValid)
  useEffect(() => {
    if (!localStorage.user) {
      localStorage.setItem("user", JSON.stringify([]))
    }
    if (!localStorage.bookMark) {
      localStorage.setItem("bookMark", JSON.stringify([]))
    }
    if (!localStorage.usersData) {
      localStorage.setItem("usersData", JSON.stringify({}))
    }

    const activUser = JSON.parse(localStorage.getItem("activeUser"))
    if (activUser) {
      dispatch(valid(true))
    }
    dispatch(fetchProduct())
    const data = fakeData.categoryData
    dispatch(getCategory(data))
    const activeUserData = JSON.parse(localStorage.getItem("usersData"))
    const user = JSON.parse(localStorage.getItem("activeUser"))
    dispatch(activeUser(activeUserData[user]))
  }, [])// eslint-disable-line react-hooks/exhaustive-deps
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
