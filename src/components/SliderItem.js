import React from 'react'
function SliderItem (props) {
  return (
    <div class='carousel-item'>
      <div style={{ display: 'flex' }}>
        <div className='mx-auto'>
          <img class='d-block w-100' height='94%' src={props.src1} />
        </div>
        <div className='mx-auto'>
          <img class='d-block w-100' height='94%' src={props.src2} />
        </div>
        <div className='mx-auto'>
          <img class='d-block w-100' height='94%' src={props.src3} />
        </div>
      </div>
    </div>
  )
}
export default SliderItem
