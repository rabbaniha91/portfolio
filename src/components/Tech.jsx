import BallCanvas from "./canvas/Ball"
import { technologies } from "../constans"
import SectionWrapper from "../Hoc/SectionWrapper"

const Tech = () => {
  return (
    <div className="flex justify-center flex-row gap-10 flex-wrap">
      {technologies.map(technology => (
        <div className="size-28" key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
  )
}

export default SectionWrapper(Tech, "")