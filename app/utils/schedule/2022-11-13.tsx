import {ScheduleSectionType} from '@/components/Schedule/ScheduleSection'
import {EventsEnum} from "@/api/tracker";

const schedule: ScheduleSectionType[] = [
    {
        id: 2,
        name: (
            <>
                СЕКЦИЯ
                <br/>
                «ДЕРМАТОЗЫ ВЗРОСЛЫХ»
            </>
        ),
        slug: 'adults',
        start: 1668322800000,
        end: 1668339000000,
        live: true,
        calendar: true,
        visible: true,
        googleLink: 'https://www.google.com/calendar/event?action=TEMPLATE&dates=20221113T070000Z%2F20221113T102000Z&text=%22ACD%20%D0%BA%D0%BE%D0%BD%D0%B3%D1%80%D0%B5%D1%81%D1%81.%20%D0%A1%D0%B5%D0%BA%D1%86%D0%B8%D1%8F%20%22%D0%94%D0%B5%D1%80%D0%BC%D0%B0%D1%82%D0%BE%D0%B7%D1%8B%20%D0%B2%D0%B7%D1%80%D0%BE%D1%81%D0%BB%D1%8B%D1%85%22&location=https%3A%2F%2Facdcongress.loreal.com.ru%2F&details=',
        iosLink: 'assets/calendar/13_derm.ics',
        record: undefined,
        events: [
            {
                id: 1,
                name: (
                    <>
                        Роль нарушения микробиома и воздействия эксопозом факторов в
                        развитии и течении различных дерматозов
                    </>
                ),
                author: 'Аравийская Е.А., д.м.н., проф., дерматолог',
                start: 1668322800000,
                end: 1668324600000,
                preview: 'c7z56aBYJog',
                previewImage: 'assets/images/conference/2022/13/s1.png',
                trackerId: EventsEnum.confDay4Video1
            },
            {
                id: 2,
                name: <>Микробиом. Почему о нем нужно знать практикующему врачу?</>,
                author: 'Сергеева И.Г., д.м.н., проф., дерматолог',
                start: 1668324600000,
                end: 1668326400000,
                preview: 'cmA816rxcW8',
                previewImage: 'assets/images/conference/2022/13/s2.png',
                trackerId: EventsEnum.confDay4Video2
            },
            {
                id: 3,
                name: (
                    <>
                        Качество жизни дерматологического пациента в&nbsp;осенне-зимний
                        период: наши возможности
                    </>
                ),
                author: 'Соколовский Е.В., д.м.н., проф., дерматолог',
                start: 1668326400000,
                end: 1668328200000,
                preview: 'lMuB-L2IaYo',
                previewImage: 'assets/images/conference/2022/13/s3.png',
                trackerId: EventsEnum.confDay4Video3
            },
            {
                id: 4,
                name: <>Дерматокосметика в комплексной терапии акне и&nbsp;постакне</>,
                author: 'Круглова Л.С., д.м.н., проф.',
                start: 1668328200000,
                end: 1668330000000,
                preview: 'dlA8gVJFvIM',
                previewImage: 'assets/images/conference/2022/13/s4.png',
                trackerId: EventsEnum.confDay4Video4
            },
            {
                id: 5,
                name: (
                    <>Синдром сухой кожи при системных и&nbsp;висцеральных заболеваниях</>
                ),
                author: (
                    <>
                        Стремоухов А.А., д.м.н., профессор, врач общей практики
                        <br/>
                        Хлебникова А.Н., д.м.н., профессор, дерматолог
                    </>
                ),
                start: 1668330000000,
                end: 1668331800000,
                preview: 'tNO2vpefvnU',
                previewImage: 'assets/images/conference/2022/13/s5.png',
                trackerId: EventsEnum.confDay4Video5
            },
            {
                id: 6,
                name: (
                    <>
                        Зуд - полиэтиологический симптом с&nbsp;разнонаправленными путями
                        коррекции
                    </>
                ),
                author: 'Миченко А.В., к.м.н., дерматолог',
                start: 1668331800000,
                end: 1668333600000,
                preview: 'IJT1UoArSFQ',
                previewImage: 'assets/images/conference/2022/13/s6.png',
                trackerId: EventsEnum.confDay4Video6
            },
            {
                id: 7,
                name: <>Перерыв 20 мин</>,
                author: null,
                start: 1668333600000,
                end: 1668334800000
            },
            {
                id: 8,
                specialName: (
                    <>
                        сПЕЦИАЛЬНАЯ
                        <br/> ЛЕКЦИЯ
                    </>
                ),
                name: (
                    <>Дерматоскоп, как универсальный инструмент практикующего врача</>
                ),
                author: 'Крылов А.В., врач-дерматолог, дерматоонколог',
                start: 1668334800000,
                end: 1668339000000,
                googleLink: 'https://www.google.com/calendar/event?action=TEMPLATE&dates=20221113T102000Z%2F20221113T113000Z&text=%22ACD%20%D0%BA%D0%BE%D0%BD%D0%B3%D1%80%D0%B5%D1%81%D1%81.%20%D0%A1%D0%BF%D0%B5%D1%86%D0%B8%D0%B0%D0%BB%D1%8C%D0%BD%D0%B0%D1%8F%20%D0%BB%D0%B5%D0%BA%D1%86%D0%B8%D1%8F%20%22%D0%94%D0%B5%D1%80%D0%BC%D0%B0%D1%82%D0%BE%D1%81%D0%BA%D0%BE%D0%BF%20%D0%BA%D0%B0%D0%BA%20%D1%83%D0%BD%D0%B8%D0%B2%D0%B5%D1%80%D1%81%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B9%20%D0%B8%D0%BD%D1%81%D1%82%D1%80%D1%83%D0%BC%D0%B5%D0%BD%D1%82%20%D0%BF%D1%80%D0%B0%D0%BA%D1%82%D0%B8%D0%BA%D1%83%D1%8E%D1%89%D0%B5%D0%B3%D0%BE%20%D0%B2%D1%80%D0%B0%D1%87%D0%B0%22&location=https%3A%2F%2Facdcongress.loreal.com.ru%2F&details=',
                iosLink: 'assets/calendar/13_tool.ics',
                preview: '-_rjPZxAn9o',
                previewImage: 'assets/images/conference/2022/13/s7.png',
                trackerId: EventsEnum.confDay4Video7
            }
        ]
    }
]

export default schedule
