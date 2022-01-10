import React from 'react';
function Review_2sec (props) {
  return (
    <div className='jg-review-overall-rating'>
      <h4>Overall Rating</h4>
      <h6>(out of 5)</h6>
      <h2>{props.overall_rating}</h2>
      <p>Based on {props.no_of_reviewer} reviews</p>
      <a href='#' style={{ textDecoration: 'none' }}>
        Write a review
      </a>
    </div>
  )
}

export default Review_2sec
