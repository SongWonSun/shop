import "./App.css";
import { Button, Container, Navbar, Nav } from "react-bootstrap";
import { Items } from "./Items";
import $ from "jquery";

function Main() {
  let arr = [1, 2, 3, 4, 5, 6, 7, 8];
  let mstyle = {
    position: "absolute",
    width: "50px",
    height: "50px",
    top: "10px",
    right: "20px",
    background: "red",
    color: "white",
    borderRadius: "8px",
    fontSize: "20pt",
  };

  return (
    <>
      {/* 메인이미지 */}
      <div className="main-bg"></div>
      <div className="container">
        <div className="row">
          {arr.map((v, i) => {
            if (v > 8) v = 0;
            return <Items key={i} ord={v} />;
          })}
        </div>
      </div>
      <div className="modBox" style={{ display: "none" }}></div>
      <div style={{ width: "100%", position: "relative" }}>
        <div
          style={mstyle}
          onClick={() => {
            $(".modBox").hide();
          }}
        >
          X
        </div>
      </div>
      <br />
      <div>
        <h3></h3>
        <p></p>
      </div>
    </>
  );
}
export default Main;