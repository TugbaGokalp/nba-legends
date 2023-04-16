import { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { data } from "../helpers/data"
import PlayerCard from './PlayerCard';


const CardContainer = () => {
    const [search, setSearch] = useState("")
  return (
    <div>
        <Form.Control type="search" placeholder="Search Player.." className='w-25 m-auto' onChange={(e) => setSearch(e.target.value)}/>
        <Container className="card-container rounded-4 my-4 p-3">
            <Row className='g-3 justify-content-center'>
                {data
                .filter((player) => player.name.toLowerCase().includes(search.trim().toLowerCase()))
                .map((player, index) => {
                    return(
                        <Col md={6} lg={4} xl={3} key={index}>
                        <PlayerCard {...player}/>
                        </Col>
                    )
                })}
            </Row>
        </Container>
    </div>

  )
}

export default CardContainer