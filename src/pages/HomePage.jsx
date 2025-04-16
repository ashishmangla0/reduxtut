import { useSelector } from "react-redux"

const HomePage = () =>{

    const count =  useSelector(state => state?.counter?.value)
return(
    <>
    <div className="counter_main">
        {count}


        <div className="">
            <button>+</button>
            <button>-</button>
            <button>Reset</button>
            <button>5</button>
        </div>
    </div>
    </>
)
}

export default HomePage