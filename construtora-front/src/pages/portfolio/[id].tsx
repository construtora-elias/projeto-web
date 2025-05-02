import { useRouter } from 'next/router'

export default function Projeto() {
  const router = useRouter()
  const { id } = router.query

  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold">Projeto {id}</h1>
    </main>
  )
}
