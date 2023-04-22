import { CAMPSITES } from "../../app/shared/CAMPSITES";
import CampsiteCard from "./CampsiteCard";
import { Col, Row } from 'reactstrap';

const CampsitesList = () => {
    return (
        <Row className="ms-auto">
            {
                CAMPSITES.map((campsite) => {
                    return (
                        <Col className="m-4" md='5' key={campsite.id}>
                            <CampsiteCard campsite={campsite} />
                        </Col>
                    );
                })
            }
        </Row>
    )
}

export default CampsitesList