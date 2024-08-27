const SPEED_CHOICES = [
	{ id: '18', label: 'Speed 24 (Fast)' },
	{ id: '17', label: 'Speed 23' },
	{ id: '16', label: 'Speed 22' },
	{ id: '15', label: 'Speed 21' },
	{ id: '14', label: 'Speed 20' },
	{ id: '13', label: 'Speed 19' },
	{ id: '12', label: 'Speed 18' },
	{ id: '11', label: 'Speed 17' },
	{ id: '10', label: 'Speed 16' },
	{ id: '0F', label: 'Speed 15' },
	{ id: '0E', label: 'Speed 14' },
	{ id: '0D', label: 'Speed 13' },
	{ id: '0C', label: 'Speed 12' },
	{ id: '0B', label: 'Speed 11' },
	{ id: '0A', label: 'Speed 10' },
	{ id: '09', label: 'Speed 09' },
	{ id: '08', label: 'Speed 08' },
	{ id: '07', label: 'Speed 07' },
	{ id: '06', label: 'Speed 06' },
	{ id: '05', label: 'Speed 05' },
	{ id: '04', label: 'Speed 04' },
	{ id: '03', label: 'Speed 03' },
	{ id: '02', label: 'Speed 02' },
	{ id: '01', label: 'Speed 01 (Slow)' },
]
const DefaultSpeedChoice = '0C'

export const PanTiltSetSpeedOption = {
	id: 'speed',
	choices: SPEED_CHOICES,
	default: DefaultSpeedChoice,
}

export const FocusModeOption = {
	id: 'bol',
	choices: [
		{ id: '0', label: 'Auto Focus' },
		{ id: '1', label: 'Manual Focus' },
	],
	default: '0',
	choiceToParam: (choice: string): number => {
		switch (choice) {
			case '0':
				return 2
			case '1':
				return 3
			default:
				return 2
		}
	},
	paramToChoice: (param: number): string => {
		switch (param) {
			case 2:
				return '0'
			case 3:
				return '1'
			default:
				return '0'
		}
	},
}

export const ExposureModeOption = {
	id: 'val',
	choices: [
		{ id: '0', label: 'Full auto' },
		{ id: '1', label: 'Manual' },
		{ id: '2', label: 'Shutter Pri' },
		{ id: '3', label: 'Iris Pri' },
		{ id: '4', label: 'Bright mode (manual)' }, // Not in latest API doc: remove?
	],
	default: '0',
	choiceToParam: (choice: string): number => {
		switch (choice) {
			case '0':
				return 0x0
			case '1':
				return 0x3
			case '2':
				return 0xa
			case '3':
				return 0xb
			case '4':
				return 0xd
			default:
				return 0x0
		}
	},
	paramToChoice: (param: number): string => {
		switch (param) {
			case 0x0:
				return '0'
			case 0x3:
				return '1'
			case 0xa:
				return '2'
			case 0xb:
				return '3'
			default:
				return '0'
		}
	},
}

export const IrisSetOption = {
	id: 'val',
	choices: [
		{ id: '11', label: 'F1.8' },
		{ id: '10', label: 'F2.0' },
		{ id: '0F', label: 'F2.4' },
		{ id: '0E', label: 'F2.8' },
		{ id: '0D', label: 'F3.4' },
		{ id: '0C', label: 'F4.0' },
		{ id: '0B', label: 'F4.8' },
		{ id: '0A', label: 'F5.6' },
		{ id: '09', label: 'F6.8' },
		{ id: '08', label: 'F8.0' },
		{ id: '07', label: 'F9.6' },
		{ id: '06', label: 'F11' },
		{ id: '00', label: 'CLOSED' },
	],
	default: '0C',
	choiceToParam: (choice: string): number => {
		return parseInt(choice, 16)
	},
}

export const ShutterSetOption = {
	id: 'val',
	choices: [
		{ id: '11', label: '1/1000000' },
		{ id: '10', label: '1/6000' },
		{ id: '0F', label: '1/4000' },
		{ id: '0E', label: '1/3000' },
		{ id: '0D', label: '1/2000' },
		{ id: '0C', label: '1/1500' },
		{ id: '0B', label: '1/1000' },
		{ id: '0A', label: '1/725' },
		{ id: '09', label: '1/500' },
		{ id: '08', label: '1/350' },
		{ id: '07', label: '1/250' },
		{ id: '06', label: '1/180' },
		{ id: '05', label: '1/125' },
		{ id: '04', label: '1/100' },
		{ id: '03', label: '1/90' },
		{ id: '02', label: '1/60' },
		{ id: '01', label: '1/30' },
	],
	default: '04',
	choiceToParam: (choice: string): number => {
		return parseInt(choice, 16)
	},
}

export const CameraPowerOption = {
	id: 'bool',
	choices: [
		{ id: 'off', label: 'standby' },
		{ id: 'on', label: 'on' },
	],
	default: 'on',
	choiceToParam: (choice: string): number => {
		switch (choice) {
			case 'off':
				return 0x3
			case 'on':
				return 0x2
			default:
				return 0x2
		}
	},
}

export const OnScreenDisplayOption = {
	id: 'state',
	choices: [
		{ id: 'open', label: 'open' },
		{ id: 'close', label: 'close' },
	],
	choiceToParam: (choice: string): number => {
		switch (choice) {
			case 'open':
				return 0x2
			case 'close':
				return 0x3
			default:
				return 0x3
		}
	},
	paramToChoice: (param: number): string => {
		switch (param) {
			case 0x2:
				return 'open'
			case 0x3:
				return 'close'
			default:
				return 'close'
		}
	},
}

export const OnScreenDisplayNavigateOption = {
	id: 'direction',
	choices: [
		{ id: 'up', label: 'up' },
		{ id: 'right', label: 'right' },
		{ id: 'down', label: 'down' },
		{ id: 'left', label: 'left' },
	],
	choiceToParam: (choice: string): number => {
		switch (choice) {
			case 'up':
				return 0x31
			case 'right':
				return 0x23
			case 'down':
				return 0x32
			case 'left':
				return 0x13
			default:
				return 0x32
		}
	},
}

export const WhiteBalanceOption = {
	id: 'val',
	choices: [
		{ id: 'automatic', label: 'Automatic' },
		{ id: 'indoor', label: 'Indoor' },
		{ id: 'outdoor', label: 'Outdoor' },
		{ id: 'onepush', label: 'One Push' },
		{ id: 'manual', label: 'Manual' },
	],
	default: 'automatic',
	choiceToParam: (choice: string): number => {
		switch (choice) {
			case 'automatic':
				return 0x0
			case 'indoor':
				return 0x1
			case 'outdoor':
				return 0x2
			case 'onepush':
				return 0x3
			case 'manual':
				return 0x5
			default:
				return 0x0
		}
	},
}

export const AutoWhiteBalanceSensitivityOption = {
	id: 'val',
	choices: [
		{ id: 0, label: 'High' },
		{ id: 1, label: 'Normal' },
		{ id: 2, label: 'Low' },
	],
	default: 1,
	choiceToParam: (choice: string): number => {
		return Number(choice)
	},
}

export function twoDigitHex(n: number): string {
	return n.toString(16).padStart(2, '0')
}

export function isValidPreset(n: number): boolean {
	return n < 90 || (n > 99 && n < 255)
}

const PRESET_CHOICES = []
for (let i = 0; i < 255; ++i) {
	if (isValidPreset(i)) {
		PRESET_CHOICES.push({ id: twoDigitHex(i), label: String(i) })
	}
}

export const PresetSaveOption = {
	id: 'val',
	choices: PRESET_CHOICES,
	default: 'FD', // preset 253 is likely unused so is as safe a default as any
	choiceToParam: (choice: string): number => {
		return parseInt(choice, 16)
	},
}

export const PresetRecallOption = {
	id: 'val',
	choices: PRESET_CHOICES,
	default: '00', // preset 0 recalls the home setting
	choiceToParam: (choice: string): number => {
		return parseInt(choice, 16)
	},
}

export const PresetDriveNumberOption = {
	id: 'val',
	choices: PRESET_CHOICES,
	default: '01',
	choiceToParam: (choice: string): number => {
		return parseInt(choice, 16)
	},
}

export const PresetDriveSpeedOption = {
	id: 'speed',
	choices: SPEED_CHOICES,
	default: DefaultSpeedChoice,
	choiceToParam: (choice: string): number => {
		return parseInt(choice, 16)
	},
}

export const AutoTrackingOption = {
	id: 'tracking',
	choices: [
		{ id: 'off', label: 'Off' },
		{ id: 'on', label: 'On' },
	],
	default: 'off',
	choiceToParam: (choice: string): number => {
		switch (choice) {
			case 'on':
				return 0x2
			case 'off':
				return 0x3
			default:
				return 0x2
		}
	},
}
