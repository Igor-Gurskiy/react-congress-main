import {ScheduleSectionType} from '@/components/Schedule/ScheduleSection'
import {EventsEnum} from "@/api/tracker";

const schedule: ScheduleSectionType[] = [
    {
        id: 2,
        name: (
            <>
                СЕКЦИЯ
                <br/>
                «ДЕРМАТОЗЫ ДЕТЕЙ И ПОДРОСТКОВ»
            </>
        ),
        slug: 'derm',
        start: 1668150000000,
        end: 1668169800000,
        live: true,
        calendar: true,
        visible: true,
        googleLink:
            'https://www.google.com/calendar/event?action=TEMPLATE&dates=20221111T070000Z%2F20221111T123000Z&text=%22ACD%20%D0%BA%D0%BE%D0%BD%D0%B3%D1%80%D0%B5%D1%81%D1%81.%20%D0%A1%D0%B5%D0%BA%D1%86%D0%B8%D1%8F%20%22%D0%94%D0%B5%D1%80%D0%BC%D0%B0%D1%82%D0%BE%D0%B7%D1%8B%20%D0%B4%D0%B5%D1%82%D0%B5%D0%B9%20%D0%B8%20%D0%BF%D0%BE%D0%B4%D1%80%D0%BE%D1%81%D1%82%D0%BA%D0%BE%D0%B2%22&location=https%3A%2F%2Facdcongress.loreal.com.ru%2F&details=',
        iosLink: '/assets/calendar/11_derma.ics',
        record: undefined,
        events: [
            {
                id: 1,
                name: (
                    <>
                        Профессорская лекция. Возможности первичной профилактики
                        аллергических заболеваний с&nbsp;использованием наружной терапии
                    </>
                ),
                author: 'Пампура А.Н., д.м.н., проф., аллерголог-иммунолог',
                start: 1668150000000,
                end: 1668151800000,
                preview: 'zR7kUTdXFy8',
                previewImage: 'assets/images/conference/2022/11/s1.png',
                trackerId: EventsEnum.confDay2Video1
            },
            {
                id: 2,
                name: 'Пеленочный дерматит. С чем может столкнуться педиатр на приеме?',
                author: 'Зайцева О.В., д.м.н., проф., педиатр',
                start: 1668151800000,
                end: 1668153600000,
                preview: 'EZ3dPxkrgvY',
                previewImage: 'assets/images/conference/2022/11/s2.png',
                trackerId: EventsEnum.confDay2Video2
            },
            {
                id: 3,
                name: (
                    <>
                        Дискуссия дерматолога и педиатра.
                        <br/>
                        Какие заболевания кожи встречаются у детей
                        <br/>
                        до 3-х лет
                    </>
                ),
                author: (
                    <>
                        Тамразова О.Б., д.м.н., проф., дерматолог
                        <br/>
                        Заплатников А.Л., д.м.н., проф., педиатр
                    </>
                ),
                start: 1668153600000,
                end: 1668155400000,
                preview: 'L6wEZY6EKy4',
                previewImage: 'assets/images/conference/2022/11/s3.png',
                trackerId: EventsEnum.confDay2Video3
            },
            {
                id: 4,
                name: 'Последние научные данные о микробиоме',
                author: 'Новик Г.А., д.м.н., проф., аллерголог-иммунолог',
                start: 1668155400000,
                end: 1668157200000,
                preview: 'JaIjWhg6szw',
                previewImage: 'assets/images/conference/2022/11/s4.png',
                trackerId: EventsEnum.confDay2Video4
            },
            {
                id: 5,
                name: (
                    <>
                        Клинический разбор: дерматозы
                        <br/>
                        от 3-х до 14 лет
                    </>
                ),
                author: 'Заславский Д.В., д.м.н., проф., дерматолог',
                start: 1668157200000,
                end: 1668159000000,
                preview: 'Buw0YxwYr5o',
                previewImage: 'assets/images/conference/2022/11/s5.png',
                trackerId: EventsEnum.confDay2Video5
            },
            {
                id: 6,
                name: 'Перерыв 20 мин',
                author: null,
                start: 1668159000000,
                end: 1668160200000
            },
            {
                id: 7,
                name: (
                    <>
                        Сессия ответов на актуальные вопросы
                        <br/> на стыке дисциплин дерматология/
                        <br/>
                        аллергология/педиатрия
                    </>
                ),
                author: (
                    <>
                        Захарова И.Н., д.м.н., проф., педиатр
                    </>
                ),
                start: 1668160200000,
                end: 1668162600000,
                preview: '_QKgRnq1Uyo',
                previewImage: 'assets/images/conference/2022/11/s6.png',
                trackerId: EventsEnum.confDay2Video6
            },
            {
                id: 8,
                name: 'Акне: наиболее частый дерматоз у подростков',
                author: 'Решетникова Т.Б., д.м.н., проф., дерматолог',
                start: 1668162600000,
                end: 1668164400000,
                preview: 'pi-5xbq3PaY',
                previewImage: 'assets/images/conference/2022/11/s7.png',
                trackerId: EventsEnum.confDay2Video7
            },
            {
                id: 9,
                name: (
                    <>
                        Результаты исследования о роли гаммы Lipikar в&nbsp;профилактике
                        обострения АД в сезон пыления
                    </>
                ),
                author: 'Феденко Е.С., д.м.н., проф., аллерголог-иммунолог ',
                start: 1668164400000,
                end: 1668166200000,
                preview: 'Ev7u2psIJ7s',
                previewImage: 'assets/images/conference/2022/11/s8.png',
                trackerId: EventsEnum.confDay2Video8
            },
            {
                id: 10,
                name: <>Качество жизни семьи пациентов с атопическим дерматитом</>,
                author: 'Дворянкова Е.В., д.м.н., проф., дерматолог ',
                start: 1668166200000,
                end: 1668168000000,
                preview: 'QCTUq3e9q5c',
                previewImage: 'assets/images/conference/2022/11/s9.png',
                trackerId: EventsEnum.confDay2Video9
            },
            {
                id: 11,
                name: (
                    <>Сессия ответов на вопросы по средствам марки La&nbsp;Roche-Posay</>
                ),
                author: 'Петрова Ю., эксперт марки La Roche-Posay',
                start: 1668168000000,
                end: 1668169800000,
                preview: 'xlF1EEP1ZSQ',
                previewImage: 'assets/images/conference/2022/11/s10.png',
                trackerId: EventsEnum.confDay2Video10
            }
        ]
    }
]

export default schedule
