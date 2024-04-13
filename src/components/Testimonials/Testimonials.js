import React, {useRef} from 'react'
import './Testimonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'

const Testimonials = () => {

    const slider = useRef();
    let tx = 0;

    const slideForward = () => {
        if (tx > -50){
            tx -= 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    }

    const slideBackward = () => {
        if (tx < 0){
            tx += 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;   
    }

  return (
    <div className='testimonials'>
        <img src={next_icon} alt='' className='next-btn' onClick={slideForward}/>
        <img src={back_icon} alt='' className='back-btn' onClick={slideBackward}/>
        <div className='slider'>
            <ul ref={slider}>
                <li>
                   <div className='slide'>
                        <div className='user-info'>
                            <div>
                                <h3>IM</h3>
                                <span>Webinar Attendee</span>
                            </div>
                        </div>
                        <p>
                            “I think you are doing a wonderful thing to demystify this great industry!”
                        </p>
                    </div> 
                </li>
                <li>
                   <div className='slide'>
                        <div className='user-info'>
                            <div>
                                <h3>AK</h3>
                                <span>Webinar Attendee</span>
                            </div>
                        </div>
                        <p>
                            “Your teaching and materials have been extremely useful. I would love it if you could help me as a career coach!”
                        </p>
                    </div> 
                </li>
                <li>
                   <div className='slide'>
                        <div className='user-info'>
                            <div>
                                <h3>GS</h3>
                                <span>Student of Vincent's Options Theory class</span>
                            </div>
                        </div>
                        <p>
                            “I would not have enjoyed Options Theory as much without Vincent's excellent teaching!”
                        </p>
                    </div> 
                </li>
                <li>
                   <div className='slide'>
                        <div className='user-info'>
                            <div>
                                <h3>IM</h3>
                                <span>Webinar Attendee</span>
                            </div>
                        </div>
                        <p>
                            “It was very insightful and I can only encourage you to keep going this way!”
                        </p>
                    </div> 
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Testimonials
