import { FaChevronLeft } from "react-icons/fa"
import NavBar from "../components/NavBar"
import TitleSection from "../components/TitleSection"


function ProtocolPage2() {
  
    return (
      <div>
        <div className="max-w-6xl mx-auto">
          <NavBar />
          <div className="ml-4 mt-8">
            <a href="/">
              <div className="flex items-center mb-2">
                <FaChevronLeft size={25}/>
                <p>Back</p>
              </div>
            </a>
            <TitleSection title="Protocol for 'Director and Genre'"/>
            <div>
              <p className="font-semibold">Timestamp</p>
              <p>2000-2023</p>
            </div>
            <div>
              <p className="font-semibold">Data source</p>
              <ul className="list-disc list-inside ml-4">
                <li>
                  <a href="https://www.kaggle.com/datasets/alanvourch/tmdb-movies-daily-updates">
                    TMDB Movies Dataset (kaggle)
                  </a>
                </li>
                <li>
                  <a href="https://drive.google.com/file/d/1z2OimV4BUOVgUstVIv-T31JrIdXxCjPJ/view?usp=sharing">
                    Preprocessed Dataset
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="font-semibold">Protocol</p>
              <ol className="ml-2">
                <li>1. Selected necessary columns</li>
                <li>2. Dropped rows with missing values</li>
                <li>3. Selected primary genre for each movie</li>
                <li>4. Selected movies between the years 2000 and 2023 (included)</li>
                <li>5. Dropped rows where runtime is 0.0</li>
                <li>6. Dropped rows where budget is 0.0</li>
                <li>7. Selected top 5 genres and calculated sum of revenue for each genre</li>
                <li>8. Selected top 10 directors for each genre and calculated sum for each director</li>
              </ol>
            </div>
           
          </div>
        </div>
      </div>
    )
  }
  
  export default ProtocolPage2
  