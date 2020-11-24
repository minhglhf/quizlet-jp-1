import React from 'react';
import { Col, Row, Image, ButtonGroup, Button, Form } from 'react-bootstrap';

const MainPage = ({ user, setTabIndex, tabIndex }: any) => {

    return (

        <Row className="main-page-header">
            <Col xs={1}></Col>
            <Col xs={2} style={{ textAlign: "center" }}>
                <Image thumbnail src={user?.user?.avatar ? `${user?.user?.avatar}`: require('../../assets/avatar.png')} className="avatar-custom" />
                <br />
                <b>{user?.user?.username}</b>
            </Col>
            <Col xs={8} style={{ marginTop: "40px" }}>
                <ButtonGroup className="controller mb-2">
                    <Button variant="light">Hoạt động gần đây</Button>
                    <Button variant="light">Học phần</Button>
                    <Button>Thư mục</Button>
                    <Button variant="light">Lớp học</Button>
                    <Button variant="light">Đã học</Button>
                </ButtonGroup>
                <Form className="selections-controller">
                    <Form.Control as="select" size="sm" className="mr-sm-2 custom-form" defaultValue={3} custom>
                        <option value={1}>Hoạt động gần đây</option>
                        <option value={2}>Học phần</option>
                        <option value={3}>Thư mục</option>
                        <option value={4}>Lớp học</option>
                        <option value={5}>Đã học</option>
                    </Form.Control>
                </Form>
            </Col>
        </Row>

    )
}

export default React.memo(MainPage);