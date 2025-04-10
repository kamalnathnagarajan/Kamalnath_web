import websiteImg1 from '../assets/Todo list.png'
import websiteImg2 from '../assets/calculator1.png'
import websiteImg3 from '../assets/Ecommerce.png'

export default function Hero(){
    const config = {
        Hero :[
            {
                image: websiteImg1 ,
                description:'Created a Web To-Do List using HTML, CSS, and JavaScript to manage tasks efficiently.',
                link:'https://github.com/kamalnathnagarajan/To-Do-list',
            },
            {
                image: websiteImg2,
                description:'Developed a responsive Web Calculator using HTML, CSS, and JavaScript for basic arithmetic operations.',
                link:'https://github.com/kamalnathnagarajan/Web-calculator',
            },
            {
                image: websiteImg3,
                description:'A Ecommerce website. Build with MERN stack. #coming soon.',
                link:'',
            }
            
        ]
    }
    return <section id='hero' section className=" flex flex-col py-20 px-5 justify-center bg-secondary text-white">
        <div className=" w-full">
            <div className=" flex flex-col px-10 py-5">
            <h1 className='text-4xl border-b-2 border-primary mb-5 w-[140px] font-bold'>
                Projects
            </h1>
            <p>Explore my projects built with HTML, Tailwind CSS, JavaScript, and React, showcasing modern, responsive, and high-performance web applications designed for seamless user experiences.</p>
            </div>   
        </div>
        <div className=" w-full">
            <div className='flex flex-col md:flex-row px-5 gap-5'>
                {config.Hero.map((Hero)=> (
                <a href= {Hero.link}>
                        <div className='relative'>
                        <img className='h-[200px] w-[500px]' src={Hero.image}/>
                        <div className='absolute left-0 right-0 bottom-0 top-0 bg-primary opacity-0 duration-500 hover:opacity-100'>
                        <p className='text-center px-5 py-6'>{Hero.description}</p>
                        <div className=' flex justify-center'>
                        <a className='btn' target='_blank' href = {Hero.link}>View Project</a>
                        </div>
                        </div> 
                    </div>
                </a>
                ))}
            </div>
        </div>
    </section>
}