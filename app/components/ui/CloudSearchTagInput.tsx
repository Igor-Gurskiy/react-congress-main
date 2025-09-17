import { components, OptionProps, Props as SelectProps } from 'react-select'
import { Controller } from 'react-hook-form'
import CustomMenuList from '@/components/screens/vichy/tag-cloud/cloud-form/VirtualList'
import CreatableSelect from 'react-select/creatable'
import { FC } from 'react'

const customNoOptionsMessage = () => 'Нет тегов для выбора'
const customCreateLabel = (input: string) => input
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

type CloudTagInputProps = {
	control: any
}

const CloudSearchTagInput: FC<SelectProps & CloudTagInputProps> = ({
	control,
	...props
}) => {
	return (
		<Controller
			name="tag" // Укажите имя для контролируемого элемента
			control={control}
			defaultValue={null} // Установите начальное значение
			render={({ field }) => (
				<CreatableSelect
					options={props.options || []}
					isSearchable
					classNamePrefix="search-tag-select"
					noOptionsMessage={customNoOptionsMessage}
					formatCreateLabel={customCreateLabel}
					captureMenuScroll={false}
					components={{ Option: CustomOption, MenuList: CustomMenuList as any }}
					{...field}
					{...props}
				/>
			)}
		/>
	)
}

export default CloudSearchTagInput
