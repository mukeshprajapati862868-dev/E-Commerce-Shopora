const UserProfile = ({ orders }) => {
  return (
    <div className="mt-56 p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">My Profile</h1>
      <h2 className="text-xl font-semibold mb-2">Orders</h2>
      <ul className="space-y-4">
        {orders.map((order) => (
          <li key={order.id} className="p-4 border rounded shadow">
            <div className="text-lg">{order.title}</div>
            <div className={`text-sm font-semibold ${order.status === 'Delivered' ? 'text-green-600' : 'text-yellow-600'}`}>
              Status: {order.status}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserProfile;
