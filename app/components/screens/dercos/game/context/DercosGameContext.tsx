import React, { createContext, useContext } from 'react'

const DercosGameContext = createContext({
	addArrow: (...args: any) => {},
	removeArrow: (targetId: string, type?: 'source' | 'target') => {},
	showAnswers: false as boolean,
	arrows: [] as Array<{ start: string; end: string; color: string }>,
})

export const useDercosGameContext = () => {
	const context = useContext(DercosGameContext)
	if (!context) {
		throw new Error('useArrowContext must be used within an ArrowProvider')
	}
	return context
}

export const DercosGameProvider = ({
	children,
	addArrow,
	removeArrow,
	arrows,
	showAnswers,
}) => {
	return (
		<DercosGameContext.Provider
			value={{ addArrow, removeArrow, arrows, showAnswers }}
		>
			{children}
		</DercosGameContext.Provider>
	)
}
