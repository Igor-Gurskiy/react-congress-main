import {useGameStore} from "@/stores/gameStore"
import {Game} from "./MiniGame"

const Intro: React.FC = () => {

    const setSection = useGameStore(state => state.setSection)

    return (
        <Game.Wrapper>
            <Game.Title>Правда или ложь</Game.Title>
            <Game.Description>
                <p>
                    На экране появится утверждение.<br/>
                    Если оно верно, нажимайте кнопку <b>«Правда»</b>,
                    если нет — нажимайте <b>«Ложь»</b>.
                    За каждый правильный ответ начисляется 1 балл. Всего будет <b>10 вопросов</b>.
                </p>
                <p>
                    На игру даётся <b>120 секунд</b>. За это время надо набрать как можно больше баллов (максимум
                    10).<br/>Эти баллы будут начислены в Ваш личный кабинет на профессиональном сайте после окончания
                    конгресса.
                </p>
                <p>
                    В конце игры вам покажут набранные баллы и количество ошибок.
                </p>
            </Game.Description>
            <Game.Controls>
                <Game.Button onClick={() => setSection('game')} $fullWidth $primary>Играть</Game.Button>
            </Game.Controls>
        </Game.Wrapper>
    )
}

export default Intro