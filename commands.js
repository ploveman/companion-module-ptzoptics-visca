import {
	CameraPowerOption,
	ExposureModeOption,
	FocusModeOption,
	PresetRecallOption,
	PresetSaveOption,
	WhiteBalanceOption,
} from './options.js'
import { ModuleDefinedCommand } from './visca/command.js'

export const ExposureMode = new ModuleDefinedCommand([0x81, 0x01, 0x04, 0x39, 0x00, 0xff], {
	[ExposureModeOption.id]: {
		nibbles: [9],
		choiceToParam: ExposureModeOption.choiceToParam,
	},
})

export const IrisUp = new ModuleDefinedCommand([0x81, 0x01, 0x04, 0x0b, 0x02, 0xff])
export const IrisDown = new ModuleDefinedCommand([0x81, 0x01, 0x04, 0x0b, 0x03, 0xff])

export const ShutterUp = new ModuleDefinedCommand([0x81, 0x01, 0x04, 0x0a, 0x02, 0xff])
export const ShutterDown = new ModuleDefinedCommand([0x81, 0x01, 0x04, 0x0a, 0x03, 0xff])

export const FocusStop = new ModuleDefinedCommand([0x81, 0x01, 0x04, 0x08, 0x00, 0xff])
export const FocusNearStandard = new ModuleDefinedCommand([0x81, 0x01, 0x04, 0x08, 0x03, 0xff])
export const FocusFarStandard = new ModuleDefinedCommand([0x81, 0x01, 0x04, 0x08, 0x02, 0xff])

export const FocusMode = new ModuleDefinedCommand([0x81, 0x01, 0x04, 0x38, 0x00, 0xff], {
	[FocusModeOption.id]: {
		nibbles: [9],
		choiceToParam: FocusModeOption.choiceToParam,
	},
})

export const FocusLock = new ModuleDefinedCommand([0x81, 0x0a, 0x04, 0x68, 0x02, 0xff])
export const FocusUnlock = new ModuleDefinedCommand([0x81, 0x0a, 0x04, 0x68, 0x03, 0xff])

export const ZoomIn = new ModuleDefinedCommand([0x81, 0x01, 0x04, 0x07, 0x02, 0xff])
export const ZoomOut = new ModuleDefinedCommand([0x81, 0x01, 0x04, 0x07, 0x03, 0xff])
export const ZoomStop = new ModuleDefinedCommand([0x81, 0x01, 0x04, 0x07, 0x00, 0xff])

export const CameraPower = new ModuleDefinedCommand([0x81, 0x01, 0x04, 0x00, 0x00, 0xff], {
	[CameraPowerOption.id]: {
		nibbles: [9],
		choiceToParam: CameraPowerOption.choiceToParam,
	},
})

export const WhiteBalance = new ModuleDefinedCommand([0x81, 0x01, 0x04, 0x35, 0x00, 0xff], {
	[WhiteBalanceOption.id]: {
		nibbles: [9],
		choiceToParam: WhiteBalanceOption.choiceToParam,
	},
})

export const WhiteBalanceOnePushTrigger = new ModuleDefinedCommand([0x81, 0x01, 0x04, 0x10, 0x05, 0xff])

export const PresetSave = new ModuleDefinedCommand([0x81, 0x01, 0x04, 0x3f, 0x01, 0x00, 0xff], {
	[PresetSaveOption.id]: {
		nibbles: [10, 11],
		choiceToParam: PresetSaveOption.choiceToParam,
	},
})

export const PresetRecall = new ModuleDefinedCommand([0x81, 0x01, 0x04, 0x3f, 0x02, 0x00, 0xff], {
	[PresetRecallOption.id]: {
		nibbles: [10, 11],
		choiceToParam: PresetRecallOption.choiceToParam,
	},
})
