import NavBar from '../components/NavBar'
import Hero from '../components/Hero'
import IntroSection from '../components/IntroSection'
import VisualizationSection from '../components/VisualizationSection'
import { ReactNode } from 'react'
import Footer from '../components/Footer'
import ConclusionSection from '../components/Conclusion'

type Visualization = {
  id: string,
  title: string,
  text: string,
  caption: string,
  visualization: ReactNode | string,
  link_to_dataset: string,
  link_to_protocol: string
}

const HomePage = () => {

  const visualizations = [
    {
      id:"vis1",
      title: "Box Office Evolution from 2000 to 2023",
      text: "There is a general upward trend until 2019, reflecting steady growth and the impact of blockbuster releases like 'Avatar'. The sharp decline in 2020 due to the Covid-19 pandemic highlights the industry's vulnerability to global events. However, the recovery from 2021 onwards demonstrates the industry's resilience, with revenues returning to pre-pandemic levels by 2023.",
      caption:"This graph shows box office trends from 2000 to 2023.",
      visualization: (
        <iframe
        src="https://flo.uri.sh/visualisation/20146412/embed"
        title="Interactive or visual content"
        className="flourish-embed-iframe"
        style={{ width: "100%", height: "600px" }}
        sandbox="allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation"
      ></iframe>
      ),
      link_to_dataset: "https://drive.google.com/file/d/1TjyO3f3FYkXn-qiEyqQzPMOzFB4xvKE_/view?usp=sharing",
      link_to_protocol: "/protocol1",
    },
    {
      id:"vis2",
      title: "Influence of Genres and Directors",
      text: "High-earning genres like Action, Adventure, and Family consistently bring in large audiences and substantial revenues. Top directors in these genres, such as James Cameron for Action and the Russo brothers for Adventure, show that well-known directors can boost box office success. Similarly, family films directed by Chris Buck and Jennifer Lee, and animated films by directors like Kyle Balda, highlight the financial potential of these genres. Even in Comedy, directors like Greta Gerwig show that this genre can achieve significant earnings. Overall, both the genre and the reputation of directors play crucial roles in attracting large audiences and driving box office earnings.",
      caption:"This treemap highlights the influence of key genres and directors.",
      visualization: (
        <iframe
        src="https://flo.uri.sh/visualisation/20146787/embed"
        title="Interactive or visual content"
        className="flourish-embed-iframe"
        style={{ width: "100%", height: "600px" }}
        sandbox="allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation"
      ></iframe>
      ),
      link_to_dataset: "https://drive.google.com/file/d/1TjyO3f3FYkXn-qiEyqQzPMOzFB4xvKE_/view?usp=sharing",
      link_to_protocol: "/protocol2",
    },
    {
      id:"vis3",
      title: "Best Month to Release a Movie",
      text: "The box office revenue from 2000 to 2023 shows clear seasonal trends, with significant peaks during summer (May to July) and the holiday season (November and December). These times coincide with school vacations and holidays, leading to higher movie attendance. Action, adventure and Animation are genres that dominate the box office, almost every month. Monthly revenue variations show lower earnings in January and February, an increase in March and April due to spring break, and a decline in August and September post-summer. October sees a slight uptick, maybe because of Halloween.",
      caption:"This bar chart shows all the months with their avgerage box office combined with genres from 2000 to 2023.",
      visualization: (
        <iframe
        src="https://flo.uri.sh/visualisation/20395126/embed"
        title="Interactive or visual content"
        className="flourish-embed-iframe"
        style={{ width: "100%", height: "600px" }}
        sandbox="allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation"
        ></iframe>
      ),
      link_to_dataset: "https://drive.google.com/file/d/1TjyO3f3FYkXn-qiEyqQzPMOzFB4xvKE_/view?usp=sharing",
      link_to_protocol: "/protocol3",
    },
    {
      id:"vis4",
      title: "Budget vs Box Office",
      text: "There is a positive correlation between a movie's budget and its box office revenue, indicating that higher-budget films generally earn more. However, the variability within this trend highlights the inherent risks and the potential for lower-budget films to achieve substantial success if they resonate well with audiences.",
      caption:"This scatter plot shows the relation between director's experience and box office",
      visualization: (
        <iframe
        src="https://flo.uri.sh/visualisation/20243560/embed"
        title="Interactive or visual content"
        className="flourish-embed-iframe"
        style={{ width: '100%', height: '600px' }}
        sandbox="allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation"
        ></iframe>
      ),
      link_to_dataset: "https://drive.google.com/file/d/1TjyO3f3FYkXn-qiEyqQzPMOzFB4xvKE_/view?usp=sharing",
      link_to_protocol: "/protocol4",
    }
  ]


  return (
    <div>
      <div className="max-w-6xl mx-auto">
          <NavBar />
          <Hero />
          <div id='intro'>
            <IntroSection />
          </div>
          {
            visualizations.map((vis: Visualization) => (
              <div id={vis.id}>
                  <VisualizationSection 
                    title={vis.title} 
                    text={vis.text} 
                    caption={vis.caption}
                    visualization={vis.visualization} 
                    link_to_dataset={vis.link_to_dataset}
                    link_to_protocol={vis.link_to_protocol}/>
              </div>
            ))
          }
          <div id='conclusion'>
            <ConclusionSection />
          </div>
          <Footer />
      </div>
      <p className="w-full h-2 bg-primary mt-14"></p>
    </div>
    
  )
}

export default HomePage