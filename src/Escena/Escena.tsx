import React from 'react';

interface TextTestProps {
  content: string;
}

const TextTest: React.FC<TextTestProps> = (props) => <div id='divStyle'><p>{props.content}</p></div>;

export default TextTest;