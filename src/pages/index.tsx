import { Link } from "react-router-dom";

const Home = () => {
   return (
      <div>
         <Nav />
      </div>
   );
};

export { Home };

const Nav = () => {
   return (
      <div className="m-4 bg-red-400">
         <a href="/" className="">
            That all may Prophesy
         </a>
         <nav>
            <ul>
               <li>
                  <Link to="/">Home</Link>
               </li>
               <li>
                  <Link to="/">Home2</Link>
               </li>
            </ul>
         </nav>
      </div>
   );
};
