import Link from 'next/link'
import ListItem from '../../components/ListItem'
import { mockProjetos } from '../../api/MockData'

export default function Portfolio() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold mb-8">Portfólio</h1>
      <div className="flex flex-col gap-4">
        <ListItem projeto={mockProjetos}/>
      </div>
    </main>
  )
}
