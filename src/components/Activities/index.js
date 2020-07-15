import React from 'react';

import IconFeather from 'react-native-vector-icons/Feather';
import IconMaterialComunity from 'react-native-vector-icons/MaterialCommunityIcons';
import IconAntDesign from 'react-native-vector-icons/AntDesign';

import avatar from '../../assets/images/avatar.png';

import {
    Container,
    Header,
    Title,
    Card,
    CardHeader,
    Avatar,
    Description,
    Bold,
    CardBody,
    UserName,
    CardFooter,
    Details,
    Value,
    Divider,
    Date,
    Actions,
    Option,
    OptionLabel
} from './styles';

export default function Activities() {
    return (
        <Container>
            <Header>
                <Title>Atividades</Title>
            </Header>

            <Card>
                <CardHeader>
                    <Avatar source={avatar} />
                    <Description>
                        <Bold>Você</Bold> pagou a <Bold>@luisfernando</Bold>
                    </Description>
                </CardHeader>
                <CardBody>
                    <UserName>Luís Fernando</UserName>
                </CardBody>
                <CardFooter>
                    <Details>
                        <Value>R$ 18,00</Value>
                        <Divider />
                        <IconFeather name="lock" color="#FFF" size={14} />
                        <Date>há 2 anos</Date>
                    </Details>
                    <Actions>
                        <Option>
                            <IconMaterialComunity name="comment-outline" size={14} color="#FFF" />
                            <OptionLabel>0</OptionLabel>
                        </Option>
                        <Option>
                            <IconAntDesign name="hearto" size={14} color="#FFF" />
                            <OptionLabel>0</OptionLabel>
                        </Option>
                    </Actions>
                </CardFooter>
            </Card>
        </Container>
    );
}