import { NavLink } from "react-router-dom"

const Header = () =>{
return(
    <header>
        <nav className="header_nav">
      <NavLink to="/" className={'header_link'}>
        Counter
      </NavLink>
      <NavLink to="/cake-icecream" className={'header_link'}>
        Cake and Icecream
      </NavLink>
      {/* <NavLink to="/concerts">All Concerts</NavLink>
      <NavLink to="/account">Account</NavLink> */}
    </nav>
    </header>
)
}

export default Header