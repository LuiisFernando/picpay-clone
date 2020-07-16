import React, { useState } from 'react';
import { Switch } from 'react-native';
import IconFeather from 'react-native-vector-icons/Feather';
import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import IconAntDesign from 'react-native-vector-icons/AntDesign';

import creditCard from '../../assets/images/credit-card.png';

import {
    Wrapper,
    Container,
    Header,
    HeaderContainer,
    Title,
    BalanceContainer,
    Value,
    Bold,
    EyeButton,
    Info,
    Actions,
    Action,
    ActionLabel,
    UseBalance,
    UseBalanceTitle,
    PaymentMethods,
    PaymentMethodsTitle,
    Card,
    CardBody,
    CardDetails,
    CardTitle,
    CardInfo,
    Img,
    AddButton,
    AddLabel,
    UseTicketContainer,
    UseTicketButton,
    UseTicketLabel
} from './styles'

export default function Wallet() {
    const [isVisible, setIsVisible] = useState(true);
    const [useBalance, setUseBalance] = useState(true);

    function handleToggleVisibility() {
        setIsVisible((prevState) => !prevState);
    }

    function handleToggleUseBalance() {
        setUseBalance((prevState) => !prevState);
    }

    return (
        <Wrapper>
            <Container>
                <Header 
                    colors={useBalance ? ['#52E78C', '#1AB563'] : ['#D3D3D3', '#868686']}
                >
                    <HeaderContainer>
                        <Title>Saldo PicPay</Title>
                        <BalanceContainer>
                            <Value>
                                R$ <Bold>{isVisible ? '7,90' : '----'}</Bold>
                            </Value>
                            <EyeButton onPress={handleToggleVisibility}>
                                <IconFeather name={isVisible ? "eye" : 'eye-off'} size={28} color="#FFF" />
                            </EyeButton>
                        </BalanceContainer>
                        <Info>
                            Seu saldo está rendendo 100% do CDI
                        </Info>
                        <Actions>
                            <Action>
                                <IconMaterialCommunityIcons name="cash" size={28} color="#FFF" />
                                <ActionLabel>Adicionar</ActionLabel>
                            </Action>
                            <Action>
                                <IconFontAwesome name="bank" size={20} color="#FFF" />
                                <ActionLabel>Retirar</ActionLabel>
                            </Action>
                        </Actions>
                    </HeaderContainer>
                </Header>

                <UseBalance>
                    <UseBalanceTitle>
                        Usar saldo ao pagar
                    </UseBalanceTitle>
                    <Switch 
                        value={useBalance}
                        onValueChange={handleToggleUseBalance} 
                    />
                </UseBalance>

                <PaymentMethods>
                    <PaymentMethodsTitle>
                        Forma de pagamento
                    </PaymentMethodsTitle>
                    <Card>
                        <CardBody>
                            <CardDetails>
                                <CardTitle>
                                    Cadastre seu cartão de crédito
                                </CardTitle>
                                <CardInfo>
                                    Cadastre seu cartão de crédito para poder fazer pagamentos mesmo quando não tiver saldo no seu PicPay.
                                </CardInfo>
                            </CardDetails>

                            <Img source={creditCard} resizeMode="contain" />
                        </CardBody>
                        <AddButton>
                            <IconAntDesign name="pluscircleo" size={30} color="#0DB060" />
                            <AddLabel>Adicionar cartao de crédito</AddLabel>
                        </AddButton>
                    </Card>

                    <UseTicketContainer>
                        <UseTicketButton>
                            <IconMaterialCommunityIcons name="ticket-outline" size={20} color="#0DB060" />
                            <UseTicketLabel>User código promocional</UseTicketLabel>
                        </UseTicketButton>
                    </UseTicketContainer>
                </PaymentMethods>
            </Container>
        </Wrapper>
    );
}