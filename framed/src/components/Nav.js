import "./All.css"

const Nav=()=>{
 return (
 <>
 <nav className="nav">
   <img
     src="./images/logo.jpg"
     alt="Company logo"
     className="nav__logo"
     id="logo"
   />
   <ul className="nav__links">
     <li className="nav__item">
       <a className="nav__link" href="#">Services</a>
     </li>
     <li className="nav__item">
       <a className="nav__link" href="#">About Us</a>
     </li>
     <li className="nav__item">
       <a className="nav__link" href="#">Our Employees</a>
     </li>
     <li className="nav__item">
       <a className="nav__link nav__link--btn" href="#"
         >Apply Here</a>
     </li>
   </ul>
 </nav>
 </>
 );
};
export default Nav;
