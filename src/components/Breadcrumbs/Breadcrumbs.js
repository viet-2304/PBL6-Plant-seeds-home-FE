import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Breadcrumb, Container } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import { faHome } from '@fortawesome/free-solid-svg-icons';

import './Breadcrumbs.scss';
import Button from '../Button/Button';
import { useState } from 'react';
import { useEffect } from 'react';

function Breadcrumbs() {
    const location = useLocation();
    const navigate = useNavigate();
    const pages = location.pathname.split('/').splice(1);

    return (
        <Container fluid className="breadcrumb-container mt-5">
            <Breadcrumb>
                <Breadcrumb.Item onClick={() => navigate('/')}>
                    {/* <Button> */}
                    <FontAwesomeIcon icon={faHome} />
                    {/* </Button> */}
                </Breadcrumb.Item>
                {pages &&
                    pages.map(
                        (page, index) =>
                            index < 2 && (
                                <Breadcrumb.Item
                                    key={index}
                                    onClick={() =>
                                        navigate(
                                            location.pathname.slice(
                                                0,
                                                location.pathname.indexOf(page),
                                            ) + page,
                                        )
                                    }
                                >
                                    {page}
                                </Breadcrumb.Item>
                            ),
                    )}
            </Breadcrumb>
        </Container>
    );
}

export default Breadcrumbs;
