import React from "react";
import "./writeReview.css";

const WriteReview = () => {
  return (
    <div className="container writeareview">
      <form>
        <div className="fw-bold text-xl text-center ">Write a review</div>
        <div className="d-flex">
          <div className="leftreview">
            Selection Experience 
            <br />
            Payment Process
            <br />
            User Interface
            <br />
            Food Quality
            <br />
            Overall Experience
            <br />
          </div>
          <div className="rightreview">
            <div className="star-widget">
              <input type="radio" name="rate" id="rate-5"></input>
              <label form="rate-5" className="fas fa-star"></label>
              <input type="radio" name="rate" id="rate-4"></input>
              <label form="rate-4" className="fas fa-star"></label>
              <input type="radio" name="rate" id="rate-3"></input>
              <label form="rate-3" className="fas fa-star"></label>
              <input type="radio" name="rate" id="rate-2"></input>
              <label form="rate-2" className="fas fa-star"></label>
              <input type="radio" name="rate" id="rate-1"></input>
              <label form="rate-1" className="fas fa-star"></label>
            </div>
            <div className="star-widget">
              <input type="radio" name="rate" id="rate-5"></input>
              <label form="rate-5" className="fas fa-star"></label>
              <input type="radio" name="rate" id="rate-4"></input>
              <label form="rate-4" className="fas fa-star"></label>
              <input type="radio" name="rate" id="rate-3"></input>
              <label form="rate-3" className="fas fa-star"></label>
              <input type="radio" name="rate" id="rate-2"></input>
              <label form="rate-2" className="fas fa-star"></label>
              <input type="radio" name="rate" id="rate-1"></input>
              <label form="rate-1" className="fas fa-star"></label>
            </div><div className="star-widget">
              <input type="radio" name="rate" id="rate-5"></input>
              <label form="rate-5" className="fas fa-star"></label>
              <input type="radio" name="rate" id="rate-4"></input>
              <label form="rate-4" className="fas fa-star"></label>
              <input type="radio" name="rate" id="rate-3"></input>
              <label form="rate-3" className="fas fa-star"></label>
              <input type="radio" name="rate" id="rate-2"></input>
              <label form="rate-2" className="fas fa-star"></label>
              <input type="radio" name="rate" id="rate-1"></input>
              <label form="rate-1" className="fas fa-star"></label>
            </div><div className="star-widget">
              <input type="radio" name="rate" id="rate-5"></input>
              <label form="rate-5" className="fas fa-star"></label>
              <input type="radio" name="rate" id="rate-4"></input>
              <label form="rate-4" className="fas fa-star"></label>
              <input type="radio" name="rate" id="rate-3"></input>
              <label form="rate-3" className="fas fa-star"></label>
              <input type="radio" name="rate" id="rate-2"></input>
              <label form="rate-2" className="fas fa-star"></label>
              <input type="radio" name="rate" id="rate-1"></input>
              <label form="rate-1" className="fas fa-star"></label>
            </div><div className="star-widget">
              <input type="radio" name="rate" id="rate-5"></input>
              <label form="rate-5" className="fas fa-star"></label>
              <input type="radio" name="rate" id="rate-4"></input>
              <label form="rate-4" className="fas fa-star"></label>
              <input type="radio" name="rate" id="rate-3"></input>
              <label form="rate-3" className="fas fa-star"></label>
              <input type="radio" name="rate" id="rate-2"></input>
              <label form="rate-2" className="fas fa-star"></label>
              <input type="radio" name="rate" id="rate-1"></input>
              <label form="rate-1" className="fas fa-star"></label>
            </div>
            
          </div>
        </div>
        <div>
          <input
            type="text"
            className="input-review"
            placeholder="Tell about your experience :)"
          />
          <button type="submit" class="btn-review">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default WriteReview;
