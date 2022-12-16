const KEY = "81e40bfd11b3011defe8315178339865";

const getData = async (city) => {
  const bese = "https://api.openweathermap.org/data/2.5/weather";
  const query = `?q=${city}&units=metric&appid=${KEY}`;

  const req = await fetch(bese + query);

  const data = await req.json();

  return data;
};

// const result = getData("london");
// console.log(result);

// getData("london").then((data) => );
