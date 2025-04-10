import developer1Img from '../assets/developer1.png';
export default function About () {
    const config = {
        line1: 'I’m Kamalnath, a Full Stack Developer with a strong focus on Python and Cloud Technologies. I specialize in building scalable, high-performance web applications, ensuring efficiency, security, and a seamless user experience.',
        line2:'hands-on experience in cloud architecture and software engineering, I have earned AWS certifications and worked on projects that integrate modern web technologies. I enjoy solving complex problems and developing innovative solutions that align with industry best practices.',
        line3:'Driven by a passion for technology, I constantly explore new tools and frameworks to enhance my skills and stay ahead in the ever-evolving tech landscape.',

    }
    return <section className='flex flex-col md:flex-row bg-primary px-5'id='about'>
        <div className='py-5 md:w-1/2'>
            <img src= {developer1Img} alt="Descriptive text"/>
        </div>
        <div className='md:w-1/2 flex justify-center text-white'>
            <div className='flex flex-col justify-center'>
                <h1 className='text-4xl border-b-2 border-secondary mb-5 w-[170px] font-bold'>About Me</h1>
                <p className='pb-5'>{config.line1}</p>
                <p className='pb-5'>{config.line2}</p>
                <p className='pb-5'>{config.line3}</p>
                <p>Let’s connect and collaborate on exciting projects 🚀.</p>
            </div>
        </div>
    </section>
}