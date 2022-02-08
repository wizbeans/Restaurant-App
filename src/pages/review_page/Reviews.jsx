import React from "react";
import "./reviews.css";
import { reviewData } from "./reviewData";
export const Reviews = () => {
  return (
    <div className="container">
      <div className="row row-cols-1 row-cols-md-3 g-4 m-3">
        {reviewData.map((data) => (
          <div className="col">
            <div className="card h-100 align-items-center">
              <div className="card-body d-flex flex-column align-items-center  bg-reviews">
                <p class="fst-italic">
                  {[...Array(data.rating)].map((e) => (
                    <i className="fas fa-star" style={{color: "#fd4"}}></i>
                  ))}
                </p>
                <h5 className="card-title fw-bold fs-2">{data.name}</h5>
                <p class="fst-italic">{data.date}.</p>

                <p className="card-text text-center">{data.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
