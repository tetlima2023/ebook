import Image from "next/image";

export default function Header() {
  return (
    <header className="w-screen h-screen bg-bg mb-8">
      <Image fill quality={100} src="/rick-morty.png" alt="fundo com rick e o morty" />
    </header>
  )
}
