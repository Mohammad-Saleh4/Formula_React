
import './Background.css'
import f1 from '../../Assets/f1.mp4.mp4'
import car8 from '../../Assets/car8.jpg.jpg'
import car9 from '../../Assets/car9.jpg.jpg'
import car10 from '../../Assets/car10.jpg.jpg'

const Background=({playStatus,heroCount})=>{

    if(playStatus){

return (

<video className='background' autoPlay loop muted> 
    <source src={f1} type='video/mp4'/>
</video>

)

}
else if(heroCount===0){

return <img src={car8} alt='' className='background fade-in' />

}
else if(heroCount===1){

return <img src={car9} alt='' className='background fade-in' />

}
else if(heroCount===2){

return <img src={car10} alt='' className='background fade-in' />

}

}
export default Background