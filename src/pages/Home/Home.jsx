import React from 'react';

const Home = () => {
    return (
        <section className='home'>
            <div className="container">
                <div className="home__send">
                    <textarea readOnly  cols="30" rows="10" className="home__output"/>
                    <label className="home__label">
                        <input placeholder='Enter message' type="text" className="home__input"/>
                    </label>
                    <button className="home__btn">Send</button>
                </div>
            </div>
        </section>
    );
};

export default Home;