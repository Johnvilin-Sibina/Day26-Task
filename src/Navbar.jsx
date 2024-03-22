import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div className="header">
      <div className="container">
        <div className="row">
          <div className="col-xm-12">
            <div className="topBar">
              <Link
                to={"/"}
                style={{
                  textDecoration: "none",
                  color: "black",
                  marginRight: "1%",
                }}
              >
                ALL
              </Link>
              <Link
                to={"/fullstack"}
                style={{
                  textDecoration: "none",
                  color: "black",
                  marginRight: "1%",
                }}
              >
                FULL STACK DEVELOPMENT
              </Link>
              <Link
                to={"/data"}
                style={{
                  textDecoration: "none",
                  color: "black",
                  marginRight: "1%",
                }}
              >
                DATA SCIENCE
              </Link>
              <Link
                to={"/cyber"}
                style={{
                  textDecoration: "none",
                  color: "black",
                  marginRight: "1%",
                }}
              >
                CYBER SECURITY
              </Link>
              <Link
                to={"/career"}
                style={{ textDecoration: "none", color: "black" }}
              >
                CAREER
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
