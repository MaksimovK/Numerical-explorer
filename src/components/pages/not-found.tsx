import { FaArrowLeftLong } from 'react-icons/fa6'
import { PiSmileySad } from 'react-icons/pi'
import { Link } from 'react-router-dom'

export default function NotFoundPage() {
	return (
		<div className='bg-white rounded-xl shadow-lg overflow-hidden w-full'>
			<div className='bg-gradient-to-r from-rose-600 to-pink-600 p-6'>
				<h1 className='text-2xl font-bold text-center text-white'>
					Страница не найдена
				</h1>
			</div>

			<div className='p-8 text-center'>
				<div className='flex justify-center mb-6'>
					<PiSmileySad className='h-16 w-16 text-rose-500' />
				</div>

				<p className='text-gray-700 mb-6'>
					К сожалению, запрашиваемая страница не существует или была перемещена.
				</p>

				<button className='w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center'>
					<Link to='/' className='flex items-center justify-center'>
						<FaArrowLeftLong className='h-5 w-5 mr-2' />
						На главную страницу
					</Link>
				</button>
			</div>
		</div>
	)
}
