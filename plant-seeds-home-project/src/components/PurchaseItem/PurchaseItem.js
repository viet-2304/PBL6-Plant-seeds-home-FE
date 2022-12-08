import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShop, faTruckFast, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Button, Card, Image } from 'react-bootstrap';

import './PurchaseItem.scss';

function PurchaseItem() {
    return (
        <Card className="card-purchase">
            <Card.Body>
                <div className="card-header d-flex justify-content-between">
                    <div className="fw-bold text-black d-flex align-items-center">
                        Plant Shop
                        <Button className="ms-5 btn-outline-success px-4 py-2">
                            <FontAwesomeIcon icon={faShop}></FontAwesomeIcon> View Shop
                        </Button>
                    </div>
                    <div className="text-success">
                        <FontAwesomeIcon icon={faTruckFast}></FontAwesomeIcon> Completed
                    </div>
                </div>
                <div className="card-content border-bottom border-secondary d-flex py-3">
                    <div className="col-md-2">
                        <Image
                            className="item-img"
                            src="https://cf.shopee.vn/file/59ced2b1371dd71a64a52af77b69d3d1"
                            alt="anh"
                            width={110}
                            height={110}
                        />
                    </div>
                    <div className="col-md-8">
                        <div className="row">
                            <div className=" text-black h2">Name item</div>
                            <div>In Door</div>
                            <div className="text-black">x1</div>
                        </div>
                    </div>
                    <div className="d-flex fw-bold col-md-2 align-items-center justify-content-end text-danger">
                        10000 VND
                    </div>
                </div>
                <div className="card-content border-bottom border-secondary d-flex py-3">
                    <div className="col-md-2">
                        <Image
                            className="item-img"
                            src="https://cf.shopee.vn/file/59ced2b1371dd71a64a52af77b69d3d1"
                            alt="anh"
                            width={110}
                            height={110}
                        />
                    </div>
                    <div className="col-md-8">
                        <div className="row">
                            <div className=" text-black h2">Name item</div>
                            <div>In Door</div>
                            <div className="text-black">x1</div>
                        </div>
                    </div>
                    <div className="d-flex fw-bold col-md-2 align-items-center justify-content-end text-danger">
                        10000 VND
                    </div>
                </div>
                <div className="card-footer d-flex justify-content-between py-4 px-4">
                    <div className="btn-delete">
                        <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
                    </div>

                    <div className="text-white display-6 ">Total: 10000 VND</div>
                </div>
            </Card.Body>
        </Card>
    );
}

export default PurchaseItem;
