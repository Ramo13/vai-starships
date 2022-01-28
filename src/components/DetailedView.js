import { useSelector } from "react-redux";

const DetailedView = () => {
  const detailViewShip = useSelector((state) => state.detailViewShip);

  return (
    <p>
      {detailViewShip && (
        <>{`${detailViewShip.name} ${detailViewShip.capacity}`}</>
      )}
    </p>
  );
};

export default DetailedView;
