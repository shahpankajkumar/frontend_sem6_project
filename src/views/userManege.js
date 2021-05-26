import React from "react";

// reactstrap components
import {
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Table,
  Row,
  Col,
  
} from "reactstrap";

// core components
import PanelHeader from "components/PanelHeader/PanelHeader.js";
import axios from "axios";

class RegularTables extends React.Component {
  state = {
    userData: []
  }

  componentDidMount = () => {
    this.getUserData();
  }

  getUserData = () => {
    axios.get('http://localhost:3000/api/userDisplay',
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }).then((response) => {
        // console.log(response.data);
        this.setState({ userData: response.data })
      });
  }
  render() {

    const { userData } = this.state;
    const styleMargin = {
      bordersHead: {
        border: '1px solid black',
        backgroundColor:'#AFDCEC'
      },
      borders: {
        border: '1px solid black'
      }
    }
    return (
      <>
        <PanelHeader size="sm" />
        <div className="content ">
          <Row>
            <Col xs={12}>
              <Card>
                <CardHeader>
                  <CardTitle tag="h4" className="font-weight-bold">All users</CardTitle>
                </CardHeader>
                <CardBody>
                  <Table responsive>
                    <thead className="text-primary font-weight-bold" style={{ border: '1px solid black' }}>
                      <tr>
                        <th className="text-center font-weight-bold" style={styleMargin.bordersHead}>Fname</th>
                        <th className="text-center font-weight-bold" style={styleMargin.bordersHead}>Lname</th>
                        <th className="text-center font-weight-bold" style={styleMargin.bordersHead}>Email</th>
                        {/* <th className="text-center font-weight-bold">Gender</th> */}
                        <th className="text-center font-weight-bold" style={styleMargin.bordersHead}>Phone No</th>
                        <th className="text-center font-weight-bold" style={styleMargin.bordersHead}>Action</th>
                      </tr>
                    </thead>
                    <tbody style={{ border: '1px solid black' }}>
                      {userData.map((e, key) => {
                        return (
                          <tr key={`${key}-key`} className="text-left">
                            <td className="text-center font-weight-bold" style={styleMargin.borders}>
                              {e.Fname}
                            </td>
                            <td className="text-center font-weight-bold" style={styleMargin.borders}>
                              {e.Lname}
                            </td>
                            <td className="text-center font-weight-bold" style={styleMargin.borders}>
                              {e.email}
                            </td>
                            <td className="text-center font-weight-bold" style={styleMargin.borders}>
                              {e.phone}
                            </td>
                            <td className="text-center font-weight-bold" style={styleMargin.borders}>
                              {e.status}
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </Table>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default RegularTables;