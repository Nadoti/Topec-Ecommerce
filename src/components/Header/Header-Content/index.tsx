import { HeaderContentNav } from "./Header-Content_Nav";
import { Container } from "./styles";

export function HeaderContent() {
  return (
    <Container>
      <div>
        <div>
          <h1>MAIOR LOJA DE PRODUTOS <span>ELETRÔNICOS</span> DO PAIS</h1>
        </div>
        <HeaderContentNav />
      </div>
      <div className="content-product">
        <h2>NOTEBOOK</h2>
      </div>

      <div className="content">
        <div className="content-info">
          <span>...</span>
        </div>

        <div className="content-details">
          <h3>Apple Macbook Air</h3>
          <span>Macbook Air “13,3”, chip M1, 8GB RAM, 256GB SSD - Black</span>
          <p>R$ 10.000</p>
          <button type="button">COMPRAR</button>
        </div>
      </div>
      
    </Container>
  )
}