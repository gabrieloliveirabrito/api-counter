import './App.css'
import { useCounter } from './hooks/useCounter'

function App() {
  const { count, loading, error, increment } = useCounter();

  return (
    <div className='h-screen flex items-center justify-center bg-gray-900 text-white'>
      <div className='bg-gray-800 p-10 rounded-2xl shadow-xl text-center w-80'>
        <h1 className='text-3xl mb-6'>Contador</h1>

        <div className='text-5xl mb-6'>
          {loading ? "..." : count}
        </div>

        <button onClick={increment} disabled={loading} className='bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-xl disabled:opacity-50'>
          {loading ? "Incrementando..." : "Incrementar"}
        </button>

        {error && (
          <p className='text-red-400 mt-4 text-sm'>{error}</p>
        )}
      </div>
    </div>
  );
}

export default App
