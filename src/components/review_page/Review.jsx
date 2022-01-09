import React from 'react'
import './review.css'
import ProgessBar from './ProgessBar'
import Review_2sec from './Review_2sec'
function Review () {
  const rating = [50, 90, 80, 58, 70]
  var sum = 0
  for (var i = 0; i < rating.length; i++) {
    sum += rating[i] / 100
  }
  sum /= rating.length
  var result = (sum * 5).toFixed(2)
  return (
    <div className='jg-reviews'>
      <div className='jg-review-section'>
        <ProgessBar title='SELECTION EXPERIENCE' percent={rating[0]} />
        <ProgessBar title='PAYMENT PROCESS' percent={rating[1]} />
        <ProgessBar title='USER INTERFACE' percent={rating[2]} />
        <ProgessBar title='FOOD QUALITY' percent={rating[3]} />
        <ProgessBar title='OVERALL EXPERIENCE' percent={rating[4]} />
      </div>
      <div className='jg-review-section2'>
        <Review_2sec no_of_reviewer={30} overall_rating={result} />
      </div>
    </div>
  )
}
export default Review
