import React from 'react'
import './portfolio.css'
import imagen1 from '../../assets/version-2018-176.jpg'

const Portfolio = () => {
  return (
    <div className='container'>
      <div  className='flex flex-justify'>
          <div className='card'>
                          <img src={imagen1} alt="" />
                          <div className='card-boddy'>
                            <h2 className='card-title'>My title</h2>
                            <p className='card-text'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum quos omnis velit quidem, odit qui eveniet suscipit provident cumque, molestiae officia error voluptates. Repellat dolore esse, beatae quos nam possimus?</p>
                            <a href="#!" className='btn button'>Ir al sitio Web</a>
                          </div>
                </div>
                <div className='card'>
                          <img src={imagen1} alt="" />
                          <div className='card-boddy'>
                            <h2 className='card-title'>My title</h2>
                            <p className='card-text'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum quos omnis velit quidem, odit qui eveniet suscipit provident cumque, molestiae officia error voluptates. Repellat dolore esse, beatae quos nam possimus?</p>
                            <a href="#!" className='btn button'>Ir al sitio Web</a>
                          </div>
                </div>
                <div className='card'>
                          <img src={imagen1} alt="" />
                          <div className='card-boddy'>
                            <h2 className='card-title'>My title</h2>
                            <p className='card-text'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum quos omnis velit quidem, odit qui eveniet suscipit provident cumque, molestiae officia error voluptates. Repellat dolore esse, beatae quos nam possimus?</p>
                            <a href="#!" className='btn button'>Ir al sitio Web</a>
                          </div>
                </div>
    </div>
    </div>
    
  )
}

export default Portfolio