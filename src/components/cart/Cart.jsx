import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";

const Cart = () => {
  const { user } = useContext(AuthContext);
  console.log(user);

  const [userOrder, setUserOrder] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/adToCardProduct/${user?.email}`)
      .then((res) => res.json())
      .then((result) => setUserOrder(result));
  }, [user?.email]);

  console.log(userOrder);
  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>Name</th>
            <th>email</th>
            <th>price</th>
            <th>delete</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {userOrder?.map((users) => (
            <tr key={users?._id}>
              <td>Name : {users?.name}</td>
              <td>email {users?.userEmail}</td>
              <td>{users?.price}</td>
              <td>
                <button className="btn">X</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Cart;
