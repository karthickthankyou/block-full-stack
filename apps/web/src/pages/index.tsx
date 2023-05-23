import { useAccount } from '@/hooks'
import { useState } from 'react'

export default function Home() {
  const { contract, account } = useAccount()
  const [loading, setLoading] = useState(false)

  const [error, setError] = useState<null | string>(null)

  const registerLand = async (coordinates: string) => {
    setLoading(true)
    setError(null)
    try {
      await contract?.methods.registerLand(coordinates).send({ from: account })
    } catch (err) {
      setError('Action failed.')
    } finally {
      setLoading(false)
    }
  }

  console.log('account', account)
  return (
    <main>
      Hello there.
      {error ? error : null}
      <button onClick={() => registerLand('lat:23,lng:42')}>
        {loading ? 'Loading...' : 'Register Land'}
      </button>
    </main>
  )
}
