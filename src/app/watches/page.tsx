import React from 'react'

const Watches = () => {
    const watchData = [
        { id: 1, name: 'Rolex',price: 60000, description: 'Luxury Watch', image:'/03.jpg'},
        { id: 2, name: 'Citizen',price: 80000, description: 'Stylish Watch', image:'/04.jpg'},
        { id: 3, name: 'Chanel',price: 40000, description: 'Bold Watch', image:'/02.jpg'},
        { id: 4, name: 'Omega',price: 50000, description: 'Sporty Watch', image:'/05.jpg'},
        { id: 5, name: 'Seiko',price: 65000, description: 'Elegant Watch', image:'/06.jpg'},
        { id: 6, name: 'Royal',price: 20000, description: 'Affortable Watch', image:'/08.jpg'},
      ]
  return (
    <div className='watches grid grid-cols-1 md:grid-cols-3 gap-10 px-10 my-10 '>
        {watchData.map(watch => (
            <div key={watch.id} className='watch-card bg-gray-300 p-5 rounded-md text-center'>
            <img src={watch.image} alt={watch.name} className='w-full rounded-md transition-transform duration-300 transfprm hover:scale-110' />
            <h3 className='mt-4 text-2xl font-bold'>{watch.name}</h3>
            <p className='text-gray-500'>{watch.description}</p>
            <div className='price text-blue-500 text-xl font-semibold mt-2 '>${watch.price}</div>
            <button className='mt-4 px-4 py-2 bg-blue-500 hover:bg-gray-500 text-white rounded-md'>Add to Cart</button>
                </div>

        ))}
      
    </div>
  );
};

export default Watches;
