import { Outlet, useLocation } from 'react-router-dom'

export default function Layout() {
	const location = useLocation()

	const getPageTitle = () => {
		if (location.pathname === '/') return 'Числовой Эксплорер'
		if (location.pathname === '/result') return 'Ваш числовой факт'
		return 'Страница не найдена'
	}

	return (
		<div className='min-h-screen bg-gradient-to-br from-indigo-50 to-blue-100 flex flex-col items-center justify-center p-4'>
			<div className='w-full max-w-4xl mb-8 text-center'>
				<h1 className='text-3xl md:text-4xl font-bold text-indigo-800'>
					{getPageTitle()}
				</h1>
				<p className='mt-2 text-indigo-600'>
					Откройте удивительные факты о числах
				</p>

				<div className='w-full pt-2'>
					<Outlet />
				</div>

				{location.pathname !== '/' && (
					<div className='mt-4'>
						<a
							href='/'
							className='inline-flex items-center text-indigo-600 hover:text-indigo-800 font-medium'
						>
							Вернуться на главную
						</a>
					</div>
				)}
			</div>
		</div>
	)
}
