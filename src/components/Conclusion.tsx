import TitleSection from "./TitleSection"


const ConclusionSection = () => {
  return (
    <div className="mt-32">
        <TitleSection title="Conclusion"/>
        <p className="font-bold">Evolution from 2000 to 2023</p>
        <p className="text-justify">
        There is a general upward trend until 2019, reflecting steady growth and the impact of blockbuster releases like "Avatar." The sharp decline in 2020 due to the Covid-19 pandemic highlights the industry's vulnerability to global events. However, the recovery from 2021 onwards demonstrates the industry's resilience, with revenues returning to pre-pandemic levels by 2023.
        </p>
        <p className="font-bold mt-1">Best Month to Release a Movie</p>
        <p className="text-justify">
        The box office revenue from 2000 to 2023 shows clear seasonal trends, with significant peaks during summer (May to July) and the holiday season (November and December). These times coincide with school vacations and holidays, leading to higher movie attendance. Action, adventure and Animation are genres that dominate the box office, almost every month. Monthly revenue variations show lower earnings in January and February, an increase in March and April due to spring break, and a decline in August and September post-summer. October sees a slight uptick, maybe because of Halloween.
        </p>
        <p className="font-bold mt-1">Influence of Genres and Directors</p>
        <p className="text-justify">
        High-earning genres like Action, Adventure, and Family consistently bring in large audiences and substantial revenues. Top directors in these genres, such as James Cameron for Action and the Russo brothers for Adventure, show that well-known directors can boost box office success. Similarly, family films directed by Chris Buck and Jennifer Lee, and animated films by directors like Kyle Balda, highlight the financial potential of these genres. Even in Comedy, directors like Greta Gerwig show that this genre can achieve significant earnings. Overall, both the genre and the reputation of directors play crucial roles in attracting large audiences and driving box office earnings.
        </p>
        <p className="font-bold mt-1">Budget Influence on Box Office</p>
        <p className="text-justify">
        There is a positive correlation between a movie's budget and its box office revenue, indicating that higher-budget films generally earn more. However, the variability within this trend highlights the inherent risks and the potential for lower-budget films to achieve substantial success if they resonate well with audiences.
        </p>
        <p className="font-bold mt-1">Recommendations for producers</p>
        <ul className="list-disc list-inside ml-4">
          <li>Focus on movie releases during the summer months (May to July) and the holiday season (November and December) to take advantage of the higher movie attendance during school vacations and holidays.</li>
          <li>Prioritize producing movies in Adventure, Action, Animation, Comedy, and Drama genres, as these have consistently generated high box office returns. Collaborate with top-performing directors within these genres to leverage their successful track records.</li>
          <li>Investing heavily in a movie's budget can significantly boost its box office potential. However, historical data shows that higher budgets don't always guarantee success, as other factors like marketing and audience reception also play crucial roles. </li>
        </ul>
    </div>
  )
}

export default ConclusionSection