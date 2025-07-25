import axios from 'axios'
import type { IFactRequest, IFactResponse } from '../types/number.types'

class NumbersService {
	private BASE_URL = 'http://numbersapi.com'

	async getFact(params: IFactRequest) {
		try {
			const { number, type } = params

			const url = number
				? `${this.BASE_URL}/${number}/${type}?json`
				: `${this.BASE_URL}/random/${type}?json`

			const response = await axios.get<IFactResponse>(url)
			return response.data
		} catch (error) {
			throw new Error(
				'Не удалось получить данные. Пожалуйста, попробуйте позже.'
			)
		}
	}
}

export const numbersApiService = new NumbersService()
