import React from 'react'

import AppLayout from "@/layouts/AppLayout"
import VichyFormula from "@/components/screens/vichy/formula/VichyFormula";

const VichyFormulaGamePage = () => {

    return (
        <AppLayout
            title="Собери формулу Vichy"
            style={{
                background: '#fff',
                // height: '100%',
                // overflowY: 'auto',
                overflow: 'hidden'
            }}
        >
            <VichyFormula />
        </AppLayout>
    )
}

export default VichyFormulaGamePage
