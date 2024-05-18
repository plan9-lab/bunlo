const ansiColors: any = {
	reset: '\x1b[0m',
	bold: '\x1b[1m',
	dim: '\x1b[2m',
	italic: '\x1b[3m',
	underline: '\x1b[4m',
	inverse: '\x1b[7m',
	hidden: '\x1b[8m',
	strikethrough: '\x1b[9m',
	black: '\x1b[30m',
	red: '\x1b[31m',
	green: '\x1b[32m',
	yellow: '\x1b[33m',
	blue: '\x1b[34m',
	magenta: '\x1b[35m',
	cyan: '\x1b[36m',
	white: '\x1b[37m',
}

export class Bunlo {
	name?: string

	constructor(name?: string) {
		this.name = name
	}

	private _log(color: string, type: string, ...args: any[]) {
		const c = console as any

		c[type](
			`${ansiColors[color]}[${this.name}]${ansiColors.reset}`,
			...args
		)
	}

	log(...args: any[]) {
		this._log('dim', 'log', ...args)
	}

	info(...args: any[]) {
		this._log('blue', 'info', ...args)
	}

	warn(...args: any[]) {
		this._log('yellow', 'warn', ...args)
	}

	error(...args: any[]) {
		this._log('red', 'error', ...args)
	}
}