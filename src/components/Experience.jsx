import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component"
import { motion } from "framer-motion"
import "react-vertical-timeline-component/style.min.css"

import { styles } from "../styles"
import { experiences } from "../constans"
import SectionWrapper from "../Hoc/SectionWrapper"
import { textVariant } from "../utils/motion"

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{ background: "#1d1836", color: "#fff" }}
      contentArrowStyle={{ borderRight: "7px solid #262331" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="flex justify-center items-center">
          <img src={experience.icon} alt={experience.company_name} className="size-full object-contain" />
        </div>
      }
    >
      <div>
        <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
        <p className="text-secondary font-semibold text-[16px]">{experience.company_name}</p>
      </div>
      <ul className="mt-5 ml-5 list-disc space-y-2">
        {experience.points.map((point, index) => (
          <li className="text-white-100 pl-1 tracking-wider text-[14px]" key={`experience-point-${index}`}>
            {point}
          </li>
        ))}
      </ul>
      
    </VerticalTimelineElement>
  )
}


const Experience = () => {
  return (
    <>
      <motion.div>
        <p className={styles.sectionSubText}>What I have done</p>
        <h2 className={styles.sectionHeadText}>Work Experince</h2>
      </motion.div>
      <div className="flex flex-col mt-20">
        <VerticalTimeline >
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  )
}

export default SectionWrapper(Experience, "work")