

type Props = {
    title: string
}

const TitleSection = ({title}: Props) => {
  return (
    <div className="text-4xl">
      {title}
      <hr className="w-24 h-1 my-5 bg-primary border-0" />
    </div>
  )
}

export default TitleSection