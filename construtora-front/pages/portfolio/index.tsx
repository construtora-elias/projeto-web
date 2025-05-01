import Link from 'next/link'

export default function Portfolio() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold mb-8">Portfólio</h1>
      <div className="flex flex-col gap-4">
        {/* Exemplo de Links para projetos */}
        <Link href="/portfolio/1" className="text-blue-500 underline">Projeto 1</Link>
        <Link href="/portfolio/2" className="text-blue-500 underline">Projeto 2</Link>
      </div>
    </main>
  )
}
