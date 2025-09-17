import React from 'react'
import { useWindowSize } from 'react-use'

const GameField = () => {
	const { width, height } = useWindowSize()
	const viewBox = `0 0 ${Math.round(width * 0.9)} ${Math.round(height * 0.9)}`
	return (
		<svg
			width="90%"
			height="90%"
			style={{ display: 'block', width: '90%', height: '90%' }}
		>
			<svg
				width={Math.round(width * 0.9)}
				height={Math.round(height * 0.9)}
				viewBox={viewBox}
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				style={{ display: 'block', width: '100%', height: '100%' }}
			>
				<path
					d="M0 0V1045.41V1047H1622V0L1218.38 30.7941L809.75 48.8458L407.626 30.7941L0 0Z"
					fill="#364E14"
				/>
			</svg>

			<svg
				id="green-game-corners"
				width={Math.round(width * 0.9)}
				height={Math.round(height * 0.9)}
				viewBox={viewBox}
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				style={{ display: 'block', width: '100%', height: '100%' }}
			>
				<g filter="url(#filter0_b_6207_17724)">
					<path
						d="M0 8.69788C0 4.0163 3.68111 0.306513 8.34719 0.687213C74.9985 6.1252 525.958 42 823 42C1120.04 42 1571 6.1252 1637.65 0.687211C1642.32 0.306512 1646 4.01627 1646 8.69785V1049C1646 1053.42 1642.42 1057 1638 1057H8.00002C3.58175 1057 0 1053.42 0 1049V8.69788Z"
						fill="url(#paint0_linear_6207_17724)"
						fillOpacity="0.1"
					/>
					<path
						d="M0 8.69788C0 4.0163 3.68111 0.306513 8.34719 0.687213C74.9985 6.1252 525.958 42 823 42C1120.04 42 1571 6.1252 1637.65 0.687211C1642.32 0.306512 1646 4.01627 1646 8.69785V1049C1646 1053.42 1642.42 1057 1638 1057H8.00002C3.58175 1057 0 1053.42 0 1049V8.69788Z"
						fill="url(#paint1_linear_6207_17724)"
						fillOpacity="0.3"
					/>
					<path
						d="M823 54C1114.45 54 1553.42 19.5521 1634 13.0237V1045H12V13.0237C92.5848 19.5521 531.555 54 823 54Z"
						stroke="white"
						strokeWidth="24"
					/>
				</g>
				<defs>
					<filter
						id="filter0_b_6207_17724"
						x="-96"
						y="-95.3398"
						width="1838"
						height="1248.34"
						filterUnits="userSpaceOnUse"
						colorInterpolationFilters="sRGB"
					>
						<feFlood floodOpacity="0" result="BackgroundImageFix" />
						<feGaussianBlur in="BackgroundImageFix" stdDeviation="48" />
						<feComposite
							in2="SourceAlpha"
							operator="in"
							result="effect1_backgroundBlur_6207_17724"
						/>
						<feBlend
							mode="normal"
							in="SourceGraphic"
							in2="effect1_backgroundBlur_6207_17724"
							result="shape"
						/>
					</filter>
					<linearGradient
						id="paint0_linear_6207_17724"
						x1="823"
						y1="20"
						x2="823"
						y2="1017"
						gradientUnits="userSpaceOnUse"
					>
						<stop stopColor="#D9D9D9" />
						<stop offset="1" stopColor="#D9D9D9" stopOpacity="0.26" />
					</linearGradient>
					<linearGradient
						id="paint1_linear_6207_17724"
						x1="0.506244"
						y1="19.6725"
						x2="1647.71"
						y2="145.06"
						gradientUnits="userSpaceOnUse"
					>
						<stop offset="0.624423" stopColor="white" stopOpacity="0" />
						<stop offset="0.707758" stopColor="white" stopOpacity="0.67" />
						<stop offset="0.874428" stopColor="white" stopOpacity="0" />
					</linearGradient>
				</defs>
			</svg>
			<svg
				width="100%"
				height="100%"
				viewBox="0 0 1646 995"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<g opacity="0.5">
					<mask
						id="mask0_6207_17725"
						style={{ maskType: 'alpha' }}
						maskUnits="userSpaceOnUse"
						x="0"
						y="0"
						width="100%"
						height="100%"
					>
						<path
							d="M1642 4.34893V1013H4V4.34891C4 4.34747 4 4.34604 4.00001 4.34461C53.5895 8.42186 518.86 46 823 46C1127.14 46 1592.41 8.42184 1642 4.34461C1642 4.34604 1642 4.34748 1642 4.34893ZM4.0337 4.15084C4.03371 4.15085 4.0335 4.15124 4.03302 4.15199L4.0337 4.15084Z"
							fill="url(#paint0_linear_6207_17725)"
							fillOpacity="1"
						/>
						<path
							d="M1642 4.34893V1013H4V4.34891C4 4.34747 4 4.34604 4.00001 4.34461C53.5895 8.42186 518.86 46 823 46C1127.14 46 1592.41 8.42184 1642 4.34461C1642 4.34604 1642 4.34748 1642 4.34893ZM4.0337 4.15084C4.03371 4.15085 4.0335 4.15124 4.03302 4.15199L4.0337 4.15084Z"
							fill="url(#paint1_linear_6207_17725)"
							fillOpacity="1"
						/>
						<path
							d="M1642 4.34893V1013H4V4.34891C4 4.34747 4 4.34604 4.00001 4.34461C53.5895 8.42186 518.86 46 823 46C1127.14 46 1592.41 8.42184 1642 4.34461C1642 4.34604 1642 4.34748 1642 4.34893ZM4.0337 4.15084C4.03371 4.15085 4.0335 4.15124 4.03302 4.15199L4.0337 4.15084Z"
							stroke="white"
							strokeWidth="8"
						/>
					</mask>
					<g mask="url(#mask0_6207_17725)">
						<g opacity="0.3">
							<path
								d="M-549.986 82.9996C-98.31 377.5 208.265 665 208.27 995"
								stroke="white"
								strokeDasharray="16 8"
							/>
							<path
								d="M-174.986 82.9996C153.055 377.5 375.713 665 375.717 995"
								stroke="white"
								strokeDasharray="16 8"
							/>
							<path
								d="M2190 82.9996C1738.32 377.5 1431.75 665 1431.74 995"
								stroke="white"
								strokeDasharray="16 8"
							/>
							<path
								d="M1815 82.9996C1486.96 377.5 1264.3 665 1264.3 995"
								stroke="white"
								strokeDasharray="16 8"
							/>
							<path
								d="M330 -83.9994C421 177.5 528 481.5 528 995"
								stroke="white"
								strokeDasharray="16 8"
							/>
							<path
								d="M573.069 -83.9995C618.792 177.5 672.555 481.5 672.555 995"
								stroke="white"
								strokeDasharray="16 8"
							/>
							<path
								d="M1307.07 -83.9994C1216.07 177.5 1109.07 481.5 1109.07 995"
								stroke="white"
								strokeDasharray="16 8"
							/>
							<path
								d="M1064 -83.9995C1018.28 177.5 964.514 481.5 964.514 995"
								stroke="white"
								strokeDasharray="16 8"
							/>
							<path d="M822 -84V998" stroke="white" strokeDasharray="16 8" />
						</g>
						<g opacity="0.3">
							<path
								d="M-347.987 82.9997C37.0913 377.5 298.463 665 298.468 995"
								stroke="white"
								strokeWidth="0.5"
							/>
							<path
								d="M5.01418 -182.826C273.711 197.21 456.089 568.214 456.092 994.06"
								stroke="white"
								strokeWidth="0.5"
							/>
							<path
								d="M1988 82.9997C1602.92 377.5 1341.55 665 1341.54 995"
								stroke="white"
								strokeWidth="0.5"
							/>
							<path
								d="M1635 -182.826C1366.3 197.21 1183.93 568.214 1183.92 994.06"
								stroke="white"
								strokeWidth="0.5"
							/>
							<path
								d="M455.601 -83.9995C523.254 177.5 602.803 481.5 602.803 995"
								stroke="white"
								strokeWidth="0.5"
							/>
							<path
								d="M700.601 -83.9996C722.618 177.5 748.506 481.5 748.506 995"
								stroke="white"
								strokeWidth="0.5"
							/>
							<path
								d="M1182 -83.9995C1114.35 177.5 1034.8 481.5 1034.8 995"
								stroke="white"
								strokeWidth="0.5"
							/>
							<path
								d="M936.999 -83.9996C914.982 177.5 889.094 481.5 889.094 995"
								stroke="white"
								strokeWidth="0.5"
							/>
						</g>
					</g>
				</g>
				<defs>
					<linearGradient
						id="paint0_linear_6207_17725"
						x1="823"
						y1="0"
						x2="823"
						y2="997"
						gradientUnits="userSpaceOnUse"
					>
						<stop stopColor="#D9D9D9" />
						<stop offset="1" stopColor="#D9D9D9" stopOpacity="0.26" />
					</linearGradient>
					<linearGradient
						id="paint1_linear_6207_17725"
						x1="0.506243"
						y1="-0.32752"
						x2="1647.71"
						y2="125.06"
						gradientUnits="userSpaceOnUse"
					>
						<stop offset="0.624423" stopColor="white" stopOpacity="0" />
						<stop offset="0.707758" stopColor="white" stopOpacity="0.67" />
						<stop offset="0.874428" stopColor="white" stopOpacity="0" />
					</linearGradient>
				</defs>
			</svg>
		</svg>
	)
}

export default GameField
