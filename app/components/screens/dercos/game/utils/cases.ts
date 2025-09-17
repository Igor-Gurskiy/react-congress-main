import ModalService from '@/components/shared/modal/ModalService'
import ClinicalCase from '@/components/screens/dercos/game/components/СlinicalСase'

export const handleCaseOne = ModalService.open.bind(null, ClinicalCase, {
	srcOne: '/assets/images/dercos/linegame/cases/case__one-before.png',
	srcTwo: '/assets/images/dercos/linegame/cases/case__one-after.png',
	doctor: 'Медецкая Ольга Михайловна, Санкт-Петербург',
	patient: 'Муж., 36',
	lastDay: '28',
})

export const handleCaseTwo = ModalService.open.bind(null, ClinicalCase, {
	srcOne: '/assets/images/dercos/linegame/cases/case__two-before.png',
	srcTwo: '/assets/images/dercos/linegame/cases/case__two-after.png',
	doctor: 'Абдулхалимова Эльвира Абдулхалимовна, Пятигорск',
	patient: 'Муж., 18',
	lastDay: '28',
})

export const handleCaseThree = ModalService.open.bind(null, ClinicalCase, {
	srcOne: '/assets/images/dercos/linegame/cases/case__three-before.png',
	srcTwo: '/assets/images/dercos/linegame/cases/case__three-after.png',
	doctor: 'Гришина Анна Николаевна, Томск',
	patient: 'Жен., 21',
	lastDay: '21',
})

export const handleCaseFour = ModalService.open.bind(null, ClinicalCase, {
	srcOne: '/assets/images/dercos/linegame/cases/case__four-before.png',
	srcTwo: '/assets/images/dercos/linegame/cases/case__four-after.png',
	doctor: 'Гашигуллина Динара Ринатовна, Казань',
	patient: 'Муж., 39',
	lastDay: '30',
})

export const handleCaseFive = ModalService.open.bind(null, ClinicalCase, {
	srcOne: '/assets/images/dercos/linegame/cases/case__five-before.png',
	srcTwo: '/assets/images/dercos/linegame/cases/case__five-after.png',
	doctor: 'Измайлович Марина Рашидовна, Караганда',
	patient: 'Муж., 21',
	lastDay: '46',
})
