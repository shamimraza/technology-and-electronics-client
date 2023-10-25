import { useLoaderData } from "react-router-dom";
import Header from "../header/Header";
import BrandCard from "../brands/BrandCard";
import HotDell from "../hotDell/HotDell";

const Home = () => {
  const users = useLoaderData();
  console.log(users);
  return (
    <div>
      <Header></Header>
      <div className="mt-5">
        <h2 className="mt-10 text-center font-bold text-3xl">Brand Category</h2>
        <p className="text-center mt-3 text-red-500">
          Details of all types of products are given below along with virtues
        </p>
        <div className="grid grid-cols-1  md:grid-cols-3 gap-4">
          {users.map((user) => (
            <BrandCard key={user._id} user={user}></BrandCard>
          ))}
        </div>
      </div>
      <HotDell></HotDell>
    </div>
  );
};

export default Home;
