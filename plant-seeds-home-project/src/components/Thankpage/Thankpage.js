import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logoSuccess from '../../assets/images/checked.png';
import { Link } from 'react-router-dom';
function Thankpage() {
    const [show, setShow] = useState(true);
    return (
        <>
            <Modal show={show} onHide={() => setShow(false)}>
                <Modal.Header closeButton>
                    {/* <Modal.Title>Modal heading</Modal.Title> */}
                </Modal.Header>
                <Modal.Body>
                    <div className="d-block">
                        <div className="d-flex">
                            <img src={logoSuccess} alt="" width={100} />
                        </div>
                        <span className="text-center">Bạn đã thanh toán thành công !</span> <br />
                        <span className="text-center">
                            Cảm ơn bạn đã tin tưởng sử dụng của chúng tôi{' '}
                            <FontAwesomeIcon icon={faHeart} />
                        </span>
                    </div>
                    <Button variant="py-3 px-2 fs-4 primary text-success">
                        <Link to={'/'}></Link>
                        Continue shopping
                    </Button>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShow(false)}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
export default Thankpage;
