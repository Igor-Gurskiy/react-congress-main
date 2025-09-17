import React from "react"

import styles from './AnswerTip.module.scss'
import RecycleButton from "@/components/screens/green/recycle/shared/RecycleButton"
import StemIcon from "@/components/screens/green/recycle/shared/tip/StemIcon"
import LeafIcon from "@/components/screens/green/recycle/shared/tip/LeafIcon"
import clsx from "clsx";
import styled, {css} from "styled-components";

const AnswerTip = (
    {
        close = () => {},
        content = '',
        handleNext = () => {},
        correct = false
    }
) => {

    const handleAboutClick = (event: React.SyntheticEvent<HTMLButtonElement>) => {
        event.preventDefault()

        const modalEvent = new CustomEvent('open-recycle-about')

        document.dispatchEvent(modalEvent)
    }

    return (
        <div className={clsx(styles.tip, { [styles.incorrectTip]: !correct })}>
            <div className={styles.tipHeader}>
                <div className={styles.tipLogoWrapper}>
                    <div className={styles.tipLogo}>
                        {correct ? (
                            <img src="/assets/images/green/recycle/game/smile.svg" alt="" />
                        ) : (
                            <img src="/assets/images/green/recycle/game/sad.svg" alt="" />
                        )}
                    </div>
                </div>
            </div>

            <div className={clsx(styles.tipBody, { [styles.incorrectTipBody]: !correct })}>
                <div className={styles.tipTitle}>
                    {correct ? 'ПРАВИЛЬНО' : 'НЕПРАВИЛЬНО'}
                </div>
                <div className={styles.tipContent}>
                   <ContentWrapper $correct={correct}>
                       {content}
                   </ContentWrapper>
                </div>
                <div className={styles.controls}>
                    <RecycleButton
                        className={clsx(styles.button, styles.moreButton)}
                        onClick={handleAboutClick}
                    >
                        <StemIcon width={24} height={26} />
                        <p>подробнее</p>
                        <LeafIcon width={16} height={14} />
                    </RecycleButton>
                    <RecycleButton
                        className={clsx(styles.button, styles.nextButton)}
                        onClick={() => {
                            handleNext()
                            close()
                        }}
                    >
                        далее
                    </RecycleButton>
                </div>
            </div>
        </div>
    )
}

export default AnswerTip

const ContentWrapper = styled.div<any>`
  img {
    margin-right: 24px;
  }
  
  img.correct {
    display: none;
  }

  img.incorrect {
    display: block;
  }
  
  ${({ $correct }) => $correct && css`
    img.correct {
      display: block;
    }

    img.incorrect {
      display: none;
    }
  `}
`