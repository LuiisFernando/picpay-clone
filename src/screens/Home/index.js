import React from 'react';

import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import IconAntDesign from 'react-native-vector-icons/AntDesign';

import Suggestions from '../../components/Suggestions';
import Activities from '../../components/Activities';
import Tips from '../../components/Tips';
import Banner from '../../components/Banner';

import { 
    Wrapper,
    Header,
    Container,
    BalanceContainer,
    BalanceTitle,
    Balance
} from './styles';

export default function Home() {
    return (
        <Wrapper>
            <Container>
                <Header>
                    <IconMaterialCommunityIcons name="qrcode-scan" size={30} color="#10c86e" />

                    <BalanceContainer>
                        <BalanceTitle>Meu saldo</BalanceTitle>
                        <Balance>R$ 0,00</Balance>
                    </BalanceContainer>

                    <IconAntDesign name="gift" size={30} color="#10c86e" />
                </Header>

                <Suggestions />
                <Activities />
                <Tips />
                <Banner />

            </Container>
        </Wrapper>
    );
}