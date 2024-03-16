function Table({ data }) {
    return (
      <table>
        <tbody>
          <tr>
            <th>Name of the Clients</th>
            <th>Surname of the Clients</th>
            <th>E-mails</th>
          </tr>
          {data.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.first_name}</td>
                <td>{item.last_name}</td>
                <td>{item.email}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
  
  export default Table;