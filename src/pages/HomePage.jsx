import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  incremetByAmount,
  reset,
} from "../features/counter/counterSlice";

const HomePage = () => {
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
    const value = e?.target?.textContent;

    dispatch(incremetByAmount(parseInt(value)));
  };

  return (
    <>
      <div className="counter_main">
        {count}

        <div className="">
          <button onClick={handleIncrement}>+</button>
          <button onClick={handleDecrement}>-</button>
          <button onClick={handleReset}>Reset</button>
          <button onClick={handleIncrementByAmount}>5</button>
        </div>
      </div>
    </>
  );
};

export default HomePage;
