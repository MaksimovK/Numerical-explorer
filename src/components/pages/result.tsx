import { BiSolidError } from 'react-icons/bi'
import { FaCircleInfo } from 'react-icons/fa6'
import { Link, useLocation } from 'react-router-dom'
import { TYPE_NAMES } from '../../constants/category.constant'
import { useGetFact } from '../../hooks/queries/number.queries'
import type { IFactRequest } from '../../types/number.types'

export default function ResultPage() {
	const location = useLocation()
	const { number, type } = location.state as IFactRequest

	const { data, isLoading, isError, error } = useGetFact({ number, type })

	return (
		<div className='bg-white rounded-xl shadow-lg overflow-hidden'>
			<div className='bg-gradient-to-r from-indigo-600 to-purple-600 p-6'>
				<h1 className='text-2xl font-bold text-center text-white'>
					Результат запроса
				</h1>
			</div>

			<div className='p-6'>
				<div className='bg-indigo-50 rounded-xl p-5 mb-8 border border-indigo-200'>
					<h2 className='text-lg font-semibold text-indigo-800 mb-3 flex items-center'>
						<FaCircleInfo className='h-5 w-5 mr-2' />
						Детали запроса
					</h2>
					<div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
						<div className='bg-white p-4 rounded-lg'>
							<p className='text-sm text-gray-500'>Категория</p>
							<p className='text-lg font-medium text-indigo-700'>
								{TYPE_NAMES[type]}
							</p>
						</div>
						<div className='bg-white p-4 rounded-lg'>
							<p className='text-sm text-gray-500'>Число</p>
							<p className='text-lg font-medium text-indigo-700'>
								{number || 'Случайное'}
							</p>
						</div>
					</div>
				</div>

				<div className='mb-8'>
					<h2 className='text-lg font-semibold text-gray-800 mb-3 flex items-center'>
						{TYPE_NAMES[type]}
					</h2>

					{isLoading ? (
						<div className='flex flex-col items-center justify-center py-10'>
							<div className='w-12 h-12 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin mb-4'></div>
							<p className='text-gray-600'>Ищем интересные факты...</p>
						</div>
					) : isError ? (
						<div className='bg-red-50 border border-red-200 rounded-xl p-5'>
							<div className='flex items-center text-red-800 mb-2'>
								<BiSolidError className='h-6 w-6 mr-2' />
								<span className='font-medium'>Ошибка!</span>
							</div>
							<p className='text-red-700 text-start'>
								{error instanceof Error ? error.message : 'Неизвестная ошибка'}
							</p>
						</div>
					) : (
						<div className='bg-yellow-50 border-l-4 border-yellow-500 p-5 rounded-r-lg'>
							<p className='text-gray-800 text-lg italic'>"{data?.text}"</p>
							<div className='mt-4 flex justify-end'>
								<div className='bg-yellow-100 px-3 py-1 rounded-full text-yellow-800 text-sm inline-flex items-center'>
									Источник: Numbers API
								</div>
							</div>
						</div>
					)}
				</div>

				<Link
					to={'/'}
					className='w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center'
				>
					Новый запрос
				</Link>
			</div>
		</div>
	)
}
