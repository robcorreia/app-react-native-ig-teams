
import { useState } from "react";
import { Header } from "@components/Header";
import { Container, Content, Icon } from "./styles";
import { Highlight } from "@components/Highlight";
import { Button } from "@components/Button";
import { Input } from "@components/Input";
import { useNavigation } from "@react-navigation/native";

export function NewGroup() {
  const [group, setGroup] = useState('');

  const navigation = useNavigation()

  function handleNewGroup() {
    navigation.navigate('players', { group }) //passando group pro parametro group
  }

  return (
    <Container>

      <Header showBackButton />

      <Content>
        <Icon />
        <Highlight
          title="Nova turma"
          subtitle="crie a turma para adicionar as pessoas"
        />
        <Input
          placeholder="Nome da turma"
          onChangeText={setGroup}
        />

        <Button
          style={{ marginTop: 20 }}
          title="Criar"
          onPress={handleNewGroup}
        />
      </Content>

    </Container>
  )
}