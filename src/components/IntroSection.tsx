import TitleSection from "./TitleSection"


const IntroSection = () => {
  return (
    <div className="mt-60 text-justify">
        <TitleSection title="Introduction"/>
        <p className="text-justify">
        In this project, we delve into the dynamics of the film industry by analyzing various factors that influence the box office performance of movies. Using the TMDB Movies dataset from Kaggle, which spans from 2000 to 2023 and includes 28 variables, our goal is to provide insights into factors influencing box office success enabling professionals to optimize movie production.
        </p>
        <p>Our research questions are:</p>
        <ul className="list-disc list-inside ml-4">
          <li>What is the best month to release a movie?</li>
          <li>Does a movie’s budget influence its box office performance?</li>
          <li>What is the evolution of total box office revenue from 2000 to 2023?</li>
          <li>How do top directors contribute to box office performance across various genres?</li>
        </ul>
        <p>Like mentioned before this project is designed for film industry professionals, including directors, producers, and investors. The goal is to provide actionable insights that can inform strategic decision-making regarding production, marketing, and release strategies, ultimately enhancing the financial performance of future film projects.</p>
    </div>
  )
}

export default IntroSection