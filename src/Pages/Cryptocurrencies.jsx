import axios from "axios";
import React, { useEffect } from "react";
import {
  Container,
  Card,
  Currency,
  Pagination,
  Title,
  Loader,
} from "../components";
import { useQuery } from "react-query";
import useGlobal from "../Context/useGlobalContext";
import { COIN_LIST } from "../api";
import { usePagination } from "../helper/usePagination";
import { scrollToTop } from "../helper/ScrollToTop";
const fetchCoinList = ({ queryKey }) => {
  const [, currency, page] = queryKey;
  return axios.get(COIN_LIST(currency, page));
};
const Cryptocurrencies = () => {
  const { currency } = useGlobal();
  const { page, next, prev, setPagination } = usePagination();
  const { data: cryptocurrencies, isLoading } = useQuery(
    ["coinList", currency.value, page],
    fetchCoinList,
    {
      keepPreviousData: true,
      select: (cryptocurrencies) => {
        return cryptocurrencies.data.map((item) => {
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
    }
  );
  useEffect(() => {
    scrollToTop();
  }, [page]);
  if (isLoading) return <Loader />;
  return (
    <div className="py-8">
      <Container>
        <div className="header-crypto flex justify-between item-center">
          <Title>Cryptocurrencies</Title>
          <Currency />
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-5 gap-y-8 py-10 ">
          {cryptocurrencies.map((item) => {
            return <Card key={item.id} {...item}></Card>;
          })}
        </div>
        <div className="">
          <Pagination
            setPagination={setPagination}
            page={page}
            prev={prev}
            next={next}
            len={5}
          />
        </div>
      </Container>
    </div>
  );
};

export default Cryptocurrencies;
