import React from 'react';

import img8 from '../../assets/images/08.png';
import img9 from '../../assets/images/09.png';
import img10 from '../../assets/images/10.png';
import img11 from '../../assets/images/11.png';
import img12 from '../../assets/images/12.png';

import {
    Container,
    Option,
    Title,
    Img
} from './styles';

const items = [
    {
        key: String(Math.random()),
        img: img8,
        title: 'Pague suas contas sem sair de casa',
        bgColor: '#172C4A'
    },
    {
        key: String(Math.random()),
        img: img9,
        title: 'Pague suas contas sem sair de casa',
        bgColor: '#6A0159'
    },
    {
        key: String(Math.random()),
        img: img10,
        title: 'Pague suas contas sem sair de casa',
        bgColor: '#4139C8'
    },
    {
        key: String(Math.random()),
        img: img11,
        title: 'Pague suas contas sem sair de casa',
        bgColor: '#00AB4B'
    },
    {
        key: String(Math.random()),
        img: img12,
        title: 'Pague suas contas sem sair de casa',
        bgColor: '#2F76'
    }
];

export default function Tips() {
    return (
        <Container>
            {items.map((item) => (
                <Option bgColor={item.bgColor} key={item.key}>
                    <Title>{item.title}</Title>
                    <Img source={item.img} />
                </Option>
            ))}
        </Container>
    );
}