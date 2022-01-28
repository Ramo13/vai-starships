import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Input, Button, Pagination, Space } from "antd";
import { PlusSquareFilled } from "@ant-design/icons";

const Search = () => {
  const dispatch = useDispatch();

  const [searchStarships, setSearchStarships] = useState([]);
  const [resultsCount, setResultsCount] = useState(0);
  const [page, setPage] = useState(1);

  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {}, [searchStarships]);

  useEffect(() => {
    onSearch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  useEffect(() => {
    setPage(1);
    setResultsCount(0);
    onSearch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchValue]);

  function onSearch() {
    if (!searchValue) {
      setSearchStarships([]);
      setPage(1);
      setResultsCount(0);
      return;
    }

    fetch(`https://swapi.dev/api/starships/?search=${searchValue}&page=${page}`)
      .then((res) => res.json())
      .then(
        (data) => {
          setResultsCount(data.count);
          setSearchStarships(data.results);
        },
        (error) => {
          console.log("error", error.message);
        }
      );
  }

  const addToFleet = (starship) => {
    dispatch({ type: "INCREASE_FLEET", payload: starship });
  };

  const onChangePage = (page, pageSize) => {
    setPage(page);
  };

  return (
    <div>
      <Input
        style={{ margin: "20px 0 20px 0" }}
        placeholder="Death Star"
        onChange={(e) => {
          setSearchValue(e.target.value);
        }}
      />

      {searchStarships && (
        <>
          <Space direction="vertical" style={{ paddingBottom: "20px" }}>
            {searchStarships.map((ship) => (
              <Button
                onClick={() => addToFleet(ship)}
                type="primary"
                shape="round"
                icon={<PlusSquareFilled />}
                key={ship.name}
              >
                {ship.name}
              </Button>
            ))}
          </Space>
          {resultsCount > 10 && (
            <Pagination onChange={onChangePage} total={resultsCount} />
          )}
        </>
      )}
    </div>
  );
};

export default Search;
