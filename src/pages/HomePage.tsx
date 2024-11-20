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
      link_to_dataset: "/public/dataset+metadata.zip",
      link_to_protocol: "/protocol1",
    },
    {
      id:"vis2",
      title: "Genres and Directors",
      text: "Action and Adventure movies have dominated the box office from 2000 to 2023, generating the highest total revenue. In the Action genre, top-performing directors include Jon Watts and Zack Snyder. For Adventure films, the Russo Brothers lead, likely due to their success with the Avengers franchise, followed by Peter Jackson, known for The Lord of the Rings and The Hobbit series. Some directors, like Christopher Nolan, stand out for their versatility, excelling across multiple genres such as Action, Adventure, and Drama. Family-friendly animated movies directed by Carlos Soldanha, demonstrate substantial popularity. The same for Tod Phillips in comedy movies.",
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
      link_to_dataset: "/public/dataset+metadata.zip",
      link_to_protocol: "/protocol2",
    },
    {
      id:"vis3",
      title: "Best Month to Release a Movie",
      text: "To achieve high box office revenue, July is the optimal month for releasing a movie. If July isn’t an option, December and June are also excellent choices. However, releasing a movie in January might not be the best strategy if maximizing box office revenue is the primary goal.",
      caption:"This bar chart shows all the months with their avgerage box office from 2000 to 2023.",
      visualization: (
        <iframe
        src="https://flo.uri.sh/visualisation/20395126/embed"
        title="Interactive or visual content"
        className="flourish-embed-iframe"
        style={{ width: "100%", height: "600px" }}
        sandbox="allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation"
        ></iframe>
      ),
      link_to_dataset: "/public/dataset+metadata.zip",
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
      link_to_dataset: "/public/dataset+metadata.zip",
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