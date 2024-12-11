

type Props = {
    title: string,
    subtitle?: string
}

const TitleSection = ({title, subtitle}: Props) => {
  return (
    <div>
      <h1 className="text-4xl">{title}</h1>
      <h3 className="my-2 text-gray-700 text-xl">{subtitle}</h3>
      <hr className="w-24 h-1 my-5 bg-primary border-0" />
      
    </div>
  )
}

export default TitleSection