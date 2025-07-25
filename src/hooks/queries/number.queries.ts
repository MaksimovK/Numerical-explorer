import { useQuery } from '@tanstack/react-query'
import { numbersApiService } from '../../services/numbers.services'
import type { IFactRequest } from '../../types/number.types'

export function useGetFact({ number, type }: IFactRequest) {
	return useQuery({
		queryKey: ['fact'],
		queryFn: () => numbersApiService.getFact({ number, type }),
	})
}
