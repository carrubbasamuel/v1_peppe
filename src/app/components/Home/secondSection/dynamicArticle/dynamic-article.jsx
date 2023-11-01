import React, { useState, useEffect } from 'react';
import './style.css';

const DynamicArticle = () => {
    const type = [
        {
            type: 'history',
            text: "Archy was founded in 1936 in Chicago, USA. The company was established by Louis Skidmore and Nathaniel Owings, and later joined by John O. Merrill. SOM has been responsible for the design of many notable buildings worldwide, including the Sears Tower (now known as Willis Tower) in Chicago, which was the world's tallest building from 1973 to 1998. The company has also designed the John Hancock Center, One World Trade Center, and Burj Khalifa, which is currently the tallest building in the world. Throughout its history, SOM has been recognized for its innovative designs and commitment to sustainability. "
        },
        {
            type: 'mission',
            text: "We believe that good design should not only be aesthetically pleasing, but also functional and environmentally responsible. Our approach to architecture is rooted in a deep understanding of our clients' needs and the context in which we are designing. We work closely with our clients throughout the entire design process to ensure that their vision is realized and that their space is both beautiful and practical."
        },
        {
            type: 'vision',
            text: "Ratings and reviews, A numerical rating system and written reviews from clients can be very persuasive in convincing potential clients to hire an architecture firm. These reviews can be posted directly on the architecture firm's website or on third-party review sites such as Yelp or Google Reviews. It's important to respond to all reviews, whether positive or negative, in a professional and respectful manner. This shows that the architecture firm values feedback and is committed to delivering exceptional service."
        }
    ];

    const [activeType, setActiveType] = useState(type[0].type);
    const [article, setArticle] = useState(type[0].text);

    const handleChangeText = (selectedType, text) => {
        setArticle(text);
        setActiveType(selectedType);
    };

    useEffect(() => {
        setArticle(type[0].text);
    }, []); 

    return (
        <div>
            <div className='container-switch'>
                {type.map(item => (
                    <p 
                        key={item.type} 
                        onClick={() => handleChangeText(item.type, item.text)}
                        className={activeType === item.type ? 'active' : ''}
                    >
                        {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
                    </p>
                ))}
            </div>
            <div className='article-container'>
                <p>
                    {article}
                </p>
            </div>
        </div>
    );
};

export default DynamicArticle;
