// import Dom from "material-ui/utils/dom";
// import react from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="signin" target="_blank">
        SIGN In
      </Link>
    </nav>
  );
}

export default Navbar;
