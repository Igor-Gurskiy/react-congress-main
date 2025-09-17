import { TagCloud } from 'react-tagcloud'
import { tags } from '@/utils/tags'

const dat = tags.map((t) => ({ ...t, value: t.text }))

const TestCloud = ({ data }) => (
	<TagCloud
		minSize={12}
		maxSize={128}
		tags={dat}
		shuffle={false}
		onClick={(tag) => alert(`'${tag.value}' was selected!`)}
	/>
)

export default TestCloud
