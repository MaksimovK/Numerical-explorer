import type { TypeKey } from '../constants/category.constant'

export interface IFactRequest {
	number?: string
	type: TypeKey
}

export interface IFactResponse {
	text: string
	found: boolean
	number?: string
	type: TypeKey
	date: string
	year: string
}
