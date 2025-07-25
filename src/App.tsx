import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './routes/AppRoutes'

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
			retry: 1,
			staleTime: 1000 * 60 * 5,
		},
	},
})
export default function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<BrowserRouter>
				<AppRoutes />
			</BrowserRouter>
		</QueryClientProvider>
	)
}
