
import React from 'react';

const LatestPackage = () => {
    return (
        <div className=' pb-2 '>
            <h1 className='text-center pt-8 pb-2 font-bold text-3xl'>Latest Packages</h1>
            <p className='text-center pb-8 font-medium text-gray-500'>Step into History with Aslan Adventures Walk through time as you explore Rajasthan’s grand forts and the iconic Golden Triangle cities. </p>

            <div className="flex flex-col md:flex-row items-center gap-4 border backdrop-blur-lg shadow-lg bg-white bg-opacity-30 p-4 m-4 rounded-lg w-full max-w-3xl mx-auto  ">
                <div className="w-full md:w-1/3 ">
                    <img
                        src="https://tse2.mm.bing.net/th/id/OIP.cepYfCKdfL_afBMQqZsRywHaEJ?w=626&h=351&rs=1&pid=ImgDetMain&o=7&rm=3"
                        alt="Loding..."
                        className="w-full h-auto object-cover rounded hover:scale-105 duration-200"
                    />
                </div>

                <div className="w-full md:w-1/3 text-center md:text-left  ">
                    <h2 className="text-xl font-semibold mb-2">Jesalmear Golden City</h2>
                    <h3 className='text-lg font-semibold text-pink-500'>Udaipur, the City of Lakes</h3>
                    <li className='font-semibold'> 6 Days / 5 Nights</li>
                    <li className='font-semibold'> Jesalmear Rajajsthan</li>
                </div>

                <div className="w-full md:w-1/3 text-center md:text-right">
                    <p className="text-lg font-bold"> ₹ Price Start - <br /> <span className='text-pink-500'> 949.99</span> </p>
                    <br />
                    <button className=' bg-pink-500 text-white py-2 px-4 rounded hover:bg-pink-600 transition hover:scale-105 duration-200'>View Details</button>
                </div>
            </div>
        </div>
    );
};

export default LatestPackage;
