export const TYPE_NAMES = {
	trivia: 'Интересный факт',
	math: 'Математический факт',
	date: 'Историческое событие',
	year: 'Факт о годе',
}

export type TypeKey = keyof typeof TYPE_NAMES
