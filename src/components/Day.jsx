import Select from "react-select";
const options = Array.from({ length: 365 }, (_, i) => i + 1).map((number) => {
  return { value: number, label: `${number} days` };
});
const Day = ({ days, setDays }) => {
  return (
    <div className="py-4">
      <Select
        defaultValue={days}
        onChange={setDays}
        options={options}
        isClearable={false}
        isSearchable={false}
        className=" sm:w-2/5"
        placeholder="number of days"
      />
    </div>
  );
};
export default Day;
