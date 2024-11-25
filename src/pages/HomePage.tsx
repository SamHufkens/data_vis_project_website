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
      text: "From 2000 to 2023, the box office has a steady increase. There are some significant spikes, like for example in 2009 with the release of ‘Avatar’ which is the highest-grossing movie of all time. There is a sharp decline due to Covid-19, because theaters were closed, but there was a rapid recovery as theaters reopened from 2021 onwards. Overall the trends indicates growing interest in movies.",
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
      link_to_dataset: "https://drive.google.com/file/d/1pCSezlJmi1oEu9icgm-IVzZVUADN1Tks/view?usp=sharing",
      link_to_protocol: "/protocol1",
    },
    {
      id:"vis2",
      title: "Genres and Directors",
      text: "Adventure and Action movies have dominated the box office from 2000 to 2023, generating the highest average revenue. In the Adventure genre, top-performing directors include Anthony Russo and Joe Russo, likely due to their success with the Avengers franchise, followed by J.J. Abrams. For Action films, James Cameron leads, reflecting the impact of blockbuster hits like 'Avatar', along with notable directors like Colin Trevorrow and Jon Watts. Some directors, like Peter Jackson, stand out for their versatility, excelling across multiple genres such as Adventure, Action, and Fantasy. Family-friendly animated movies directed by Michael Jelenic and Aaron Horvath demonstrate substantial popularity, similarly for Jennifer Lee and Chris Buck. In Comedy, Greta Gerwig and Phyllida Lloyd achieve significant success, showcasing the genre's strong performance.",
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
      link_to_dataset: "https://drive.google.com/file/d/1pCSezlJmi1oEu9icgm-IVzZVUADN1Tks/view?usp=sharing",
      link_to_protocol: "/protocol2",
    },
    {
      id:"vis3",
      title: "Best Month to Release a Movie",
      text: "The chart highlights that May has the highest box office revenues, with significant contributions from genres like Action and Adventure. June and July also show strong performance, benefiting from the summer movie season. January has the lowest average box office revenue, indicating it might not be the ideal month for releases aimed at high financial returns.",
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
      link_to_dataset: "https://drive.google.com/file/d/1pCSezlJmi1oEu9icgm-IVzZVUADN1Tks/view?usp=sharing",
      link_to_protocol: "/protocol3",
    },
    {
      id:"vis4",
      title: "Budget vs Box Office",
      text: "There is a positive correlation between budget and box office, indicating that movies with higher budgets tend to generate higher revenues. This suggests that substantial investments could lead to significant returns, but this is not always the case (Joker 2, Red One, …). There are also a few outliers who have high revenue compared to their low budget.",
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
      link_to_dataset: "https://drive.google.com/file/d/1pCSezlJmi1oEu9icgm-IVzZVUADN1Tks/view?usp=sharing",
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