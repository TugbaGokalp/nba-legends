import { Container, Image } from "react-bootstrap"
import logo from "../assets/nba-logo.png"

const Header = () => {
  return (
    <Container>
        <Image src={logo} width="200px"></Image>
        <h1 className="my-2 display-4 font-monospace fw-bold">NBA Legends</h1>
        
    </Container>
  )
}

export default Header