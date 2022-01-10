import React,{ useState } from 'react'

function ProgessBar (props) {
  const [applyStyle, setapplyStyle] = useState({})
  setTimeout(() => {
    const newStyle = { width: `${props.percent}%` }
    setapplyStyle(newStyle)
  }, 1000)
  var percent_to_rating = (`${props.percent}` / 100) * 5
  return (
    <div className='jg-review-div'>
      <div className='jg-review-title'>{props.title}</div>
      <div className='jg-review-bar-div'>
        <div className='jg-review-bar'>
          <div className='jg-review-percent' style={applyStyle}></div>
        </div>
        <div style={{ marginLeft: '4%' }}> {percent_to_rating}</div>
      </div>
    </div>
  )
}
export default ProgessBar
