import { Container } from "./styles";
import logo from '../../../assets/logo.svg'
import carrinho from '../../../assets/carrinho.svg'

export function HeaderNav() {
  return (
    <Container>
      <img src={logo} alt="TOPEC" />
      <ul>
        <li><a href="">Sobre</a></li>
        <li><a href="">Produtos</a></li>
        <li><a href="">FAQ</a></li>
        <li><a href="">Login</a></li>
        <li><a href=""><img src={carrinho} alt="carrinho"/></a></li>
      </ul>
    </Container>
  )
}