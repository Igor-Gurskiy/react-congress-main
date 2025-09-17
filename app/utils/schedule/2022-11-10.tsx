import {ScheduleSectionType} from '@/components/Schedule/ScheduleSection'
import {EventsEnum} from "@/api/tracker";

const schedule: ScheduleSectionType[] = [
    {
        id: 1,
        slug: 'open',
        name: (
            <>
                Торжественное
                <br/> открытие
                <br/> конгресса
            </>
        ),
        start: 1668063600000,
        end: 1668070800000,
        live: true,
        calendar: false,
        visible: false,
        googleLink:
            'https://www.google.com/calendar/event?action=TEMPLATE&dates=20221110T070000Z%2F20221110T090000Z&text=%22ACD%20%D0%BA%D0%BE%D0%BD%D0%B3%D1%80%D0%B5%D1%81%D1%81.%20%D0%A2%D0%BE%D1%80%D0%B6%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B5%20%D0%BE%D1%82%D0%BA%D1%80%D1%8B%D1%82%D0%B8%D0%B5%20%D0%BA%D0%BE%D0%BD%D0%B3%D1%80%D0%B5%D1%81%D1%81%D0%B0%22&location=https%3A%2F%2Facdcongress.loreal.com.ru%2F&details=',
        iosLink: '/assets/calendar/10_opening.ics',
        record: undefined
    },
    {
        id: 2,
        name: (
            <>
                СЕКЦИЯ
                <br/>
                «ФАРМАЦИЯ»
            </>
        ),
        slug: 'pharm',
        start: 1668070800000,
        end: 1668081600000,
        live: true,
        calendar: true,
        visible: true,
        googleLink: 'https://www.google.com/calendar/event?action=TEMPLATE&dates=20221110T090000Z%2F20221110T120000Z&text=%22ACD%20%D0%BA%D0%BE%D0%BD%D0%B3%D1%80%D0%B5%D1%81%D1%81.%20%D0%A1%D0%B5%D0%BA%D1%86%D0%B8%D1%8F%20%22%D0%A4%D0%B0%D1%80%D0%BC%D0%B0%D1%86%D0%B8%D1%8F%22&location=https%3A%2F%2Facdcongress.loreal.com.ru%2F&details=',
        iosLink: '/assets/calendar/10_pharm.ics',
        record: undefined,
        events: [
            {
                id: 1,
                name: (
                    <>
                        Адъювантная терапия в&nbsp;дерматологии.
                        <br/> Роль дерматокосметики
                    </>
                ),
                author: 'Голдобина М.В., врач-дерматолог, косметолог, член EADV',
                start: 1668070800000,
                end: 1668073500000,
                preview: '6kFJMYwN3QM',
                previewImage: 'assets/images/conference/2022/10/s1.png',
                trackerId: EventsEnum.confDay1Video1
            },
            {
                id: 2,
                name: 'Активные косметические ингредиенты: реалии и мифы',
                author: 'Немятых О.Д., д.фарм.н., профессор',
                start: 1668073500000,
                end: 1668076200000,
                preview: 'pGxBkKj5MzM',
                previewImage: 'assets/images/conference/2022/10/s2.png',
                trackerId: EventsEnum.confDay1Video2
            },
            {
                id: 3,
                name: 'Конфликт-менеджмент при работе с потребителями активной косметики',
                author: 'Демченко Д.Д., к.фарм.н., доцент',
                start: 1668076200000,
                end: 1668079800000,
                preview: '5-oxsn-2dFk',
                previewImage: 'assets/images/conference/2022/10/s3.png',
                trackerId: EventsEnum.confDay1Video3
            },
            {
                id: 4,
                name: 'Маркетинг активной косметики в аптечных организациях',
                author: 'Басакина И.И., к.фарм.н., доцент',
                start: 1668079800000,
                end: 1668081600000,
                preview: 'h3X_5I9ZTYQ',
                previewImage: 'assets/images/conference/2022/10/s4.png',
                trackerId: EventsEnum.confDay1Video4
            }
        ]
    },
    {
        id: 3,
        name: (
            <>
                СЕКЦИЯ
                <br/>
                «МЕДИЦИНА ОНЛАЙН»
            </>
        ),
        slug: 'collab',
        start: 1668081600000,
        end: 1668090600000,
        live: true,
        calendar: true,
        visible: true,
        googleLink:
            'https://www.google.com/calendar/event?action=TEMPLATE&dates=20221110T120000Z%2F20221110T143000Z&text=%22ACD%20%D0%BA%D0%BE%D0%BD%D0%B3%D1%80%D0%B5%D1%81%D1%81.%20%D0%A1%D0%B5%D0%BA%D1%86%D0%B8%D1%8F%20%22%D0%9C%D0%B5%D0%B4%D0%B8%D1%86%D0%B8%D0%BD%D0%B0%20%D0%9E%D0%BD%D0%BB%D0%B0%D0%B9%D0%BD%22&location=https%3A%2F%2Facdcongress.loreal.com.ru%2F&details=',
        iosLink: '/assets/calendar/10_med.ics',
        record: undefined,
        events: [
            {
                id: 1,
                name: 'Цифровая грамотность медицинского работника',
                author: (
                    <>
                        Демкина А.Е., к.м.н., начальник сектора научных
                        <br/> проектов по телемедицине ГБУЗ «НПКЦ ДиТ ДЗМ»,
                        <br/> врач-кардиолог
                    </>
                ),
                start: 1668081600000,
                end: 1668083400000,
                preview: 'gw7vmYJe8rc',
                previewImage: 'assets/images/conference/2022/10/m1.png',
                trackerId: EventsEnum.confDay1Video5
            },
            {
                id: 2,
                name: (
                    <>
                        Телемедицина и безопасность
                        <br/> персональных данных
                    </>
                ),
                author: (
                    <>
                        Петровская Т., врач-терапевт, кафедра телемедицины
                        <br/> РУДН, автор курса по онлайн-консультированию для
                        <br/> врачей
                    </>
                ),
                start: 1668083400000,
                end: 1668085200000,
                preview: 'r2th91coE7k',
                previewImage: 'assets/images/conference/2022/10/m2.png',
                trackerId: EventsEnum.confDay1Video6
            },
            {
                id: 3,
                name: (
                    <>
                        Подкасты: новая ниша для продвижения
                        <br/> личного бренда
                    </>
                ),
                author: (
                    <>
                        Харченко Е.В., к.м.н., врач-онколог.
                        <br/>
                        Автор профессиональных блогов и создатель
                        <br/> подкаста «Врач-богач»
                    </>
                ),
                start: 1668085200000,
                end: 1668087000000,
                preview: '0doDD-fqa3w',
                previewImage: 'assets/images/conference/2022/10/m3.png',
                trackerId: EventsEnum.confDay1Video7
            },
            {
                id: 4,
                name: (
                    <>
                        5 причин завести профессиональный блог
                        <br/>в Telegram сегодня
                    </>
                ),
                author: (
                    <>
                        Абакумов О., врач-терапевт, пульмонолог.
                        <br/> Автор одного из самых известных профессиональных
                        <br/> блогов в Telegram
                    </>
                ),
                start: 1668087000000,
                end: 1668088800000,
                preview: 'XPGepJm9yjc',
                previewImage: 'assets/images/conference/2022/10/m4.png',
                trackerId: EventsEnum.confDay1Video8
            },
            {
                id: 5,
                name: 'Развивитие себя как бренда',
                author: (
                    <>
                        Галлямова Ю.А., д.м.н., проф., дерматолог,
                        <br/> косметолог, трихолог
                    </>
                ),
                start: 1668088800000,
                end: 1668090600000,
                preview: 'fe3RwpiQvpI',
                previewImage: 'assets/images/conference/2022/10/m5.png',
                trackerId: EventsEnum.confDay1Video9
            }
        ]
    }
]

export default schedule
