import './style.css';

export default function WordCarousel() {

  const words = [
    'Construction',
    'Interior Design',
    'Modern Structures',
    'Thinking outside of the box'
  ]

  return (
    <div className="text-container">

      <div className="word">
          {words.map((word, index) => (
            <span key={index} >{word}</span>
          ))}
      </div>

      <div className="word">
          {words.map((word, index) => (
            <span key={index} >{word}</span>
          ))}
      </div>
    </div>
  );
};

