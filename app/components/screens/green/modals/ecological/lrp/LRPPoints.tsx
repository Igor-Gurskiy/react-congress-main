import React from 'react'
import styled from 'styled-components'
import media from '@/utils/media'

const LrpPoints = ({ handleShowChangesModal }) => {
	return (
		<PointsWrapper>
			<PointItem>
				<MobileTitle>
					Проект <b>по переработке упаковки от косметики</b>
				</MobileTitle>

				<Wrapper>
					<ImageWrapper>
						<img
							src="/assets/images/green/modals/ecological/packaging-recycling.svg"
							alt="packaging-recycling"
						/>
					</ImageWrapper>
					<TextAndButtonWrapper>
						<div>
							<DesktopTitle>
								Проект <b>по переработке упаковки от косметики</b>
							</DesktopTitle>

							<Text>
								В рамках проекта «Несу перемены» с 2021 года <p />в
								аптеках-партнерах можно сдать на переработку упаковки от
								косметики любых брендов
							</Text>
						</div>
						<PopupButton onClick={handleShowChangesModal}>
							<img
								src="/assets/images/green/modals/ecological/plus.svg"
								alt="popup-button"
							/>
						</PopupButton>
					</TextAndButtonWrapper>
				</Wrapper>
			</PointItem>
			<PointItem>
				<MobileTitle>
					100% экологически <b>чистая энергия</b>
				</MobileTitle>
				<Wrapper>
					<ImageWrapper>
						<img
							src="/assets/images/green/modals/ecological/clean-energy-shadow.svg"
							alt="clean energy"
						/>
					</ImageWrapper>
					<div>
						<DesktopTitle>
							100% экологически <b>чистая энергия</b>
						</DesktopTitle>
						<Text>
							С 2018 года на заводе La Roche-Posay используется биопропан как
							экологический источник энергии
						</Text>
					</div>
				</Wrapper>
			</PointItem>
			<PointItem>
				<MobileTitle>
					CОКРАЩЕНИЕ <b>ПЛАСТИКА</b>
				</MobileTitle>
				<Wrapper>
					<ImageWrapper>
						<img
							src="/assets/images/green/modals/ecological/reduction-shadow.svg"
							alt="reduction"
						/>
					</ImageWrapper>
					<div>
						<DesktopTitle>
							CОКРАЩЕНИЕ <b>ПЛАСТИКА</b>
						</DesktopTitle>
						<Text>
							Увеличить до 60% объем использования перерабатываемого пластика в
							упаковках к 2025 году и сэкономить 7 000 тонн пластика
						</Text>
					</div>
				</Wrapper>
			</PointItem>
			<PointItem>
				<MobileTitle>
					ОТВЕТСТВЕННЫЙ <b>ВЫБОР ПЛАСТИКА</b>
				</MobileTitle>
				<Wrapper>
					<ImageWrapper>
						<img
							src="/assets/images/green/modals/ecological/responsible-shadow.svg"
							alt="responsible"
						/>
					</ImageWrapper>
					<div>
						<DesktopTitle>
							ОТВЕТСТВЕННЫЙ <b>ВЫБОР ПЛАСТИКА</b>
						</DesktopTitle>
						<Text>
							Наши упаковки не содержат пластик ПВХ (3-PVC), который очень
							сложно переработать, и мы не используем его для производства
							рекламных материалов, косметичек и других аксессуаров
						</Text>
					</div>
				</Wrapper>
			</PointItem>
			<PointItem>
				<MobileTitle>
					ПЕРЕРАБОТАННЫЕ <b>МАТЕРИАЛЫ</b>
				</MobileTitle>
				<Wrapper>
					<ImageWrapper>
						<img
							src="/assets/images/green/modals/ecological/recycled.svg"
							alt="recycled"
						/>
					</ImageWrapper>
					<div>
						<DesktopTitle>
							ПЕРЕРАБОТАННЫЕ <b>МАТЕРИАЛЫ</b>
						</DesktopTitle>
						<Text>
							Мы стремимся использовать все больше переработанных материалов,
							дав вторую жизнь пластику, стеклу и картону
						</Text>
					</div>
				</Wrapper>
			</PointItem>
			<PointItem>
				<MobileTitle>
					ОТКАЗ <b>ОТ БУМАЖНЫХ БРОШЮР</b>
				</MobileTitle>
				<Wrapper>
					<ImageWrapper>
						<img
							src="/assets/images/green/modals/ecological/renouncement.svg"
							alt="renouncement"
						/>
					</ImageWrapper>
					<div>
						<DesktopTitle>
							ОТКАЗ <b>ОТ БУМАЖНЫХ БРОШЮР</b>
						</DesktopTitle>
						<Text>
							Марка La Roche-Posay полностью отказалась от бумажных брошюр,
							которые раньше были вложены в коробочки с косметикой
						</Text>
					</div>
				</Wrapper>
			</PointItem>
			<PointItem>
				<MobileTitle>
					<p>
						Этические <b>принципы</b>
					</p>
					<SubTitle>
						Программа ответственных закупок <b>масла&nbsp;ши</b>
					</SubTitle>
				</MobileTitle>
				<Wrapper>
					<ImageWrapper>
						<img
							src="/assets/images/green/modals/ecological/principles.svg"
							alt="principles"
						/>
					</ImageWrapper>
					<div>
						<DesktopTitle>
							<p>
								Этические <b>принципы</b>
							</p>
							<SubTitle>
								Программа ответственных закупок <b>масла&nbsp;ши</b>
							</SubTitle>
						</DesktopTitle>
						<Text>
							Совместная программа для оказания помощи 13 000 женщин в
							Буркина-Фасо
						</Text>
					</div>
				</Wrapper>
			</PointItem>
			<Ad>Реклама skin.ru ERID: 2SDnjbvpmqA</Ad>
		</PointsWrapper>
	)
}

export default LrpPoints

const SubTitle = styled.div`
	font-weight: 300;
	font-size: 16px;
	line-height: 120%;
	text-transform: uppercase;
	color: #000000;
`
const ImageWrapper = styled.div`
	max-height: 79px;
`

const Text = styled.div`
	font-weight: 300;
	font-size: 14px;
	line-height: 17px;
	color: #000000;
	${media.phone`
	font-size: 11px;
  `}
`

const Wrapper = styled.div`
	display: flex;

	img {
		margin-right: 16px;
		flex-shrink: 0;
		width: 83px;
	}

	${media.sm`
    align-items: center;
  `}
`

const PointItem = styled.div`
	display: flex;
	flex-direction: column;

	&:first-child {
		position: relative;
		padding: 10px 10px 10px 10px;
		border: 1px dashed #229dd8;
		border-radius: 4px;
	}

	&:not(:last-child) {
		margin-bottom: 16px;
	}

	${media.sm`
      &:not(:last-child) {
        margin-bottom: 32px;
      }
  `}
`

const PointsWrapper = styled.div`
	padding: 0 15px 20px 15px;
	max-width: 562px;
	width: 100%;
	display: flex;
	flex-direction: column;
`

const Title = styled.div`
	font-weight: 300;
	font-size: 16px;
	line-height: 120%;
	text-transform: uppercase;
	color: #000000;
	margin-bottom: 8px;
`

const DesktopTitle = styled(Title)`
	${media.sm`
    display: none;
  `}
`

const MobileTitle = styled(Title)`
	display: none;

	margin-bottom: 16px;

	${media.sm`
      display: block;
			margin-right: 40px;
  `}
	${media.phone`
      display: block;
			margin-right: 36px;
  `}
`

const TextAndButtonWrapper = styled.div`
	display: flex;

	${Text} {
		margin-right: 55px;
	}

	${media.sm`

	${Text} {
		margin-right: 0px;
	}

	  `}
`

const PopupButton = styled.div`
	/* display: flex;
	text-align: center; */
	position: absolute;
	top: 40px;
	right: 10px;

	img {
		width: 36px;
		margin-right: 0px;
		cursor: pointer;
	}

	${media.sm`
		position: absolute;
		top:15px;
		right: 10px;
`}
`
const Ad = styled.div`
	margin-top: 25px;
	color: #141414;
	text-align: center;
	font-size: 14px;
	font-weight: 300;
	line-height: 120%;
	${media.sm`
	font-size: 12px;
  `}
`
