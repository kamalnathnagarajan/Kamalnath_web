import ResumeImg from '../assets/resume.png'
export default function Resume () {
    const config = {
        link: 'https://drive.google.com/file/d/129Hg1kt9L3QdLN6YntfargO1b-UHOCE8/view?usp=sharing'
    }
    return <section id='resume' className='flex flex-col md:flex-row bg-primary px-5'>
        <div className='py-5 md:w-1/2 flex justify-center md:justify-end'>
            <img className='w-[300px]' src= {ResumeImg} alt="Descriptive text"/>
        </div>
        <div className='md:w-1/2 flex justify-center text-white'>
            <div className='flex flex-col justify-center'>
                <h1 className='text-4xl border-b-2 border-secondary mb-5 w-[130px] font-bold'>Resume</h1>
                <p className='py-5'>You can view my Resume <a className='btn' href = {config.link}>Download</a></p>
                
            </div>
        </div>
    </section>
}
