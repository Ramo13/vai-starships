import { useDispatch, useSelector } from "react-redux";

import { Button, Progress, Row, Col, Typography } from "antd";
import { PlusSquareFilled, MinusSquareFilled } from "@ant-design/icons";

const { Title } = Typography;

const DetailedView = () => {
  const dispatch = useDispatch();
  const detailViewShip = useSelector((state) => state.detailViewShip);

  const addPassenger = () => {
    dispatch({ type: "ADD_PASSENGER" });
  };

  const removePassenger = () => {
    dispatch({ type: "REMOVE_PASSENGER" });
  };

  const onCancel = () => {
    dispatch({ type: "CANCEL_DETAILED" });
  };

  const onSave = () => {
    dispatch({ type: "SAVE_DETAILED" });
  };

  return (
    <Row
      xs={{ span: 24, offset: 0 }}
      sm={{ span: 22, offset: 1 }}
      md={{ span: 10, offset: 4 }}
      lg={{ span: 10, offset: 4 }}
      xl={{ span: 10, offset: 4 }}
      justify="space-around"
    >
      <Col span={20} style={{ paddingTop: "20px" }}>
        <>
          <Title level={1}>Detail View</Title>
        </>
      </Col>
      <Col span={20} style={{ paddingTop: "20px", paddingRight: "10px" }}>
        <p>{`Name: ${detailViewShip.name}`}</p>
      </Col>
      <Col span={20}>
        <p>{`Model: ${detailViewShip.model}`}</p>
      </Col>
      <Col style={{ paddingTop: "20px" }} span={20}>
        <p>{`Max Capacity: ${detailViewShip.capacity}`}</p>
      </Col>
      <Col span={20}>
        <p>{`Crew: ${detailViewShip.crew}`}</p>
      </Col>
      <Col span={20}>
        <p>{`Passengers: ${detailViewShip.passengers}`}</p>
      </Col>
      <Col style={{ paddingTop: "20px" }} xs={0} sm={0} md={20} lg={20} xl={20}>
        <>
          <Row>
            <Col span={12}>
              <Progress percent={detailViewShip.usage} showInfo={false} />
            </Col>
            <Col span={2} offset={1}>
              <Button
                onClick={(e) => addPassenger()}
                type="primary"
                shape="rounded"
                icon={<PlusSquareFilled />}
                disabled={
                  detailViewShip.passengers ===
                  detailViewShip.passengersCapacity
                }
              />
            </Col>
            <Col span={2}>
              <Button
                onClick={(e) => removePassenger()}
                type="primary"
                shape="rounded"
                icon={<MinusSquareFilled />}
                disabled={detailViewShip.passengers < 1}
              />
            </Col>
          </Row>
        </>
      </Col>
      <Col style={{ paddingTop: "20px" }} xs={20} sm={20} md={0} lg={0} xl={0}>
        <>
          <Row xs={24} sm={24} md={0} lg={0} xl={0}>
            <Col span={24}>
              <Progress percent={detailViewShip.usage} showInfo={false} />
            </Col>
            <Col span={3} offset={1}>
              <Button
                onClick={(e) => addPassenger()}
                type="primary"
                shape="rounded"
                icon={<PlusSquareFilled />}
                disabled={
                  detailViewShip.passengers ===
                  detailViewShip.passengersCapacity
                }
              />
            </Col>
            <Col span={3}>
              <Button
                onClick={(e) => removePassenger()}
                type="primary"
                shape="rounded"
                icon={<MinusSquareFilled />}
                disabled={detailViewShip.passengers < 1}
              />
            </Col>
          </Row>
        </>
      </Col>
      <Col span={20} style={{ paddingTop: "50px" }}>
        <Row justify="center">
          <Col xs={6} sm={6} md={5} lg={4} xl={4}>
            <Button onClick={onCancel} type="primary" shape="rounded">
              Cancel
            </Button>
          </Col>
          <Col xs={6} sm={6} md={5} lg={4} xl={4}>
            <Button onClick={onSave} type="primary" shape="rounded">
              Save
            </Button>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default DetailedView;
