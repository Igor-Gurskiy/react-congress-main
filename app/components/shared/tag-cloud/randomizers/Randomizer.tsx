import {
	MyLowerRandomizer,
	MyUpperRandomizer,
} from '@/components/screens/vichy/tag-cloud/test-cloud/MyRandomizer'
import { ArchimedeanRandomRandomizer } from '@alesmenzel/cloud-react'
import { Word } from '@/components/shared/tag-cloud/use-my-cloud'

export const LOWER_RANDOMIZER = new MyLowerRandomizer<Word>({
	width: 100,
	height: 100,
})
export const UPPER_RANDOMIZER = new MyUpperRandomizer<Word>({
	width: 100,
	height: 100,
})

export const RANDOMIZER = new ArchimedeanRandomRandomizer<Word>({
	width: 50,
	height: 50,
})
