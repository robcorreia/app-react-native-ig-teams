import { TouchableOpacityProps } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import { Container, Icon, ButtonIconTypeStyleProps } from './styles'

type ButtonIconProps = TouchableOpacityProps & {
  icon: keyof typeof MaterialIcons.glyphMap; //pega a tipagem dos icons do material icons
  type?: ButtonIconTypeStyleProps
}

export function ButtonIcon({ icon, type = 'PRIMARY', ...rest }: ButtonIconProps) {
  return (
    <Container {...rest}>
      <Icon
        name={icon}
        type={type}
      />
    </Container>
  )
}