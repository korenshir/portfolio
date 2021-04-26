import react from 'react'
import image from '../612.jpg'
export default function Home() {
    return (
    <main>
        <img src={image} alt="" className="absolute object-cover w-full h-full"/>
        <section className="relative flex justify-center min-h-screen pt-12 lg:pt-40 px-8">
            <h1 className="text-3xl text-green-100 font-bold cursive leading-none home-name">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                Portfolio.
            </h1>
        </section>
        
    </main>
    );
}