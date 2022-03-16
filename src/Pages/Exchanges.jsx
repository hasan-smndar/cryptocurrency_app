import axios from "axios";
import millify from "millify";
import { useQuery } from "react-query";
import { EXCHANGES } from "../api";
import { Loader, Pagination, Container } from "../components";
import { usePagination } from "../helper/usePagination";
import { scrollToTop } from "../helper/ScrollToTop";
import { useEffect } from "react";
const fetchExchanges = ({ queryKey }) => {
  const [, page] = queryKey;
  return axios.get(EXCHANGES(page));
};
const ArrayHeader = [
  "Cryptocurrency",
  "Trust Score Rank",
  "Trade Volume 24h",
  "Year Established",
];
const Exchanges = () => {
  const { page, next, prev, setPagination } = usePagination();
  const { data, isLoading } = useQuery(["exchanges", page], fetchExchanges);
  useEffect(() => {
    scrollToTop();
  }, [page]);
  if (isLoading) return <Loader />;
  return (
    <Container>
      <div className="overflow-x-auto">
        <table className=" table-auto w-full border-collapse text-sm ">
          <thead>
            <tr>
              {ArrayHeader.map((item, index) => {
                return (
                  <th
                    key={index}
                    className="border-b text-md font-medium p-4 pl-8 pb-3 text-yellow-700 text-left"
                  >
                    {item}
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {data?.data?.map((item, index) => {
              return (
                <tr key={item.id}>
                  <td className="flex items-center space-x-2 border-b font-medium p-4 pl-8 pb-3 text-gray-700 text-left">
                    <h3 className="font-medium">{index + 1}.</h3>
                    <img src={item.image} alt="" />
                    <span>{item.name}</span>
                  </td>
                  <td className="border-b font-medium p-4 pl-8 pb-3 text-gray-700 text-left">
                    {item.trust_score_rank}
                  </td>
                  <td className="border-b font-medium p-4 pl-8 pb-3 text-gray-700 text-left">
                    {millify(item.trade_volume_24h_btc)}
                  </td>
                  <td className="border-b font-medium p-4 pl-8 pb-3 text-gray-700 text-left">
                    {item.year_established}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className="py-6">
          <Pagination
            setPagination={setPagination}
            page={page}
            next={next}
            prev={prev}
            len={5}
          />
        </div>
      </div>
    </Container>
  );
};

export default Exchanges;
