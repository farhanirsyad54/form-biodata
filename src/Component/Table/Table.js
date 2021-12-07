import react from "react";
import { Card, CardBody, CardHeader, Table } from "reactstrap";

function TableProfile(props) {
  return (
    <div>
      <Card bg="primary" style={{ height: "300px" }}>
        <CardHeader style={{ backgroundColor: "#F1C047" }}>
          <h2>Tabel Profil</h2>{" "}
        </CardHeader>
        <CardBody>
          <Table>
            <thead>
              <th>Foto</th>
              <th>Nama</th>
              <th>Posisi</th>
              <th>No. Telepon</th>
              <th>Email</th>
            </thead>
            <tbody>
              {props.listProfile.length ? (
                props.listProfile.map((data) => (
                  <tr key={data.id}>
                    <td>{data.ava}</td>
                    <td>{data.name}</td>
                    <td>{data.job}</td>
                    <td>{data.phone}</td>
                    <td>{data.email}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                </tr>
              )}
            </tbody>
          </Table>
        </CardBody>
      </Card>
    </div>
  );
}

export default TableProfile;
