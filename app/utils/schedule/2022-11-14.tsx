import {ScheduleSectionType} from '@/components/Schedule/ScheduleSection'
import {EventsEnum} from "@/api/tracker";

const schedule: ScheduleSectionType[] = [
    {
        id: 2,
        name: (
            <>
                СЕКЦИЯ
                <br/>
                «ТРИХОЛОГИЯ»
            </>
        ),
        slug: 'trihology',
        start: 1668409200000,
        end: 1668429000000,
        live: true,
        calendar: true,
        visible: true,
        googleLink:
            'https://www.google.com/calendar/event?action=TEMPLATE&dates=20221114T070000Z%2F20221114T093000Z&text=%22ACD%20%D0%BA%D0%BE%D0%BD%D0%B3%D1%80%D0%B5%D1%81%D1%81.%20%D0%A1%D0%B5%D0%BA%D1%86%D0%B8%D1%8F%20%22%D0%A2%D1%80%D0%B8%D1%85%D0%BE%D0%BB%D0%BE%D0%B3%D0%B8%D1%8F%22&location=https%3A%2F%2Facdcongress.loreal.com.ru%2F&details=',
        iosLink: 'assets/calendar/14_trihology.ics',
        record: undefined,
        events: [
            {
                id: 1,
                name: (
                    <>
                        Современная трихология.
                        <br/> Проблемы и перспективы
                    </>
                ),
                author: 'Галлямова Ю.А., д.м.н., проф., дерматолог, трихолог ',
                start: 1668409200000,
                end: 1668411000000,
                preview: 'iOXPs_kPR6E',
                previewImage: 'assets/images/conference/2022/14/s1.png',
                trackerId: EventsEnum.confDay5Video1
            },
            {
                id: 2,
                name: 'Трихоскопия: зачем, когда и где?',
                author:
                    'Силюк Т.В., трихолог, президент Русского Общества Исследования Волос',
                start: 1668411000000,
                end: 1668412800000,
                preview: '1THDZYs47E4',
                previewImage: 'assets/images/conference/2022/14/s2.png',
                trackerId: EventsEnum.confDay5Video2
            },
            {
                id: 3,
                name: (
                    <>
                        Себорейный дерматит:
                        <br/> тропы в неизведанной земле
                    </>
                ),
                author: 'Смирнова И.О., д.м.н., проф., дерматолог',
                start: 1668412800000,
                end: 1668414600000,
                preview: 'RdFZZS7ZlBI',
                previewImage: 'assets/images/conference/2022/14/s3.png',
                trackerId: EventsEnum.confDay5Video3
            },
            {
                id: 4,
                name: (
                    <>
                        Маски диффузной алопеции:
                        <br/>
                        подходы к лечению
                    </>
                ),
                author: 'Ткачев В.П., к.м.н., эндокринолог, трихолог',
                start: 1668414600000,
                end: 1668416400000,
                preview: '9IaUhuMo-90',
                previewImage: 'assets/images/conference/2022/14/s4.png',
                trackerId: EventsEnum.confDay5Video4
            },
            {
                id: 5,
                name: (
                    <>
                        Клинико-морфологическая дифференциальная диагностика первичных
                        рубцовых алопеций
                    </>
                ),
                author: 'Смирнова И.О., д.м.н., проф., дерматолог',
                start: 1668416400000,
                end: 1668418200000,
                preview: 'fKYEm_J9vBI',
                previewImage: 'assets/images/conference/2022/14/s5.png',
                trackerId: EventsEnum.confDay5Video5
            },
            {
                id: 6,
                specialName: <>МАСТЕР-КЛАСС</>,
                name: (
                    <>
                        Пациенты с акне в кабинете
                        <br/> врача-косметолога
                    </>
                ),
                author: 'Наумчик Г.А., к.м.н., дерматолог, косметолог',
                start: 1668425400000,
                end: 1668429000000,
                googleLink: 'https://www.google.com/calendar/event?action=TEMPLATE&dates=20221114T113000Z%2F20221114T123000Z&text=%22ACD%20%D0%BA%D0%BE%D0%BD%D0%B3%D1%80%D0%B5%D1%81%D1%81.%20%D0%9C%D0%B0%D1%81%D1%82%D0%B5%D1%80-%D0%BA%D0%BB%D0%B0%D1%81%D1%81%20%22%D0%9F%D0%B0%D1%86%D0%B8%D0%B5%D0%BD%D1%82%D1%8B%20%D1%81%20%D0%B0%D0%BA%D0%BD%D0%B5%20%D0%B2%20%D0%BA%D0%B0%D0%B1%D0%B8%D0%BD%D0%B5%D1%82%D0%B5%20%D0%B2%D1%80%D0%B0%D1%87%D0%B0-%D0%BA%D0%BE%D1%81%D0%BC%D0%B5%D1%82%D0%BE%D0%BB%D0%BE%D0%B3%D0%B0%22&location=https%3A%2F%2Facdcongress.loreal.com.ru%2F&details=',
                iosLink: 'assets/calendar/14_cosm.ics',
                preview: 'oyD0JmTlwi0',
                previewImage: 'assets/images/conference/2022/14/s6.png',
                trackerId: EventsEnum.confDay5Video6
            }
        ]
    },
    {
        id: 3,
        name: (
            <>
                СЕКЦИЯ
                <br/>
                «КОСМЕТОЛОГИЯ»
            </>
        ),
        slug: 'cosm',
        start: 1668429000000,
        end: 1668439800000,
        live: true,
        calendar: true,
        visible: true,
        googleLink: 'https://www.google.com/calendar/event?action=TEMPLATE&dates=20221114T123000Z%2F20221114T153000Z&text=%22ACD%20%D0%BA%D0%BE%D0%BD%D0%B3%D1%80%D0%B5%D1%81%D1%81.%20%D0%A1%D0%B5%D0%BA%D1%86%D0%B8%D1%8F%20%22%D0%9A%D0%BE%D1%81%D0%BC%D0%B5%D1%82%D0%BE%D0%BB%D0%BE%D0%B3%D0%B8%D1%8F%22&location=https%3A%2F%2Facdcongress.loreal.com.ru%2F&details=',
        iosLink: 'assets/calendar/14_cosmetology.ics',
        record: undefined,
        events: [
            {
                id: 1,
                name: 'Стареющая кожа с куперозом и розацеа',
                author: <>Аравийская Е.А., д.м.н., проф., дерматолог</>,
                start: 1668429000000,
                end: 1668430800000,
                preview: 'tuZv80xjs3I',
                previewImage: 'assets/images/conference/2022/14/c1.png',
                trackerId: EventsEnum.confDay5Video7
            },
            {
                id: 2,
                name: (
                    <>
                        Кожа и менопауза: роль косметологических процедур и домашнего ухода
                        в коррекции возрастных изменений кожи
                    </>
                ),
                author: <>Иконникова Е.В., к.м.н., дерматолог, косметолог</>,
                start: 1668430800000,
                end: 1668432600000,
                preview: '_H4tGywU1pI',
                previewImage: 'assets/images/conference/2022/14/c2.png',
                trackerId: EventsEnum.confDay5Video8
            },
            {
                id: 3,
                name: (
                    <>
                        Роль домашнего ухода в протоколах
                        <br/> коррекции гипермеланозов
                    </>
                ),
                author: <>Шарова А.А., к.м.н., косметолог, геронтолог</>,
                start: 1668432600000,
                end: 1668434400000,
                preview: 'HWgw1Hrf92k',
                previewImage: 'assets/images/conference/2022/14/c3.png',
                trackerId: EventsEnum.confDay5Video9
            },
            {
                id: 4,
                name: (
                    <>
                        Что скрывает пигментация? Расширяем возможности коррекции с помощью
                        новых средств&nbsp;марки La Roche-Posay
                    </>
                ),
                author: <>Катханова О.А., д.м.н., проф., дерматолог, косметолог</>,
                start: 1668434400000,
                end: 1668436200000,
                preview: 'HfuOdm-x1vA',
                previewImage: 'assets/images/conference/2022/14/c4.png',
                trackerId: EventsEnum.confDay5Video10
            },
            {
                id: 5,
                name: (
                    <>
                        Постпроцедурная реабилитация кожи:
                        <br/> проблемы и возможности
                    </>
                ),
                author: <>Глазко И.И., к.м.н., доцент, дерматолог, косметолог</>,
                start: 1668436200000,
                end: 1668438000000,
                preview: 'udXVhGtXxd8',
                previewImage: 'assets/images/conference/2022/14/c5.png',
                trackerId: EventsEnum.confDay5Video11
            },
            {
                id: 6,
                name: <>Постпроцедурные осложнения</>,
                author: <>Татаурщикова Н.С., д.м.н., проф., аллерголог-иммунолог</>,
                start: 1668438000000,
                end: 1668439800000,
                preview: 'P5H60pbTL8Q',
                previewImage: 'assets/images/conference/2022/14/c6.png',
                trackerId: EventsEnum.confDay5Video12
            }
        ]
    }
]

export default schedule
