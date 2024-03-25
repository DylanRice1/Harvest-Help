import React from "react";
import { Link } from "react-router-dom";
import bg from '../assets/gardening-hands.jpg';
import { containerStyle, imgStyle, overlayStyle, fontStyle } from '../styling/landingStyling';

function Home() {
    return (
            <div className="mx-auto" style={containerStyle}>
                <img src={bg} alt="Background" style={imgStyle} className='object-scale-down' />
                <div style={overlayStyle}></div>
                <div style={fontStyle}>
                    <h1 className="font-sora text-7xl pt-[22rem] pl-24 pr-24">Ready To</h1>
                    <h1 className="font-sora text-7xl pl-24 pr-24" style={{ color: '#c6ac8f' }}>Make An Impact?</h1>
                    <p className="font-sora pl-24 pr-24 mt-6" style={{ fontWeight: 400 }}>Join Our Budding Community and Cultivate Positive Change.</p>
                    <div className="pl-24 mt-6 flex items-center">
                        <Link to="/explore" className="w-[16rem] py-[6px] rounded-3xl bg-[#588157] hover:bg-[#a3b18a] mr-6 text-white text-center flex items-center justify-center">Find A Project</Link>
                    </div>
                </div>
            </div>
    );
}

export default Home;