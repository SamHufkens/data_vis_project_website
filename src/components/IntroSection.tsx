import TitleSection from "./TitleSection"


const IntroSection = () => {
  return (
    <div className="mt-60 text-justify">
        <TitleSection title="Introduction"/>
        <p className="text-justify">
        In this project, we delve into the dynamics of the film industry by analyzing various factors that influence the box office performance of movies. Using the TMDB Movies dataset from Kaggle, which spans from 2000 to 2023 and includes 28 variables, our primary focus is on key determinants of a movie's success, as measured by its box office revenue.
        </p>
        <p>The main objectives are:</p>
        <ul className="list-disc list-inside ml-4">
          <li><span className="font-bold">Identifying Key Genres:</span> Exploring which genres consistently perform well and attract large audiences.</li>
          <li><span className="font-bold">Evaluating Director Impact:</span> Assessing how top directors contribute to the box office success across different genres.</li>
          <li><span className="font-bold">Analyzing Budget Influence:</span> Investigating the relationship between a movie's budget and its box office returns.</li>
          <li><span className="font-bold">Optimal Release Timing:</span> Determining the best months for releasing movies to maximize box office revenue.</li>
        </ul>
        <p>This project is designed for film industry professionals, including directors, producers, and investors. The goal is to provide actionable insights that can inform strategic decision-making regarding production, marketing, and release strategies, ultimately enhancing the financial performance of future film projects.</p>
    </div>
  )
}

export default IntroSection