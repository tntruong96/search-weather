import "./styles.css";
import { useState, useEffect } from "react";
import Round from "./component/round.js";

const arrayWeather = [
  {
    place: "HCM",
    cel: "15",
    status: "Mua",
    color: "white"
  },
  {
    place: "HN",
    cel: "40",
    status: "Nang",
    color: "yellow"
  },
  {
    place: "HP",
    cel: "22",
    status: "Giong",
    color: "gray"
  },
  {
    place: "HCM",
    cel: "15",
    status: "mua",
    color: "white"
  },
];

export default function App() {
  const [weather, setWeather] = useState(arrayWeather);
  const [search, setSearch] = useState("");

  const searchWeather = (search) => {
    if (search === "") {
      setWeather([...arrayWeather]);
    } else {
      const weathers = arrayWeather.filter((item) => {
          const searchItem = item.status.toLowerCase().includes(search.toLowerCase());
          console.log(searchItem);
          return searchItem && item ;
      });
      console.log(weathers);
      setWeather([...weathers]);
    }
  };

  useEffect(() => {
    searchWeather(search);
  }, [search]);

  return (
    <div className="App">
      <input
        type="text"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
        placeholder="Tìm kiếm thời tiết"
      />
      <div className="weather-container">
        {weather ? (
          weather.map((item, index) => {
            return <Round key={index} {...item} />;
          })
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}
