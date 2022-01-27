import React from "react";
import "../Cart/Orderdetail.css";
import image from "../../img/dessert.jpg";
import image1 from "../../img/paytm.jpg";
import image2 from "../../img/gpay.png";
import image3 from "../../img/UPI.jpg";
import image4 from "../../img/visa.jpg";

export default function Orderdetail() {
  return (
    <div className="container-fluid row">
      <div className="container card my-5">
        <h3 className="my-2">Order Details</h3>

        <div className="card my-4 items">
          <div className="card-body">
            <img src={image} class="jg-logo card-img-top" alt="..."></img>
            <h5 className="card-title">Item 1</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>

            <a href="/" className="btn btn-primary">
              -
            </a>
            <a href="/" className="btn ">
              01
            </a>
            <a href="/" className="btn btn-primary">
              +
            </a>
            {/* <i className="bi bi-plus-lg"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star" style={{color: "#fd4"}}></i> */}
          </div>
        </div>

        <div className="card my-4 items">
          <div className="card-body">
            <img src={image} class="jg-logo card-img-top" alt="..."></img>
            <h5 className="card-title">Item 1</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>

            <a href="/" className="btn btn-primary">
              -
            </a>
            <a href="/" className="btn ">
              01
            </a>
            <a href="/" className="btn btn-primary">
              +
            </a>
            {/* <i className="bi bi-plus-lg"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star" style={{color: "#fd4"}}></i> */}
          </div>
        </div>

        <div className="card my-4 items">
          <div className="card-body">
            <img src={image} class="jg-logo card-img-top" alt="..."></img>
            <h5 className="card-title">Item 1</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>

            <a href="/" className="btn btn-primary">
              -
            </a>
            <a href="/" className="btn ">
              01
            </a>
            <a href="/" className="btn btn-primary">
              +
            </a>
            {/* <i className="bi bi-plus-lg"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star" style={{color: "#fd4"}}></i> */}
          </div>
        </div>

        {/* <div class="card">
        <div class="card-body" style="width: 18rem;">This is some text within a card body.</div>
      </div> */}
      </div>

      <div className="container card my-5" id="wrapper">
        <h3 className="my-2">Bill Details</h3>
        <div id="parent_main">
          <div id="parent1">
            <div className="container1">Item 1</div>
            <div className="container1">X 1</div>
            <div className="container1">₹ 100</div>
          </div>
          <div id="parent2">
            <div className="container2">Item 2</div>
            <div className="container2">X 1</div>
            <div className="container2">₹ 100</div>
          </div>
          <div id="parent3">
            <div className="container3">Item 3</div>
            <div className="container3">X 1</div>
            <div className="container3">₹ 100</div>
          </div>
          <div id="total">
            <div className="total">Total</div>
            <div className="total">X 3</div>
            <div className="total">₹ 300</div>
          </div>
        </div>

        <h3 id="payment">Payment Modes</h3>
        <div id="parent_main2">
          <div id="paytm" className="my-5">
            <div className="childp">Paytm</div>
            <img className="imgp mx-5 jg-logo card-img-top" src={image1} alt="..."></img>
          </div>
          <div id="paytm" className="my-5">
            <div className="childp">Gpay</div>
            <img className="imgp mx-5 jg-logo card-img-top" src={image2} alt="..."></img>
          </div>
          <div id="paytm" className="my-5">
            <div className="childp">CARD</div>
            <img className="imgp mx-5 jg-logo card-img-top" src={image4} alt="..."></img>
          </div>
          <div id="paytm" className="my-5">
            <div className="childp">UPI Payment</div>
            <img className="imgp mx-5 jg-logo card-img-top" src={image3} alt="..."></img>
          </div>
        </div>
      </div>
    </div>
  );
}
