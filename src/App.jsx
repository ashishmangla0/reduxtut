import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import {
  decrement,
  increment,
  incremetByAmount,
  reset,
} from "./features/counter/counterSlice";
import HomePage from "./pages/HomePage";
import { Route, Routes } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import Header from "./components/Header";

function App() {
  const count = useSelector((state) => state?.counter?.value);

  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };
  const handleReset = () => {
    dispatch(reset());
  };
  const handleIncrementByAmount = (e) => {
    const value = e.target.textContent;

    dispatch(incremetByAmount(parseInt(value)));
  };

  return (
    <>
   <Header/>
     <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      {/* <Route path="/contact" element={<ContactPage />} />
      <Route path="*" element={<NotFoundPage />} />  */}
    </Routes>
    
      {/* <div>
        {count}
        <button onClick={handleIncrement}>+</button>
        <button onClick={handleDecrement} disabled={count <= 0}>
          -
        </button>
        <button onClick={handleReset}>reset</button>
        <button onClick={handleIncrementByAmount}>5</button>
      </div> */}
    </>
  );
}

export default App;
