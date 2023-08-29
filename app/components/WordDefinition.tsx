type Definitions = {
  definition: string
  example?: string
  synonyms?: string[]
  antonyms?: string[]
}

type Meanings = {
  partOfSpeech: string
  definitions: Definitions[]
}

type WordDefinitionProps = {
  word: string
  meanings: Meanings[]
}

export default function WordDefinition({ word, meanings }: WordDefinitionProps) {
  return (
    <div className="word-results">
      <h2>{word}</h2>
      {meanings.map((meaning: Meanings, index: number) => (
        <div key={index}>
          <h3>{meaning.partOfSpeech}</h3>
          <ul>
            <li key={index}>{meaning.definitions[0].definition}</li>
          </ul>
        </div>
      ))}
    </div>
  )
}
