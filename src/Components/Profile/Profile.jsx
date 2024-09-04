import React from "react";
import './Profile.css'

const Home = () => {
    return <section class="home" id="home">
    <div class="home__container bd-grid">
        <h3 class="home__title">Welcome to my personal website</h3>

        <div class="home__scroll">
            <a href="#about" class="home__scroll-link"><i class='bx bx-up-arrow-alt' ></i>Scroll down</a>
        </div>
        <img src="/reactproject/src/img/Sof.jpg" alt="" class="home__img"></img>
    </div>
</section>
        
}

export default Home;