import Select from "react-select";
import useGlobal from "../Context/useGlobalContext";
const options = [
  { value: "usd", label: "US Dollar" },
  { value: "eur", label: "Euro" },
  { value: "rub", label: "Russian Ruble" },
  { value: "cny", label: "Chines Yuan" },
  { value: "jpy", label: "Japanese Yen" },
];
const Currency = () => {
  const { currency, setCurrency } = useGlobal();
  return (
    <div className="App">
      <Select
        defaultValue={currency}
        onChange={setCurrency}
        options={options}
        isClearable={false}
        isSearchable={false}
        className="min-w-1/5"
      />
    </div>
  );
};
export default Currency;
