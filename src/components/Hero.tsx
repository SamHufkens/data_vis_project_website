import { FaArrowDown } from 'react-icons/fa'

const Hero = () => {
  return (
    <div className="relative mt-20">
        <img
            src="/assets/clip-left.png"
            alt="Clip left"
            className="hidden md:block md:absolute top-28 left-[-185px] z-0 w-[200px]"
        />
        <img
            src="/assets/clip-right.png"
            alt="Clip left"
            className="hidden md:block md:absolute top-10 right-[-183px] z-0 w-[150px]"
        />
        <div className='ml-5 md:ml-0 md:text-center'>
            <h1 className='text-2xl md:text-7xl line-clamp-none font-semibold z-10'>
                Analyzing Factors Influencing <br /> the <span className='text-primary'>Box Office</span> of a Movie
            </h1>
            <p className='my-5 text-sm md:text-lg opacity-75 z-10'>
                An In-Depth Analysis of Factors Influencing <br /> The Box Office from 1920 to 2020
            </p>
            <p className='text-sm md:text-md mb-5 z-10'>By Sam Hufkens, Kadir, Jorge, Ylias</p>
            <div className='md:flex md:justify-center z-10'> 
                <a href='#intro'>
                    <button type="button" className="flex items-center gap-2 text-white bg-primary hover:bg-blue-500 transition font-medium rounded text-sm px-5 py-2.5 me-2 mb-2">
                        <FaArrowDown /> Let's Start
                    </button>
                </a>
            </div>
        </div>
    </div>
  )
}

export default Hero