const Discription = ({ description }) => {
  return (
    <section>
      <p
        className=" discription py-2 text-gray-900 font-medium text-md sm:text-lg"
        dangerouslySetInnerHTML={{ __html: description }}
      />
    </section>
  );
};

export default Discription;
