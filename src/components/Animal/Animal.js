import './Animal.css';

export default function Animal({ animal }) {
  return (
    <div
      className='animal'
      style={{
        top: animal.top,
        left: animal.left
      }}
    >
      <img alt={animal.name} src={`/animals/${animal.type}.svg`} />
      <span className='name'>{animal.name}</span>
      <span>{animal.says}</span>
    </div>
  );
}
