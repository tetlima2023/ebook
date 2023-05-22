import Card from './card'
import Header from './header'

async function getCharacters(page = 1) {
  'use server'

  const res = await fetch(
    `https://rickandmortyapi.com/api/character?page=${page}`,
  )
  if (!res.ok) {
    throw new Error('falha em pegar novos personagens')
  }

  return res.json()
}

export default async function Home() {
  const characters = await getCharacters()
  return (
    <>
      <Header />
      <div className="flex w-full flex-col items-center justify-center p-4">
        <h1 className="text-2xl font-bold">Conheça os personagens</h1>
        <article className="grid grid-cols-3 gap-3">
          <Card initialItems={characters} getCharacter={getCharacters} />
        </article>
      </div>
    </>
  )
}
