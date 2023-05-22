'use client'
import Image from 'next/image'
import { useRef, useState } from 'react'
import { IApi } from './api'
import InfiniteScroll from 'react-infinite-scroller'

interface ItemProps {
  initialItems: IApi
  getCharacter(page: number): Promise<IApi>
}

export default function Card({ initialItems, getCharacter }: ItemProps) {
  const fetching = useRef(false)
  const [characters, setCharacters] = useState([initialItems])
  const items = characters.flatMap((characters) => characters.results)

  const loadMore = async (page: number) => {
    if (!fetching.current) {
      try {
        fetching.current = true

        const data = await getCharacter(page)
        setCharacters((prev) => [...prev, data])
      } finally {
        fetching.current = false
      }
    }
  }

  return (
    <>
      <InfiniteScroll
        hasMore
        className="grid grid-cols-3 gap-3 w-full"
        pageStart={1}
        loadMore={loadMore}
        loader={
          <span key={0} className="loader">
            Loading ...
          </span>
        }
      >
        {items.map((cht) => (
          <section
            key={cht.id}
            className="overflow-hidden rounded-lg border-2 border-bg"
          >
            <Image src={cht.image} width={300} height={300} alt="card" />
            <div className=" pl-2">
              <h1>{cht.name}</h1>
              <p>{cht.status}</p>
            </div>
          </section>
        ))}
      </InfiniteScroll>
    </>
  )
}
