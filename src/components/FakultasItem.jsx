import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import FakultasCard from './fakultas/FakultasCard'

const FakultasItem = ({ image, title, slug, index }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 50 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }} transition={{ duration: 0.6, delay: index * 0.2 }}>
      <FakultasCard image={image} title={title} slug={slug} />
    </motion.div>
  )
}

export default FakultasItem
