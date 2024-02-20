const Main = ({ name, gender, github, country }) => {
  return (
    <div>
      <main className="">
        <div className="bg-gray-300 mt-5  rounded m-[30px] mb-5 p-5 ">
          <h1 className="text-gray-600  text-xl text-center font-poppins mt-1 mb-7  font-semibold">
            Card
          </h1>
          <div className="font-poppins font-semibold ml-10 text-gray-500 space-y-5 mt-2 mb-7">
            <p> Name : {name} </p>
            <p> Gender : {gender} </p>
            <p> Github : {github} </p>
            <p> Country : {country}</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Main;
