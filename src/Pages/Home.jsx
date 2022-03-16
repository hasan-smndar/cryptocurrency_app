import { Title, GlobalState, Container, Card, Loader } from "../components";
import axios from "axios";
import { GLOBAL_STATE, TRENDING_COINS } from "../api";
import { useQuery } from "react-query";
const fetchTrending = () => {
  return axios.get(TRENDING_COINS);
};
const fetchGlobalState = () => {
  return axios.get(GLOBAL_STATE);
};
const Home = () => {
  const { data: trending, isLoading } = useQuery("Trending", fetchTrending, {
    select: (trending) => {
      return trending.data.map((item) => {
        return {
          id: item.id,
          name: item.name,
          image: item.image,
          list: [
            {
              title: "Price",
              number: item.current_price,
            },
            {
              title: "Market cap",
              number: item.market_cap,
            },
            {
              title: "Daily Change",
              number: item.price_change_percentage_24h,
            },
            {
              title: "1h Change",
              number: item.price_change_percentage_1h_in_currency,
            },
          ],
        };
      });
    },
  });
  const { data: global } = useQuery("GlobalState", fetchGlobalState, {
    select: (data) => {
      const global = data.data.data;
      const globalList = [
        {
          id: 1,
          text: "Active Cryptocurrencies",
          value: global.active_cryptocurrencies,
        },
        {
          id: 2,
          text: "Total market cap",
          value: global.total_market_cap.usd,
        },
        {
          id: 3,
          text: "Markets",
          value: global.markets,
        },
        {
          id: 4,
          text: "Total volume",
          value: global.total_volume.usd,
        },
      ];
      return globalList;
    },
  });
  if (isLoading) return <Loader />;

  return (
    <div className="px-3 py-3">
      <Container>
        <Title>Global Crypto State</Title>
        <GlobalState list={global} />
        <section className="py-5">
          <Title>Top 10 Cryptocurrencies in The world</Title>
          <div className="grid sm:grid-cols-2 md:grid-cols-3  xl:grid-cols-4 gap-x-5 gap-y-8 ">
            {trending.map((item) => {
              return <Card key={item.id} {...item}></Card>;
            })}
          </div>
        </section>
      </Container>
    </div>
  );
};
export default Home;
