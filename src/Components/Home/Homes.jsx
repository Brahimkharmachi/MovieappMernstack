import React from 'react'
import"./home.css"
import Carousselss from './CarousselHome/CarousselsHome'
import Slidershomes from './Sliderhome.jsx/SliderHomes'
import Cardshomes from './CardHome/Cardshome'
import Slidereseries from './CardHome/SliderEpisodeSeries/SlidersEpiosdesSeries'

function Homees() {
  return (
    <div >
        <div class='Homespart1'>
            <div>
            <Carousselss />
            </div>
            <div>
            <Slidershomes />
            </div>
        </div>

        <div class='Homespart2'>
        <div class='homepart2one'>
            <h1>اروع المسلسلات</h1>
         
         <div>
            <Cardshomes />
         </div>
         </div>
         <div class='homepart2two'>
            <h1>حلقات جديدة</h1>

            <div class='Homeserieep'>
            <Slidereseries />
            </div>

            <div class='homepart2three'>
            <h1>اروع الافلام</h1>
            <div class='Homeserieep'>
              <Slidereseries />
            </div>
            </div>

            <div class="homepart2four">
             <img src='./meh.gif' />

             <div class='homepart2four1'></div>
             <div class="socialmediap">
             <p>يمكنكم متابعتنا عبر مواقع التواصل الاجتماعي</p>
             </div>
             <div className='homesocialmedia'>
             <a href='https://www.facebook.com/Mehmetcik.M'><img src='./facebook.png' /></a>
             <a href="https://www.youtube.com/@mehmetcik1arab"><img src='./youtube.png' /></a>
             <a href='https://www.instagram.com/mehmetcik.arab/'><img src='./instagram.png' /></a>
             </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Homees