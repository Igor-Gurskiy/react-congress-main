import { motion } from 'framer-motion'
import ScrollbarsBody from '@/components/ScollbarsBody'

const AnimatedContainer = ({ children, key = 'section', ...otherProps }) => {
	return (
		<motion.div
			key={key}
			initial={{  opacity: 0.7 }}
			animate={{  opacity: 1 }}
			exit={{  opacity: 0.7 }}
			transition={{
				ease: 'linear',
				duration: 0.3
				// type: 'spring',
				// stiffness: 260,
				// damping: 20,
			}}
			{...otherProps}
		>
			<ScrollbarsBody noRadius>{children}</ScrollbarsBody>
		</motion.div>
	)
}

export default AnimatedContainer
