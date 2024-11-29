import React from 'react'

const About = () => {
  return (
    <section className='about h-screen flex items-center justify-start bg-cover bg-center text-white px-10' style={{ backgroundImage: "url(01.jpg)"}}>
        <div className='bg-black bg-opacity-60 p-8 rounded-md max-w-lg'>
            <h2 className='text-4xl font-bold mb-4' data-aos="fade-up">About Us</h2>
            <p>Welcome to Awesome Watches Discover the perfect blend of style precision and craftsmanship with Awesome Watches. We offer an exclusive collection of timepieces designed for those who value elegance and functionality. Whether you're looking for a sleek modern design a classic vintage style or a rugged sports watch we have something for everyone.
Each watch in our collection is crafted with meticulous attention to detail & using high-quality materials to ensure durability and timeless appeal. Explore our categories read reviews and find the watch that fits your personality and lifestyle.Time waits for no one—start your journey to timeless style with Awesome Watches today!</p>

        </div>

    </section>
  );
};

export default About;
