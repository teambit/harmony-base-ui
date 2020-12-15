import React from 'react';
import Button from './button';

export const BasicButton = () => <Button>Click</Button>;

export const ButtonOnClick = () => <Button onClick={() => alert('on click')}>Click</Button>;
