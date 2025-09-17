import React from 'react'
import { animated, useTransition } from 'react-spring'
import styled, { css } from 'styled-components'

const ToggleComponent = ({
    children,
    ...otherProps
}) => {
    return React.cloneElement(children, { ...otherProps })
}

const ContentComponent = ({
    children,
    active,
    ...otherProps
}) => {
    const transitions = useTransition(active, {
        from: { opacity: 0, height: 0 },
        enter: { opacity: 1, height: 'auto' },
        leave: { opacity: 0, height: 0 },
    })
    return transitions((style, item) => item ? (
        <ContentContainer style={style}>
            {children}
        </ContentContainer>
    ) : '')
}

class Accordion extends React.Component {
    static Toggle = ToggleComponent
    static Content = ContentComponent

    state = {
        open: false
    }

    toggleOpen = () => {
        this.setState({ open: !this.state.open })
    }
    
    render() {
        const { children = [], component: Component } = this.props;
        const boundChildren = React.Children.map(children, child => {
            if (child.type === ToggleComponent) {
              child = (
                React.cloneElement(child, {
                    onClick: () => {
                        this.toggleOpen()
                    },
                })
              )
            } 
            else if (child.type === ContentComponent) {
                child = (
                    React.cloneElement(child, {
                        active: this.state.open
                    })
                  )
            }
            return child;
          });

        return (
            <Container active={this.state.open}>
                {boundChildren}
            </Container>
        )
    }
}

const Container = styled.div`
    transition: all 0.5s;
    &:hover {
        opacity: 0.7;
    }

    ${props => props.active && css`
        border-radius: 24px;
    `}
`

const ContentContainer = styled(animated.div)`
`

export default Accordion