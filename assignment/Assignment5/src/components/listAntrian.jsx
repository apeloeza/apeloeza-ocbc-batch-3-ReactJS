import { Card, CardGroup, Row } from "react-bootstrap";



function ListQueue({listData}) {
    return (
        <>
            <Card className="mt-4 border-info">
                <Card.Body>
                    <Card.Title className="text-center">
                        Antrian
                    </Card.Title>
                    <hr />
                    <Row xs={1} md={5} className="g-4 mt-2 m-auto">
                        {listData.map((queue, i) => (
                            <div key={i}>
                                <CardGroup>
                                    <Card>
                                        <Card.Body>
                                            <h3 className="m-auto text-center font-weight-bold col">
                                                {queue}
                                            </h3>
                                        </Card.Body>
                                    </Card>
                                    <h1> → </h1>
                                </CardGroup>
                            </div>
                        ))}
                    </Row>
                </Card.Body>
            </Card>
        </>
    )
}

export default ListQueue