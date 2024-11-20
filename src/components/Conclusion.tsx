import TitleSection from "./TitleSection"


const ConclusionSection = () => {
  return (
    <div className="mt-32">
        <TitleSection title="Conclusion"/>
        <p className="font-bold">Evolution from 2000 to 2023</p>
        <p className="text-justify">
          experienced a general upward trend until 2019, reflecting steady growth and the impact of blockbuster releases like "Avatar." The sharp decline in 2020 due to the Covid-19 pandemic highlights the industry's vulnerability to global events. However, the recovery from 2021 onwards demonstrates the industry's resilience, with revenues returning to pre-pandemic levels by 2023.
        </p>
        <p className="font-bold mt-1">Best Month to Release a Movie</p>
        <p className="text-justify">
          July emerged as the optimal month for movie releases, achieving the highest average box office revenue. The summer vacation period significantly boosts audience attendance. December and June also show strong performance, benefiting from holiday season viewership and the start of summer.
        </p>
        <p className="font-bold mt-1">Influence of Genres and Directors</p>
        <p className="text-justify">
        Action, Adventure, Animation, Comedy, and Drama were identified as the top-performing genres. Directors like Jon Watts (Action), Joe Russo & Anthony Russo (Adventure), Carlos Saldanha (Animation), and Todd Phillips (Comedy) consistently achieved high box office success within these genres.
        </p>
        <p className="font-bold mt-1">Budget Influence on Box Office</p>
        <p className="text-justify">
        There is a positive correlation between a movie's budget and its box office revenue, indicating that higher-budget films generally earn more. However, the variability within this trend highlights the inherent risks and the potential for lower-budget films to achieve substantial success if they resonate well with audiences.
        </p>
        <p className="font-bold mt-1">Recommendations for producers</p>
        <ul className="list-disc list-inside ml-4">
          <li>Target high-performing months like July, December and June for movie releases. So during the summer vacation or hiday season.</li>
          <li>Focus on profitable genres and collaborate with directors who already have proven themselves in that genre.</li>
          <li>Investing heavily in a movie's budget can significantly boost its box office potential. However, historical data shows that higher budgets don't always guarantee success, as other factors like marketing and audience reception also play crucial roles. </li>
        </ul>
    </div>
  )
}

export default ConclusionSection