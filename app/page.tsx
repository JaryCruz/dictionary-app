'use client'
import { FormEvent, useState } from "react"
import WordDefinition from "./components/WordDefinition"
import WordNotFound from "./components/WordNotFound"

const ERROR_MESSAGE = 'Please enter a valid word'

export default function HomePage() {
  const [word, setWord] = useState('')
  const [error, setError] = useState('')
  const [wordData, setWordData] = useState(
    { word: "", phonetic: "", phonetics: [], origin: "", meanings: [] }
  )

  function handleSubmit(e: FormEvent) {
    e.preventDefault()  

    if (word === '') {
      setError(ERROR_MESSAGE)
      return
    }

    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
      .then(res => res.json())
      .then(data => setWordData(data[0]))
      .catch(error => console.log(error))

    setError('')
    setWord('')
  }

  return (
    <main className="container">
      <form className="form" onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Search word..." 
          value={word} 
          onChange={e => setWord(e.target.value)} 
        />
        <span>{error}</span>
        <button className="btn-primary" type="submit">Search</button>
      </form>
      {wordData == null ? (
        <WordNotFound />
      ) : (
        <WordDefinition 
          word={wordData.word} 
          phonetic={wordData.phonetic} 
          meanings={wordData.meanings} 
        />
      )}
    </main>
  )
}
