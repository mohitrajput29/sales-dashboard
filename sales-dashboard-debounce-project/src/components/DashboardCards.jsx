export default function DashboardCards({
  sales,
  theme
}) {

  const totalRevenue =
    sales.reduce(

      (total, item) =>
        total + item.revenue,

      0
    );

  const totalOrders =
    sales.length;

  return (

    <div
      style={{
        display: "flex",
        gap: "20px",
        marginBottom: "30px"
      }}
    >

      <div
        style={{
          border: "1px solid gray",
          padding: "20px",
          borderRadius: "10px",
          background:
            theme === "dark"
              ? "#1e293b"
              : "white",
          color:
            theme === "dark"
              ? "white"
              : "black"
        }}
      >

        <h3>Total Revenue</h3>
        <p>₹ {totalRevenue}</p>

      </div>

      <div
        style={{
          border: "1px solid gray",
          padding: "20px",
          borderRadius: "10px",
          background:
            theme === "dark"
              ? "#1e293b"
              : "white",
          color:
            theme === "dark"
              ? "white"
              : "black"
        }}
      >

        <h3>Total Orders</h3>
        <p>{totalOrders}</p>

      </div>

    </div>
  );
}