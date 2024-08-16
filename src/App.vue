<template>
  <div class="container">
    <div class="header">
      <div class="logo">
        <i class="fas fa-circle"></i>
        <span>Sales</span>
      </div>
      <div class="nav">
        <i class="fas fa-chart-line"></i>
        <span>Sales</span>
        <i class="fas fa-file-alt"></i>
        <span>Report</span>
      </div>
      <div class="user">
        <i class="fas fa-bell"></i>
        <span>11</span>
        <span>Febby Fakhrian</span>
        <i class="fas fa-user-circle"></i>
      </div>
    </div>
    <div class="content">
      <div class="left">
        <div class="date-range">
          <span>16 July 2024 to 17 July 2024</span>
          <i class="far fa-calendar-alt"></i>
        </div>
        <div class="title">Comparation Sales</div>
        <div class="chart">
          <canvas id="myChart"></canvas>
          <div class="legend">
            <div class="legend-item">
              <i class="fas fa-circle" style="color: #ffc107;"></i>
              <span>16 July 2024</span>
            </div>
            <div class="legend-item">
              <i class="fas fa-circle" style="color: #00a9ff;"></i>
              <span>17 July 2024</span>
            </div>
          </div>
        </div>
        <div class="products">
          <div class="title">Most Popular Products</div>
          <table class="table">
            <thead>
              <tr>
                <th>No</th>
                <th>Product Name</th>
                <th>Price</th>
                <th>Total QTY</th>
                <th>Total Price</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Iphone 14 Pro</td>
                <td>Rp. 11.079.429</td>
                <td>100</td>
                <td>Rp. 1.107.942.900</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Iphone 15 Pro</td>
                <td>Rp. 13.505.582</td>
                <td>75</td>
                <td>Rp. 1.012.918.650</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Asus TUF Gaming AX4200</td>
                <td>Rp. 12.426.152</td>
                <td>50</td>
                <td>Rp. 621.307.600</td>
              </tr>
              <tr>
                <td>4</td>
                <td>Asus ROG Rapture GT-BE98</td>
                <td>Rp. 17.729.213</td>
                <td>25</td>
                <td>Rp. 443.230.325</td>
              </tr>
              <tr>
                <td>5</td>
                <td>Samsung Galaxy S23 FE</td>
                <td>Rp. 6.375.000</td>
                <td>13</td>
                <td>Rp. 82.875.000</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="right">
        <div class="title">History Transcation</div>
        <div class="search">
          <i class="fas fa-search"></i>
          <input type="text" placeholder="Search" />
        </div>
        <div class="filter">
        <select class="select">
            <option value="14">14</option>
            <option value="15">15</option>
            <option value="16">16</option>
          </select>
        </div>
        <div class="table-container">
          <table class="table">
            <thead>
              <tr>
                <th>No</th>
                <th>Transaction Code</th>
                <th>Customer</th>
                <th>Total Item</th>
                <th>Total Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>ID00003036</td>
                <td>Xiaomi</td>
                <td>1</td>
                <td>2.000.000</td>
                <td><i class="fas fa-square"></i></td>
              </tr>
              <tr>
                <td>2</td>
                <td>ID00003035</td>
                <td>Asus</td>
                <td>1</td>
                <td>7.000.000</td>
                <td><i class="fas fa-square"></i></td>
              </tr>
              <tr>
                <td>3</td>
                <td>ID00003034</td>
                <td>Apple</td>
                <td>2</td>
                <td>24.000.000</td>
                <td><i class="fas fa-square"></i></td>
              </tr>
              <tr>
                <td>4</td>
                <td>ID00003033</td>
                <td>Nokia</td>
                <td>4</td>
                <td>10.000.000</td>
                <td><i class="fas fa-square"></i></td>
              </tr>
              <tr>
                <td>5</td>
                <td>ID00003032</td>
                <td>Lenovo</td>
                <td>1</td>
                <td>11.000.000</td>
                <td><i class="fas fa-square"></i></td>
              </tr>
              <tr>
                <td>6</td>
                <td>ID00003031</td>
                <td>Acer</td>
                <td>1</td>
                <td>8.990.000</td>
                <td><i class="fas fa-square"></i></td>
              </tr>
              <tr>
                <td>7</td>
                <td>ID00003030</td>
                <td>Itel</td>
                <td>3</td>
                <td>6.500.000</td>
                <td><i class="fas fa-square"></i></td>
              </tr>
              <tr>
                <td>8</td>
                <td>ID00003029</td>
                <td>Dell</td>
                <td>2</td>
                <td>14.000.000</td>
                <td><i class="fas fa-square"></i></td>
              </tr>
              <tr>
                <td>9</td>
                <td>ID00003028</td>
                <td>Samsung</td>
                <td>1</td>
                <td>7.999.000</td>
                <td><i class="fas fa-square"></i></td>
              </tr>
              <tr>
                <td>10</td>
                <td>ID00003026</td>
                <td>Xiaomi</td>
                <td>1</td>
                <td>6.799.000</td>
                <td><i class="fas fa-square"></i></td>
              </tr>
              <tr>
                <td>11</td>
                <td>ID00003025</td>
                <td>Apple</td>
                <td>1</td>
                <td>8.990.000</td>
                <td><i class="fas fa-square"></i></td>
              </tr>
              <tr>
                <td>12</td>
                <td>ID00003024</td>
                <td>Apple</td>
                <td>3</td>
                <td>6.500.000</td>
                <td><i class="fas fa-square"></i></td>
              </tr>
              <tr>
                <td>13</td>
                <td>ID00003023</td>
                <td>Apple</td>
                <td>2</td>
                <td>14.000.000</td>
                <td><i class="fas fa-square"></i></td>
              </tr>
              <tr>
                <td>14</td>
                <td>ID00003022</td>
                <td>Asus</td>
                <td>1</td>
                <td>7.999.000</td>
                <td><i class="fas fa-square"></i></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="pagination">
          <i class="fas fa-chevron-left"></i>
          <i class="fas fa-chevron-left"></i>
          <span>1</span>
          <span>2</span>
          <span>3</span>
          <span>4</span>
          <span>5</span>
          <i class="fas fa-chevron-right"></i>
          <i class="fas fa-chevron-right"></i>
        </div>
        <div class="actions">
          <button class="btn btn-primary">Verify</button>
          <button class="btn btn-danger">Delete</button>
          <button class="btn btn-info">Edit</button>
          <button class="btn btn-success">Add</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Chart from 'chart.js/auto';

export default {
  name: 'App',
  mounted() {
    const ctx = document.getElementById('myChart').getContext('2d');
    const myChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['1', '2', '3', '4', '5', '6'],
        datasets: [
          {
            label: '16 July 2024',
            data: [200, 100, 300, 120, 200, 100],
            borderColor: '#ffc107',
            borderWidth: 2,
            fill: false,
          },
          {
            label: '17 July 2024',
            data: [100, 200, 120, 200, 100, 200],
            borderColor: '#00a9ff',
            borderWidth: 2,
            fill: false,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  },
};
</script>

<style>
.container {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: #f5f5f5;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.logo {
  display: flex;
  align-items: center;
}

.logo i {
  font-size: 24px;
  color: #ff5722;
  margin-right: 10px;
}

.logo span {
  font-size: 24px;
  font-weight: bold;
  color: #333;
}

.nav,
.user {
  display: flex;
  align-items: center;
}

.nav i,
.user i {
  font-size: 18px;
  color: #666;
  margin-right: 10px;
}

.nav span,
.user span {
  font-size: 16px;
  color: #666;
}

.content {
  display: flex;
  padding: 20px;
  background-color: #f2f2f2;
}

.left,
.right {
  width: 50%;
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin: 10px;
}

.date-range {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.date-range span {
  font-size: 16px;
  color: #333;
}

.date-range i {
  font-size: 18px;
  color: #666;
}

.title {
  font-size: 20px;
  font-weight: bold;
  color: #333;
  margin-bottom: 20px;
}

.chart {
  height: 300px;
  position: relative;
}

.chart canvas {
  width: 100%;
  height: 100%;
}

.legend {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  bottom: 10px;
  left: 10px;
  right: 10px;
}

.legend-item {
  display: flex;
  align-items: center;
}

.legend-item i {
  font-size: 12px;
  margin-right: 5px;
}

.legend-item span {
  font-size: 12px;
  color: #666;
}

.products {
  margin-top: 20px;
}

.products .title {
  margin-bottom: 10px;
}

.products .table {
  width: 100%;
  border-collapse: collapse;
  color: #050505;
}

.products .table th,
.products .table td {
  padding: 10px;
  border: 1px solid #ddd;
  text-align: left;
}

.products .table th {
  background-color: #f2f2f2;
}

.right .title {
  margin-bottom: 10px;
}

.search {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  background-color: #f2f2f2;
  padding: 1px;
  border-radius: 4px;
  margin-right: 400px;
  
}

.filter select{
  margin: 0 ;
  display: flex;
  color:black;
}

.search i {
  font-size: 18px;
  color: #666;
  margin-right: 10px;
}

.search input {
  border: none;
  outline: none;
  padding: 8px;
  font-size: 16px;
  color: #333;
}

.search select {
  border: none;
  outline: none;
  padding: 8px;
  font-size: 16px;
  color: #333;
  margin-left: 10px;
  border-radius: 4px;
  background-color: #f2f2f2;
  appearance: none;
}

.table-container {
  overflow-x: auto;
}

.table-container .table {
  width: 100%;
  border-collapse: collapse;
}

.table-container .table th,
.table-container .table td {
  padding: 10px;
  border: 1px solid #ddd;
  text-align: left;
  color: #000000;
}

.table-container .table th {
  background-color: #f2f2f2;
  color: #000000;
}

.table-container .table .fas {
  font-size: 16px;
  color: #000000;
  margin-right: 5px;
}

.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}

.pagination i,
.pagination span {
  padding: 8px 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin: 0 5px;
  font-size: 16px;
  color: #333;
  cursor: pointer;
}

.actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
}

.btn {
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  color: #fff;
  cursor: pointer;
}

.btn-primary {
  background-color: #00a9ff;
}

.btn-danger {
  background-color: #ff5722;
}

.btn-info {
  background-color: #00bcd4;
}

.btn-success {
  background-color: #4caf50;
}
</style>