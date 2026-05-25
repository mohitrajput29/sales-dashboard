export default function SalesTable({
  sales
}) {

  return (

    <table
      border="1"
      cellPadding="10"
      width="100%"
      style={{
        borderCollapse: "collapse"
      }}
    >

      <thead>

        <tr>
          <th>Product</th>
          <th>Category</th>
          <th>Revenue</th>
        </tr>

      </thead>

      <tbody>

        {
          sales.map(item => (

            <tr key={item.id}>

              <td>{item.product}</td>
              <td>{item.category}</td>
              <td>₹ {item.revenue}</td>

            </tr>
          ))
        }

      </tbody>

    </table>
  );
}