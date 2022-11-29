import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { Container } from 'react-bootstrap';
import { Dash, Plus } from 'react-bootstrap-icons';
import Button from '../Button/Button';
import './ProductDetail.scss';

function ProductDetail({ product }) {
    const [quantity, setQuantity] = useState(1);

    const handleQuantity = (type) => {
        if (type === 'down') {
            quantity > 1 && setQuantity((prev) => prev - 1);
        } else {
            setQuantity((prev) => prev + 1);
        }
    };

    return (
        <Container fluid className="detail-container mb-3 ">
            <div className="container-detail">
                <div className="details" key="1">
                    <div className="big-img">
                        <img
                            src="https://cf.shopee.vn/file/59ced2b1371dd71a64a52af77b69d3d1"
                            alt=""
                        />
                    </div>

                    <div className="box">
                        <div className="row">
                            <h2>Sen Đá Móng Rồng- Cây Để Bàn</h2>
                            <span>30.000 VND</span>
                        </div>
                        <p>
                            - Cây có sức sống mạnh mẽ, tượng trưng cho tình bạn, tình yêu son sắt.{' '}
                            <br />- Cây trồng 4 - 6 tháng, kích thước cây như hình <br />- Sản phẩm
                            được bán bao gồm 1 cây, 1 bầu nhựa, 1 phần đất để trồng. <br />- Để đảm
                            bảo an toàn khi vận chuyển, cây sẽ được bọc giấy mềm trước khi đóng gói.
                        </p>
                        <div className="quantity-container">
                            <div className="d-flex justify-content-center align-items-center">
                                <Dash size="30px" onClick={() => handleQuantity('down')} />
                            </div>
                            <p className="quantity d-inline-flex justify-content-center align-items-center border border-success rounded-3 mx-1">
                                {quantity}
                            </p>
                            <div className="d-flex justify-content-center align-items-center">
                                <Plus size="30px" onClick={() => handleQuantity('up')} />
                            </div>
                        </div>
                        <div className="quantity-container">
                            <Button cart small>
                                ADD TO CART
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
        // <Container fluid className="detail-container mb-3 ">
        //     <Row className="py-4 justify-content-md-center">
        //         <Col
        //             xs
        //             lg="3"
        //             className="img-col p-3 d-flex justify-content-end align-items-center"
        //         >
        //             <Image
        //                 src="https://cf.shopee.vn/file/59ced2b1371dd71a64a52af77b69d3d1"
        //                 className="w-200 pe-5"
        //                 alt="{product?.image}"
        //             />
        //         </Col>
        //         <Col as="div" xs lg="5" className=" d-flex flex-column justity-content-between p-3">
        //             {/* <h2 className="name mb-4">{product?.productName}</h2>
        //             <p>{product?.description}</p>
        //             <p className="price fw-bold fs-3">$ {product?.price}</p>
        //             <div className="amount-container">
        //                 <Dash size="30px" onClick={() => handleQuantity('down')} />
        //                 <p className="quantity d-inline-flex justify-content-center align-items-center border border-success rounded-3 mx-1">
        //                     {quantity}
        //                 </p>
        //                 <Plus size="30px" onClick={() => handleQuantity('up')} />
        //             </div>
        //             <Button cart small>
        //                 ADD TO CART
        //             </Button> */}
        //             <h2 className="name mb-4">Sen Đá Móng Rồng- Cây Để Bàn</h2>
        //             <p>
        //                 - Cây có sức sống mạnh mẽ, tượng trưng cho tình bạn, tình yêu son sắt.{' '}
        //                 <br />- Cây trồng 4 - 6 tháng, kích thước cây như hình <br />- Sản phẩm được
        //                 bán bao gồm 1 cây, 1 bầu nhựa, 1 phần đất để trồng.
        //                 <br />- Để đảm bảo an toàn khi vận chuyển, cây sẽ được bọc giấy mềm trước
        //                 khi đóng gói. - Cây có sức sống mạnh mẽ, tượng trưng cho tình bạn, tình yêu
        //                 son sắt. <br />- Cây trồng 4 - 6 tháng, kích thước cây như hình <br />- Sản
        //                 phẩm được bán bao gồm 1 cây, 1 bầu nhựa, 1 phần đất để trồng.
        //                 <br />- Để đảm bảo an toàn khi vận chuyển, cây sẽ được bọc giấy mềm trước
        //                 khi đóng gói. - Cây có sức sống mạnh mẽ, tượng trưng cho tình bạn, tình yêu
        //                 son sắt. <br />- Cây trồng 4 - 6 tháng, kích thước cây như hình <br />- Sản
        //                 phẩm được bán bao gồm 1 cây, 1 bầu nhựa, 1 phần đất để trồng.
        //                 <br />- Để đảm bảo an toàn khi vận chuyển, cây sẽ được bọc giấy mềm trước
        //                 khi đóng gói.
        //             </p>
        //             <p className="price fw-bold fs-3">VND 30.000</p>
        //             <div className="amount-container">
        //                 <Dash size="30px" onClick={() => handleQuantity('down')} />
        //                 <p className="quantity d-inline-flex justify-content-center align-items-center border border-success rounded-3 mx-1">
        //                     {quantity}
        //                 </p>
        //                 <Plus size="30px" onClick={() => handleQuantity('up')} />
        //             </div>
        //             <Button cart small>
        //                 ADD TO CART
        //             </Button>
        //         </Col>
        //     </Row>
        // </Container>
    );
}

export default ProductDetail;
