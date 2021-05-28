import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { useState } from 'react';
import Films from './Modal/Films';
import TV from './Modal/TVShows';
import VideoGames from './Modal/VideoGames';

const TableData = ({ object }) => {

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    return (
        <>
            <td>
                <div className="img-container">
                    <img src={object.imageUrl.split("/revision/")[0]} alt="" onClick={toggle} />
                    <div className="img-overlay" onClick={toggle}>
                        <div className="img-text">{object.name}</div>
                    </div>
                </div>
            </td>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>{object.name}</ModalHeader>
                <ModalBody>
                    <Films films={object.films} />
                    <TV tvs={object.tvShows} />
                    <VideoGames videogames={object.videoGames} />
                </ModalBody>
                <ModalFooter>
                    <Button color='danger' onClick={toggle}>Close</Button>
                </ModalFooter>
            </Modal>
        </>
    );
}

export default TableData;