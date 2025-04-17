import { useDispatch, useSelector } from "react-redux";
import { orderCake,reStock } from "../features/cake/cakeSlice";

const AboutPage = () => {

  const { numOfCake, message } = useSelector((state) => state?.cake);
  const dispatch = useDispatch();


  const handleRestoke = (e) =>{
    const value = e?.target?.value

    console.log(value);
    dispatch(reStock(value))
    

  }
  return (
    <>
      <div className="counter_main">
        In stock : {numOfCake}
        <br />
        {message && <p style={{ color: "red" }}>{message}</p>}
        <div>
          <button
            onClick={() => dispatch(orderCake())}
            disabled={numOfCake <= 0}
          >
            orderCake
          </button>

          <button value={10} onClick={handleRestoke}>restock by 10</button>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
