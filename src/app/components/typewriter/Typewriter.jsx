import './style.css';

const Typewriter = ({ text }) => {
    return text.split('').map((char, index) => {
        if (char === ' ') {
            char = '\u00A0';
        }
        return (
            <div key={index} className='enter-animation' style={{ animationDelay: `${index * 0.05}s` }}>
                {char}
            </div>
            
        );
    });
}

export default Typewriter;