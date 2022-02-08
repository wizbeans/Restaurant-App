import React from 'react'
function SliderItem(props) {
  return (
    <div class='carousel-item'>
      <div style={{ display: 'flex', marginTop: 103,marginBottom:30, paddingRight: 15, paddingLeft: 15 }}>
        <div className='mx-auto'>
          <img class='d-block w-100' height='100%' 
          style={{paddingLeft:30,paddingRight:30}} src={props.src1} />
        </div>
        <div className='mx-auto'>
          <img class='d-block w-100' height='100%'
          style={{paddingLeft:30,paddingRight:30}} src={props.src2} />
        </div>
        <div className='mx-auto'>
          <img class='d-block w-100' height='100%'
          style={{paddingLeft:30,paddingRight:30}} src={props.src3} />
        </div>
      </div>
    </div>
  )
}
export default SliderItem
