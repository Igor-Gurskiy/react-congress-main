import {
	MASK_COLOR,
	WordColliderMask,
	WordColliderMaskOptions,
} from '@alesmenzel/cloud-react'

export default class RectangleWordColliderMask implements WordColliderMask {
	_options: Required<WordColliderMaskOptions>
	inverted: boolean

	constructor(options?: WordColliderMaskOptions) {
		this._options = { inverted: true, ...options }
		this.inverted = this._options.inverted
	}

	generate(context: CanvasRenderingContext2D) {
		const { width, height } = context.canvas
		const x = 0
		const y = 0

		context.beginPath()
		context.rect(x, y, width, height)
		context.closePath()

		context.fillStyle = MASK_COLOR
		context.fill()
	}
}
