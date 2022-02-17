import { HeaderContent } from "./Header-Content"
import { Container, Content } from "./styles"
import { HeaderNav } from "./Header-Nav"
import { HeaderProduct } from "./Header-Product"

export function Header() {
  return (
    <Container>
      <Content>
        <HeaderNav />
        <HeaderContent />
        <HeaderProduct />
      </Content>
    </Container>
    
  )
}