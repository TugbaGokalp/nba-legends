import { Container, Image } from "react-bootstrap"
import TugbaSteve from "../assets/nba-logo.png"

const Header = () => {
  return (
    <Container>
        <Image src={TugbaSteve} width={200}></Image>
        <h1 className="my-2 display-4 font-monospace fw-bold">NBA Legends</h1>
        
    </Container>
  )
}

export default Header