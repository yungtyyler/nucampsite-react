import { useSelector } from "react-redux";
import CampsiteCard from "./CampsiteCard";
import { Col, Row } from 'reactstrap';
import { selectAllCampsites } from './campsitesSlice';

const CampsitesList = () => {
    const campsites = useSelector(selectAllCampsites);
    console.log(campsites);

    return (
        <Row className="ms-auto">
            {
                campsites.map((campsite) => {
                    return (
                        <Col 
                            className="m-4" 
                            md='5' 
                            key={campsite.id}
                        >
                            <CampsiteCard campsite={campsite} />
                        </Col>
                    );
                })
            }
        </Row>
    )
}

export default CampsitesList;