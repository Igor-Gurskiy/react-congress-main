import styled from 'styled-components'

const ContentWrapper = styled.div`
  display: flex;

  @media (max-width: 767px) {
    flex-direction: column;

    img {
      max-height: 120px;
    }
  }
`

const recycleQuestions = [
    {
        icon: '/assets/images/green/recycle/game/items/item-1.svg',
        title: (
            <div>
                Упаковка Dercos изготовлена из нетоксичного пластика (5 РР) и легко поддаётся переработке. Но чтобы
                ускорить процесс и быть уверенным в правильности выбора, отнесите чистую упаковку в любую из аптек,
                участвующих в акции <u>«НЕСУ ПЕРЕМЕНЫ»</u>.
            </div>
        ),
        caption: 'Чистая упаковка от Dercos',
        variant: ['green', 'lrp'],
    }, {
        icon: '/assets/images/green/recycle/game/items/item-2.svg',
        title: 'Большинство упаковок от средств La Roche-Posay подлежит переработке. Сдайте чистую упаковку от Lipikar в аптеку, участвующую в акции «НЕСУ ПЕРЕМЕНЫ»,  и получите купон на скидку и эко-шоппер в подарок.',
        caption: 'Упаковка от Lipikar',
        variant: ['green', 'lrp'],
    }, {
        icon: '/assets/images/green/recycle/game/items/item-3.svg',
        title: 'В качестве материала для блистерной упаковки используется смесь пластика и алюминиевой фольги, что сложно отделить и переработать. Вы можете лично отвезти их в эко-центры  по переработке сложных видов вторсырья. Найти ближайший пункт можно на сайте recyclemap.ru',
        caption: 'Блистеры от таблеток и капсул',
        variant: ['grey'],
    }, {
        icon: '/assets/images/green/recycle/game/items/item-4.svg',
        title: (
            <ContentWrapper>
                <img className="correct" src="/assets/images/green/recycle/game/icons-correct.svg" alt=""/>
                <img className="incorrect" src="/assets/images/green/recycle/game/icons.svg" alt=""/>
                <div>
                    Очищенные от пищи пластиковые контейнеры с маркировкой (cбоку все виды) легко сдаются в
                    переработку. <b>ВНИМАНИЕ!</b> Пластик с маркировкой 3 и 7 переработке не подлежит!
                </div>
            </ContentWrapper>
        ),
        caption: 'Контейнер',
        variant: ['green'],
    }, {
        icon: '/assets/images/green/recycle/game/items/item-5.svg',
        title: (
            <ContentWrapper>
                <img className="correct" src="/assets/images/green/recycle/game/icons-correct.svg" alt=""/>
                <img className="incorrect" src="/assets/images/green/recycle/game/icons.svg" alt=""/>
                <div>
                    Большинство пластиковых изделий имеют маркировку (сбоку все виды маркировки). Данные виды пластика
                    легко сдаются в переработку, главное не забывайте удалять остатки пищи. <b>ВНИМАНИЕ!</b> Пластик с
                    маркировкой 3 и 7 переработке не подлежит!
                </div>
            </ContentWrapper>
        ),
        caption: 'Столовые приборы',
        variant: ['green'],
    }, {
        icon: '/assets/images/green/recycle/game/items/item-6.svg',
        title: (
            <ContentWrapper>
                <img className="correct" src="/assets/images/green/recycle/game/icons-correct.svg" alt=""/>
                <img className="incorrect" src="/assets/images/green/recycle/game/icons.svg" alt=""/>
                <div>
                    Большинство пластиковых изделий имеют маркировку (сбоку все виды маркировки). Данные виды пластика
                    легко сдаются в переработку, главное не забывайте удалять остатки пищи. <b>ВНИМАНИЕ!</b> Пластик с
                    маркировкой 3 и 7 переработке не подлежит!
                </div>
            </ContentWrapper>
        ),
        caption: 'Крышка для стаканчиков',
        variant: ['green'],
    }, {
        icon: '/assets/images/green/recycle/game/items/item-7.svg',
        title: 'Несмотря на своё название, ламинированные и вощёные стаканчики нельзя отправить в макулатуру. Поэтому либо отправляем их в ПРОЧИЕ ОТХОДЫ, либо в эко-центры по переработке сложных видов вторсырья. Найти ближайший пункт можно на сайте recyclemap.ru',
        caption: 'Бумажный стаканчик',
        variant: ['grey'],
    }, {
        icon: '/assets/images/green/recycle/game/items/item-8.svg',
        title: 'Загрязнённая бумага не пригодна для сдачи в макулатуру, так как органические остатки могут испортить целую партию чистой бумаги',
        caption: 'Грязная бумажная тарелка',
        variant: ['grey'],
    }, {
        icon: '/assets/images/green/recycle/game/items/item-9.svg',
        title: 'Остатки еды очень быстро гниют и плесневеют, это значительно затрудняет не только процесс переработки, но и сортировки, так как сгнившие органические отходы очень неприятно пахнут и привлекают насекомых и грызунов',
        caption: 'Остатки еды',
        variant: ['grey'],
    }, {
        icon: '/assets/images/green/recycle/game/items/item-10.svg',
        title: 'Бумажные пакетики содержат в себе небольшое количество пластика, поэтому их нужно утилизировать в прочие отходы',
        caption: 'Чайный пакетик',
        variant: ['grey'],
    }, {
        icon: '/assets/images/green/recycle/game/items/item-11.svg',
        title: 'Слишком мелкие и неоднородные по составу фракции, такие как чеки и фантики, не подлежат переработке',
        caption: 'Чеки и фантики',
        variant: ['grey'],
    }, {
        icon: '/assets/images/green/recycle/game/items/item-12.svg',
        title: 'Салфетки зачастую сделаны из вторсырья и состоят из тонких волокон, поэтому они не подлежат переработке',
        caption: 'Салфетка',
        variant: ['grey'],
    }, {
        icon: '/assets/images/green/recycle/game/items/item-13.svg',
        title: 'Снимите со стеклянной упаковки пластиковую помпу – дозатор. И флакон можно сдать, как вторсырье',
        caption: 'Упаковка от Mineral 89',
        variant: ['grey'],
    },
]

export default recycleQuestions