import Table from "react-bootstrap/Table";

function PostTable() {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Name</th>
          <th>Username</th>
          <th>Message</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Andrew</td>
          <td>@Scone527</td>
          <td>This is a test!</td>
        </tr>
        <tr>
          <td>Calvin</td>
          <td>@Apex</td>
          <td>Test message</td>
        </tr>
        <tr>
          <td>John</td>
          <td>@Doc</td>
          <td>Another test</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default PostTable;
