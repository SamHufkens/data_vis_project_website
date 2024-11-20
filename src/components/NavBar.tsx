import { FaChartBar, FaDownload } from "react-icons/fa";

const NavBar = () => {
  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="mt-4 p-5 flex flex-wrap items-center justify-between">
        <a href="/" className="flex items-center gap-2">
            <FaChartBar size={27}/>
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Visualization Project</span>
        </a>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col items-center p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white">
            <li>
              <a href="#intro" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-primary md:p-0">Intro</a>
            </li>
            <li>
              <a href="#vis1" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-primary md:p-0">Visualizations</a>
            </li>
            <li>
              <a href="https://www.kaggle.com/datasets/alanvourch/tmdb-movies-daily-updates" className='bg-primary hover:bg-blue-500 transition text-white rounded px-3 py-2 flex items-center gap-2'>
                <FaDownload size={15}/>
                Dataset
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

  )
}

export default NavBar