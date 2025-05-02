import { useEffect } from "react";
import { getEmpreendimentos } from "../api/empreendimentoApi"

export default function Home() {

  useEffect(() => {
    async function fetchData() {
      const empreendimentos = await getEmpreendimentos();
      console.log(empreendimentos)

    }

    fetchData()
  },[])


  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold">Home </h1>
    </main>
  )
}
