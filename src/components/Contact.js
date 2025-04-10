
export default function Contact () {

    const config = {
        email : 'kamalnathnagarajan198@gmail.com',
        Mobile : '7395869842'
    }
    return <section id='contact' className='flex flex-col  bg-secondary px-5 py-32 text-white'>
        
        <div className='flex flex-col items-center justify-center text-white'>
            <h1 className='text-4xl border-b-2 text-white border-primary  mb-5 w-[130px] font-bold'>Contact</h1>
            <p className='pb-5'> If You whant to discuss more in detail, please Contact me. </p>
            <p className='py-2'> <span className='font-bold'>Email : </span>{config.email}</p>
            <p className='py-2'> <span className='font-bold'>Mobile : </span>{config.Mobile}</p>
        </div>
    </section>
}