import React from 'react'
import { FixedSizeList } from 'react-window'
import AutoSizer from 'react-virtualized-auto-sizer'

const VirtualizedMenuList = ({ children }) => {
	const itemCount = React.Children.count(children)

	if (itemCount === 0) {
		return <div>No options available</div>
	}

	return (
		<AutoSizer disableHeight>
			{({ width }) => (
				<FixedSizeList
					height={Math.min(itemCount * 44, 200)} // Максимум 200 пикселей
					width={width}
					itemCount={itemCount}
					itemSize={44}
					resetAfterIndex
				>
					{({ index, style }) => {
						const child = React.Children.toArray(children)[index]
						return (
							<div style={style}>
								{React.cloneElement(child as any, {
									isFocused: false,
									onMouseDown: (event) => event.preventDefault(),
								})}
							</div>
						)
					}}
				</FixedSizeList>
			)}
		</AutoSizer>
	)
}

export default VirtualizedMenuList
