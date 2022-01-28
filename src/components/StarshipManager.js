import { useSelector } from "react-redux";

import { Row, Col, Typography } from "antd";

import DetailedView from "./DetailedView";
import Search from "./Search";
import Fleet from "./Fleet";

const { Title } = Typography;

const StarshipManager = () => {
  const detailViewShip = useSelector((state) => state.detailViewShip);

  return (
    <>
      {detailViewShip.name ? (
        <DetailedView />
      ) : (
        <>
          <Row justify="space-around" xs={0} sm={0} md={22} lg={22} xl={22}>
            <Col xs={0} sm={0} md={12} lg={12} xl={12}>
              <>
                <Title style={{ paddingTop: "50px" }}>Star Fleet Manager</Title>
                <Search />
              </>
            </Col>
            <Col
              xs={0}
              sm={0}
              md={8}
              lg={8}
              xl={8}
              style={{ paddingTop: "50px" }}
            >
              <Fleet />
            </Col>
          </Row>

          <Row justify="space-around" xs={22} sm={22} md={0} lg={0} xl={0}>
            <Col xs={22} sm={22} md={0} lg={0} xl={0}>
              <>
                <Title level={3} style={{ paddingTop: "20px" }}>
                  Star Fleet Manager
                </Title>
                <Search />
              </>
            </Col>
            <Col
              xs={22}
              sm={22}
              md={0}
              lg={0}
              xl={0}
              style={{ paddingTop: "20px" }}
            >
              <Fleet />
            </Col>
          </Row>
        </>
      )}
    </>
  );
};

export default StarshipManager;
