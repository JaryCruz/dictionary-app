import Image from 'next/image'

export default function Header() {
  return (
    <header>
      <Image src='/book.png' width={35} height={40} alt='Book Logo' />
      <h1>Dictionary</h1>
    </header>
  )
}
