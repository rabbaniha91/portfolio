import { motion } from 'framer-motion'

import { styles } from '../styles'
import { fadeIn, textVariant } from '../utils/motion'
import SectionWrapper from '../Hoc/SectionWrapper'
import { testimonials } from "../constans"



const FeedBackCard = ({ index, testimonial, name, designation, company, image }) => {
  return (
    <motion.div
      variants={fadeIn('', 'spring', index * 0.5, 0.75)}
      className='bg-black-200 rounded-2xl xs:w-[320px] w-full p-10'
    >
      <p className="text-white font-black text-[48px]">"</p>
      <div className="mt-1">
        <p className='text-white text-[18px] tracking-wider'>{testimonial}</p>
        <div className='mt-7 flex justify-between items-center gap-1'>
          <div className='flex-1 flex flex-col'>
            <p className='font-medium text-white text-[16px]'>
              <span className='blue-text-gradient'>@</span> {name}
            </p>
            <p className='mt-1 text-secondary text-[12px]'>
              {designation} of {company}
            </p>
          </div>
          <img src={image} alt={`feedback by ${name}`} className='size-10 rounded-full object-cover' />
        </div>

      </div>
    </motion.div>
  )
}
const Feedbacks = () => {
  return (
    <div className='mt-12 bg-black-100 rounded-[20px]'>
      <div className={`${styles.padding} bg-tertiary rounded-2xl min-h-[300px]`}>
        <motion.div variants={textVariant()}>
          <p className={`${styles.sectionSubText}`}>What other says</p>
          <h2 className={`${styles.sectionHeadText}`}>Testimonials</h2>
        </motion.div>
      </div>
      <div className={`-mt-20 pb-14 flex flex-wrap gap-7 ${styles.paddingX}`}>
        {testimonials.map((testimonial, index) => (
          <FeedBackCard
            key={testimonial.name}
            index={index}
            {...testimonial}
          />
        ))}
      </div>
    </div>
  )
}

export default SectionWrapper(Feedbacks, '')