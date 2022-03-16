const Title = ({ children }) => {
  return (
    <div className="title">
      <h1 className="text-yellow-900 font-medium text-lg sm:text-2xl ">
        {children}
      </h1>
    </div>
  );
};

export default Title;
