import { useDispatch, useSelector } from "react-redux";

import { Progress, Card } from "antd";
import { DeleteFilled, EditFilled } from "@ant-design/icons";

const { Meta } = Card;

const Fleet = () => {
  const dispatch = useDispatch();
  const fleet = useSelector((state) => state.fleet);

  const removeFromFleet = (starship) => {
    dispatch({ type: "DECREASE_FLEET", payload: starship });
  };

  const openDetailed = (starship) => {
    dispatch({ type: "OPEN_DETAILED", payload: starship });
  };

  return (
    <Card title="Your Fleet" style={{ marginBottom: "50px" }}>
      {fleet &&
        fleet.map((ship) => (
          <div key={ship.id}>
            <Card
              style={{ marginBottom: "10px" }}
              type="inner"
              actions={[
                <DeleteFilled
                  key="setting"
                  onClick={() => removeFromFleet(ship)}
                />,
                <EditFilled key="edit" onClick={() => openDetailed(ship)} />,
              ]}
            >
              <Meta title={ship.name} description={ship.model} />
              <Progress percent={ship.usage} showInfo={false} />
            </Card>
          </div>
        ))}
    </Card>
  );
};

export default Fleet;
