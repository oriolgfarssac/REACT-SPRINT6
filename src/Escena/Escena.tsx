import React from 'react';

interface TextProps {
  content: string;
}

const TextTest: React.FC<TextProps> = (props) => <div><p>{props.content}</p></div>;

export { TextTest, };
