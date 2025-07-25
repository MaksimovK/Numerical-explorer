import { Controller, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { TYPE_NAMES, type TypeKey } from '../../constants/category.constant'
import type { IFactRequest } from '../../types/number.types'

export default function HomePage() {
	const navigate = useNavigate()

	const {
		control,
		handleSubmit,
		formState: { errors, isSubmitting },
	} = useForm<IFactRequest>({
		defaultValues: {
			type: 'trivia',
			number: '',
		},
		mode: 'onChange',
	})

	const onSubmit = (data: IFactRequest) => {
		navigate('/result', { state: { number: data.number, type: data.type } })
	}

	return (
		<div className='bg-white rounded-xl shadow-lg overflow-hidden w-full max-w-md mx-auto'>
			<div className='bg-gradient-to-r from-indigo-600 to-purple-600 p-6'>
				<h1 className='text-2xl font-bold text-center text-white'>
					Создайте свой запрос
				</h1>
			</div>

			<form onSubmit={handleSubmit(onSubmit)} className='p-6 space-y-6'>
				<div>
					<label className='block text-sm font-medium text-gray-700 mb-2'>
						Выберите тип факта:
					</label>

					<Controller
						name='type'
						control={control}
						render={({ field: { onChange, value } }) => (
							<div className='grid grid-cols-2 gap-3'>
								{Object.keys(TYPE_NAMES).map((cat, index) => (
									<button
										key={`${index}-${cat}`}
										type='button'
										className={`py-3 px-4 rounded-lg border transition-colors ${
											value === cat
												? 'bg-indigo-100 border-indigo-500 text-indigo-700 font-medium'
												: 'bg-gray-50 border-gray-200 text-gray-700 hover:bg-gray-100'
										}`}
										onClick={() => onChange(cat as TypeKey)}
									>
										{TYPE_NAMES[cat as TypeKey]}
									</button>
								))}
							</div>
						)}
					/>
				</div>

				<div>
					<label className='block text-sm font-medium text-gray-700 mb-2'>
						Введите число (оставьте пустым для случайного):
					</label>
					<Controller
						name='number'
						control={control}
						rules={{
							validate: value =>
								!value || !isNaN(Number(value))
									? true
									: 'Число должно быть в виде цифры',
						}}
						render={({ field }) => (
							<input
								{...field}
								type='text'
								placeholder='Например: 42'
								className={`w-full p-4 text-lg rounded-lg border ${
									errors.number ? 'border-red-500 bg-red-50' : 'border-gray-300'
								} focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent`}
							/>
						)}
					/>

					{errors.number && (
						<p className='mt-2 text-red-600 font-medium flex items-center'>
							{errors.number.message}
						</p>
					)}
				</div>

				<button
					disabled={isSubmitting}
					type='submit'
					className={`w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center ${
						isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
					}`}
				>
					Узнать факт
				</button>
			</form>
		</div>
	)
}
