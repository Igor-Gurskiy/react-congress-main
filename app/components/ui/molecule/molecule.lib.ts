import { EventsEnum } from '@/api/tracker'

export const trackerIds = {
	// LRP MOLECULE EVENTS
	'lrp-room': EventsEnum.lrpMolecule1,
	'lrp-onco': EventsEnum.lrpMolecule2,
	'lrp-fondation': EventsEnum.lrpMolecule3,
	'lrp-melanome-day': EventsEnum.lrpMolecule4,

	'lrp-molecule-5': EventsEnum.lrpMolecule5,
	'lrp-molecule-6': EventsEnum.lrpMolecule6,
	'lrp-molecule-7': EventsEnum.lrpMolecule7,
	'lrp-molecule-8': EventsEnum.lrpMolecule8,
	'lrp-molecule-9': EventsEnum.lrpMolecule9,
	'lrp-molecule-10': EventsEnum.lrpMolecule10,

	// DERCOS MOLECULE EVENTS
	'dercos-room': EventsEnum.dercosMolecule1,
	'dercos-dandruff-header': EventsEnum.dercosMolecule2,
	'dercos-dandruff-components': EventsEnum.dercosMolecule3,
	'dercos-dandruff': EventsEnum.dercosMolecule4,
	'dercos-psolution-header': EventsEnum.dercosMolecule5,
	'dercos-psolution-footer': EventsEnum.dercosMolecule6,
	'dercos-psolution': EventsEnum.dercosMolecule7,
	'dercos-aminexil-water': EventsEnum.dercosMolecule8,
	'dercos-aminexil-footer': EventsEnum.dercosMolecule9,
	'dercos-aminexil': EventsEnum.dercosMolecule10,

	// VICHY MOLECULE EVENTS
	'vichy-room': EventsEnum.vichyMolecule1,
	'vichy-deodorant': EventsEnum.vichyMolecule2,
	'vichy-deodorant-line': EventsEnum.vichyMolecule3,
	'vichy-serum': EventsEnum.vichyMolecule4,
	'vichy-serum-footer': EventsEnum.vichyMolecule5,
	'vichy-mineral': EventsEnum.vichyMolecule6,
	'vichy-neovadiol-components': EventsEnum.vichyMolecule7,
	'vichy-neovadiol': EventsEnum.vichyMolecule8,
	'vichy-normaderm-photo': EventsEnum.vichyMolecule9,
	'vichy-normaderm': EventsEnum.vichyMolecule10,
}
