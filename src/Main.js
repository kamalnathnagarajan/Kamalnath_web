import developer from './assets/developer.png';
import { AiOutlineTwitter , AiOutlineFacebook , AiOutlineLinkedin , AiOutlineInstagram ,} from "react-icons/ai";
import { FaStackOverflow } from "react-icons/fa6";
export default function main() {
    const config = {
      subtitle: 'I am a Full Stack Developer',
        social: {
        twitter:'https://x.com/n_kamalnath?t=C_P8i9prw_em_HHrHbc05A&s=09',
        facebook:'https://www.facebook.com/share/191YWXDSXe/',
        linkedin:'https://www.linkedin.com/in/kamalnath-n?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
        instagaram: 'https://www.instagram.com/kamalnath.?igsh=YmZvZ2x4ZTlhYnV6',
        stackoverflow:'https://stackoverflow.com/users/24821369/kamalnath-n'
      }
    }
    
  return <section className=' flex flex-col md:flex-row px-5 py-32 bg-secondary justify-center'>
      <div className='md:w-1/2 flex flex-col'> 
          <h1 className='w-1/2 text-white text-6xl font-developer-font'>Hi,<br/> I am <span className='text-black hover:text-white'>Kamal</span>nath
            <p className='text-2xl'>{config.subtitle}</p> 
          </h1>
          <div className='flex py-10'>
            <a href={config.social.twitter} className='pr-5 hover:text-white'> <AiOutlineTwitter size={40}/></a>
            <a href={config.social.facebook} className='pr-5  hover:text-white'> <AiOutlineFacebook size={40}/></a>
            <a href={config.social.linkedin} className='pr-5  hover:text-white'> <AiOutlineLinkedin size={40}/></a>
            <a href={config.social.instagaram} className='pr-5  hover:text-white'> <AiOutlineInstagram size={40}/></a>
            <a href={config.social.stackoverflow} className='pr-5  hover:text-white'> <FaStackOverflow size={40}/></a>
          </div>
    </div>  
      <img className='md:w-1/3' src={developer} alt="Developer" />
</section>
  ;
}
