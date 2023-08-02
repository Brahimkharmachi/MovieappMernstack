import React, { useEffect, useState } from 'react'
import "./header.css"

function Headerss() {

    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        if (window.pageYOffset > 0) {
          setIsSticky(true);
        } else {
          setIsSticky(false);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);


  return (
    
    <div>
    
    <nav class="navone">
        <a>يرحب بزواره الكرام Mehmetçik موقع محمدشيك </a>
    </nav>
    
    <nav class="navtwo">
      <div class="nav-two">
      <ul class="navbar-nav d-flex flex-row" >
                <li class="nav-item me-3 me-lg-0">
                    <a class="nav-link" href="https://www.facebook.com/brahim.kharmachi.92/">
                        <i class="fab fa-facebook-f text-blue"></i>
                    </a>
                </li>
                <li class="nav-item me-3 me-lg-0">
                    <a class="nav-link" href="https://www.instagram.com/brahim_kharmachi/">
                        <i class="fab fa-instagram text-blue"></i>
                    </a>
                </li>
                <li class="nav-item me-3 me-lg-0">
                    <a class="nav-link" href="https://www.linkedin.com/in/brahim-kharmachi-1993kb/">
                        <i class="fab fa-linkedin text-blue"></i>
                    </a>
                </li>
                <li class="nav-item me-3 me-lg-0">
                    <a class="nav-link" href="#">
                        <i class="fab fa-whatsapp text-blue"></i>
                    </a>
                </li>
                </ul>
                <a>! للمزيد تابعوننا</a>
      </div>         
    </nav>
    
    <div class="flexcenter">
    <nav class={isSticky ? 'sticky' : ''}>
          <div class="navthree">
          
          <div class='linknav' >
            <ul>
            <li>
                <a href='/contact'>تواصل معنا</a>
              </li>
            <li>
                <a href='/article'>مقالات</a>
              </li>
            <li>
                <a href='/movies'>افلام</a>
              </li>
            <li>
                <a href='/series'>مسلسلات</a>
              </li>
              <li>
                <a href='/'>الصفحة الرئسية</a>
              </li>
            </ul>
          </div>
          <div class='logonavthree'>
            <a href='/'> <img  src='./mehmetciik.gif' alt='logonavthree'  /> </a>
          </div>  
          </div>
    </nav>
    </div>
    
    </div>
  )
}

export default Headerss