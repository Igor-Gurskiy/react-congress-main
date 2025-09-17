import {ScheduleSectionType} from '@/components/Schedule/ScheduleSection'
import {EventsEnum} from "@/api/tracker";

const schedule: ScheduleSectionType[] = [
    {
        id: 2,
        name: (
            <>
                СЕКЦИЯ
                <br/>
                «меланома»
            </>
        ),
        slug: 'melan',
        start: 1668236400000,
        end: 1668240900000,
        live: true,
        calendar: true,
        visible: true,
        googleLink:
            'https://www.google.com/calendar/event?action=TEMPLATE&dates=20221112T070000Z%2F20221112T081500Z&text=%22ACD%20%D0%BA%D0%BE%D0%BD%D0%B3%D1%80%D0%B5%D1%81%D1%81.%20%D0%A1%D0%B5%D0%BA%D1%86%D0%B8%D1%8F%20%22%D0%9C%D0%B5%D0%BB%D0%B0%D0%BD%D0%BE%D0%BC%D0%B0%22&location=https%3A%2F%2Facdcongress.loreal.com.ru%2F&details=',
        iosLink: 'assets/calendar/12_melanoma.ics',
        record: undefined,
        events: [
            {
                id: 1,
                name: <>Открытие секции</>,
                author: (
                    <>
                        Медведева Н.Г., руководитель научного отдела Подразделения Активной
                        Косметики
                    </>
                ),
                start: 1668236400000,
                end: 1668237300000,
                preview: 'JKVUAgZ3jtA',
                previewImage: 'assets/images/conference/2022/12/s1.png',
                trackerId: EventsEnum.confDay3Video1
            },
            {
                id: 2,
                name: 'Дерматоскопия',
                author: (
                    <>
                        Сергеев Ю.Ю., врач-дерматолог, дермато-онколог.
                        <br/> Председатель Правления Общества дерматоскопии
                        и&nbsp;оптической диагностики кожи
                    </>
                ),
                start: 1668237300000,
                end: 1668239100000,
                preview: 'pFfLcrdF-zw',
                previewImage: 'assets/images/conference/2022/12/s2.png',
                trackerId: EventsEnum.confDay3Video2
            },
            {
                id: 3,
                name: (
                    <>
                        Обзор нежелательных явлений при лечении меланомы различными группами
                        химиотерапевтических препаратов
                    </>
                ),
                author: (
                    <>
                        Ткаченко Е.В., к.м.н., зав. отд. краткосрочной химиотерапии&nbsp;НИИ
                        онкологии им. Н.Н. Петрова
                    </>
                ),
                start: 1668239100000,
                end: 1668240900000,
                preview: 'CUtAHJT3jX0',
                previewImage: 'assets/images/conference/2022/12/s3.png',
                trackerId: EventsEnum.confDay3Video3
            }
        ]
    },
    {
        id: 3,
        name: (
            <>
                СЕКЦИЯ
                <br/>
                «кожная токсичность»
            </>
        ),
        slug: 'toxity',
        start: 1668240900000,
        end: 1668246300000,
        live: true,
        calendar: true,
        visible: true,
        googleLink:
            'https://www.google.com/calendar/event?action=TEMPLATE&dates=20221112T081500Z%2F20221112T094500Z&text=%22ACD%20%D0%BA%D0%BE%D0%BD%D0%B3%D1%80%D0%B5%D1%81%D1%81.%20%D0%A1%D0%B5%D0%BA%D1%86%D0%B8%D1%8F%20%22%D0%9A%D0%BE%D0%B6%D0%BD%D0%B0%D1%8F%20%D1%82%D0%BE%D0%BA%D1%81%D0%B8%D1%87%D0%BD%D0%BE%D1%81%D1%82%D1%8C%22&location=https%3A%2F%2Facdcongress.loreal.com.ru%2F&details=',
        iosLink: 'assets/calendar/12_skin.ics',
        record: undefined,
        events: [
            {
                id: 1,
                name: (
                    <>
                        Поражения кожи, связанные с применением ингибиторов иммунных
                        контрольных точек
                    </>
                ),
                author: (
                    <>
                        Хлебникова А.Н., Профессор кафедры
                        <br/>
                        дерматовенерологии и дерматоонкологии
                        <br/>
                        ФУВ ГБУЗ МО МОНИКИ им. М.Ф. Владимирского
                    </>
                ),
                start: 1668240900000,
                end: 1668242700000,
                preview: 'FFH_LuMaHnw',
                previewImage: 'assets/images/conference/2022/12/s4.png',
                trackerId: EventsEnum.confDay3Video4
            },
            {
                id: 2,
                name: (
                    <>
                        Влияние современных методов лучевой терапии на&nbsp;развитие острого
                        и хронического лучевого дерматита
                    </>
                ),
                author: (
                    <>
                        Романов Д.С., к.м.н., зав. радиологическим отделением
                        <br/> ЧУЗ «ЦКБ «РЖД-Медицина» ОАО «РЖД»
                    </>
                ),
                start: 1668242700000,
                end: 1668244500000,
                preview: '6qJqPsNP8MM',
                previewImage: 'assets/images/conference/2022/12/s5.png',
                trackerId: EventsEnum.confDay3Video5
            },
            {
                id: 3,
                name: <>Кожная токсичность в кабинете дерматолога</>,
                author: (
                    <>
                        Шливко И.Л., д.м.н., профессор, зав. кафедры кожных
                        и&nbsp;венерических болезней ФГБОУ ВО ПИМУ Минздрава России
                    </>
                ),
                start: 1668244500000,
                end: 1668246300000,
                preview: 'nOf2Y-5q0Fs',
                previewImage: 'assets/images/conference/2022/12/s6.png',
                trackerId: EventsEnum.confDay3Video6
            }
        ]
    }
]

export default schedule
