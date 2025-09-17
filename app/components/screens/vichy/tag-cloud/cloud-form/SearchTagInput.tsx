import Select, {
	components,
	OptionProps,
	Props as SelectProps,
} from 'react-select'
import { Controller } from 'react-hook-form'
import VirtualizedMenuList from '@/components/screens/vichy/tag-cloud/cloud-form/VirtualList'
import { FC } from 'react'

const customNoOptionsMessage = () => 'Нет тегов для выбора'
const CustomOption = ({ children, ...props }) => {
	// eslint-disable-next-line no-unused-vars
	const { onMouseMove, onMouseOver, ...rest } = props.innerProps
	const newProps = { ...props, innerProps: rest }
	return (
		<components.Option {...(newProps as OptionProps)}>
			{children}
		</components.Option>
	)
}

const SearchTagInput: FC<SelectProps & { control: any }> = ({
	control,
	...props
}) => {
	return (
		<Controller
			name="tag" // Укажите имя для контролируемого элемента
			control={control}
			defaultValue={null} // Установите начальное значение
			render={({ field }) => (
				<Select
					options={props.options || []}
					isSearchable
					classNamePrefix="search-tag-select"
					noOptionsMessage={customNoOptionsMessage}
					captureMenuScroll={false}
					components={{
						Option: CustomOption,
						MenuList: (props) => <VirtualizedMenuList {...props} />,
					}}
					{...field}
					{...props}
				/>
			)}
		/>
	)
}

export default SearchTagInput
