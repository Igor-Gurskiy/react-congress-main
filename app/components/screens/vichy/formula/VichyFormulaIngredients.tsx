import vichyIngredients from "@/components/screens/vichy/formula/config/ingredients";
import FormulaIngredient from "@/components/screens/vichy/formula/shared/ingredient/FormulaIngredient";
import React from "react";

import {animated, useTransition} from 'react-spring'
import styled from "styled-components";

const VichyFormulaIngredients = ({ state }) => {
    const transitions = useTransition(!state.finished, {
        from: { opacity: 0, scale: 1.5 },
        enter: { opacity: 1, scale: 1 },
        leave: { opacity: 0, scale: 1.5 },
        config: {
            // easing: easePoly.exponent(2),
            duration: 300
        }
    })

    return transitions((style, item) => item ? (
        <Wrapper style={style}>
            {vichyIngredients.map(ingredient => (
                <FormulaIngredient state={state} key={ingredient.source} top={ingredient.pos.y} left={ingredient.pos.x} ingredient={ingredient} />
            ))}
        </Wrapper>
    ) : '')
}

export default VichyFormulaIngredients

const Wrapper = styled(animated.div)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  
  transform-origin: center;
`