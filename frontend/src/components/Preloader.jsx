import React from 'react';

const Preloader = ({percentage}) => {
    const RenditionLogo = 'https://res.cloudinary.com/dspenamcg/image/upload/v1744107176/logo_mvjweh.png'
    return (

        <div className="relative w-full max-w-2xl px-8 flex flex-col items-center justify-center space-y-8">
            {/* Logo */}
            <div className="w-48 h-48 opacity-90">
                <img
                src={RenditionLogo}
                alt="Rendition Logo"
                className="w-full h-full object-contain"
                />
            </div>
            {/* Percentage Text */}
            <div className="loading-text text-white text-xl font-light tracking-wider ">
                Loading...
            </div>

            {/* Elegant Single Line Loader */}
            <div className="w-full h-[2px] relative overflow-hidden">
                <div
                className="absolute left-0 top-0 h-full bg-white transition-all duration-300 ease-linear"
                style={{
                    width: `${percentage}%`,
                    background: 'linear-gradient(to right, rgba(255,255,255,0.7), rgba(255,255,255,0.3))',
                    boxShadow: '0 0 15px rgba(255,255,255,0.3)'
                }}
                />
            </div>

        </div>
    );
}

export default Preloader;
