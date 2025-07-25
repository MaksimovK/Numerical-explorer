import { Route, Routes } from 'react-router-dom'
import Layout from '../components/layout/layout'
import HomePage from '../components/pages/home'
import NotFoundPage from '../components/pages/not-found'
import ResultPage from '../components/pages/result'

export default function AppRoutes() {
	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route index element={<HomePage />} />
				<Route path='result' element={<ResultPage />} />
				<Route path='*' element={<NotFoundPage />} />
			</Route>
		</Routes>
	)
}
