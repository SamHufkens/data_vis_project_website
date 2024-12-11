import { ReactNode } from "react"
import TitleSection from "./TitleSection"


type Props = {
    title: string,
    subtitle: string
    text: string,
    caption: string,
    visualization: ReactNode | string,
    link_to_dataset: string,
    link_to_protocol: string
}

const VisualizationSection = ({title, subtitle, text, visualization, link_to_dataset, link_to_protocol, caption}: Props) => {
  return (
    <div className="mt-32">
        <TitleSection title={title} subtitle={subtitle}/>
        {typeof visualization === "string" ? (
          <img src={visualization} alt={title} style={{ width: "80%" }} />
        ) : (
          visualization
        )}
        <p className="text-xs italic">{caption}</p>
        <div className="flex items-center gap-6 text-sm mt-2">
          <a href={link_to_protocol} className="hover:underline">Visualization Protocol</a>
          <a href={link_to_dataset} className="hover:underline">Dataset</a>
        </div>
        <div className="mt-6 text-justify">
          {text}
        </div>
    </div>
  )
}

export default VisualizationSection