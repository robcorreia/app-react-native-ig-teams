import { Container } from "@components/GroupCard/styles";
import { Message } from "./styles";

type ListEmptyProps = {
  message: string;
}

export function ListEmpty({ message }: ListEmptyProps) {

  return (
    <Container>
      <Message>
        {message}
      </Message>
    </Container>
  )
}