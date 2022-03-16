import { useState } from "react";
import axios from "axios";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import useGlobal from "../Context/useGlobalContext";
import { SINGLE_CRYPTO } from "../api";
import {
  Discription,
  Info,
  Currency,
  Graph,
  Title,
  Loader,
  Day,
} from "../components";
const fetchSingleCrypto = ({ queryKey }) => {
  const [, id] = queryKey;
  return axios.get(SINGLE_CRYPTO(id));
};
const Cryptocurrency = () => {
  const { cryptoId } = useParams();
  const [days, setDays] = useState({ value: 1, label: "1 days" });
  const { currency } = useGlobal();
  const { data, isLoading } = useQuery(
    ["cryptocurrency", cryptoId],
    fetchSingleCrypto,
    {
      select: (data) => {
        const dat = data.data;
        return {
          id: dat.id,
          name: dat.name,
          description: dat.description.en,
          image: dat.image.small,
          lastUpdata: dat.last_updated,
          list: [
            {
              text: "current price",
              value: dat.market_data.current_price[currency.value],
            },
            {
              text: "total volume",
              value: dat.market_data.total_volume[currency.value],
            },
            {
              text: "price change in 24h ",
              value: dat.market_data.price_change_percentage_24h,
            },
            {
              text: "price change in 7 day",
              value: dat.market_data.price_change_percentage_7d,
            },
            {
              text: "market cap change in 24h",
              value: dat.market_data.market_cap_change_percentage_24h,
            },
          ],
        };
      },
    }
  );

  if (isLoading) return <Loader />;
  return (
    <>
      <div className="px-6 py-4">
        <header className=" header-crypto flex items-center justify-between">
          <div className="flex items-center space-x-1 sm:space-x-6">
            <img src={data?.image} alt={data?.name} />
            <h2 className=" font-semibold text-yellow-900 text-xl sm:text-2xl">
              {data?.name}
            </h2>
          </div>
          <Currency />
        </header>
        <div className="py-2.5">
          <h4 className="text-md">
            {new Date(data?.lastUpdata).toUTCString()}
          </h4>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 py-5 gap-5 border-b-2">
          {data?.list.map((item, index) => {
            return (
              <Info
                key={index}
                title={item.text}
                number={item.value}
                prenstage={index > 1}
              />
            );
          })}
        </div>
        <section className="">
          <Day day={days} setDays={setDays}></Day>
          <Graph
            currency={currency.value}
            days={days}
            cryptoId={cryptoId}
            name={data?.name}
          />
        </section>
        <div className="mt-10 mb-5">
          <Title>About {data?.name}</Title>
        </div>
        {data?.description.length === 0 ? (
          <h2 className=" text-sm sm:text-lg text-gray-900 font-medium">
            No inoformation about {data.name} now
          </h2>
        ) : (
          <Discription description={data?.description} />
        )}
      </div>
    </>
  );
};

export default Cryptocurrency;
