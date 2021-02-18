import React from 'react';
import { HorizontalBar } from 'react-chartjs-2';
import { MDBContainer } from 'mdbreact';

class DashboardGraph extends React.Component {
  state = {
    dataHorizontal: {
      labels: ['option 1', 'option 2','OTHA', 'CLA'],
      datasets: [
        {
          label: 'Total Hours',
          data: [22, 33, 55, 12],
          fill: false,
          backgroundColor: [
            'yellow',
            'blue'
          ],
          borderColor: [
            'yellow',
            'blue'
          ],
          borderWidth: 1
        }
      ]
    }
  };

  render() {
    return (
      <MDBContainer>
        <HorizontalBar
          data={this.state.dataHorizontal}
          options={{ responsive: true }}
        />
      </MDBContainer>
    );
  }
}

export default DashboardGraph;