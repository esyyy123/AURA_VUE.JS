<template>
  <div class="wrapper">
    <div class="header">
      <div class="nav">
        <img src="./assets/logo.png" alt="" />
        <span style="padding-left: 27px;">
          <i class="fas fa-chart-line"></i>
          Sales</span>
        <span style="padding-left: 20px;">
          <i class="fas fa-file-alt"></i>
          Report</span>
      </div>
      <div class="user">
        <div class="dropdown notificationBell">
          <button class="buttonBell dropdowns-toggle bx bx-bell icon-button mt-3" data-toggle="notif-menu"
            style="margin-right: 20px">
            <span class="icon-button__badge fw-bold" style="padding: 5px; font-size: 13px" id="count_notif">0</span>
          </button>
          <ul id="notif-menu" class="dropdowns-menu dropdown-menu-start"
            style="height: 400px; padding: 16px; margin-top: -12px">
            <li class="dropdowns-menu-item">
            <li class="dropdown-item d-flex align-items-end justify-content-between text-black" style="width: 400px">
              <p class="fw-bold">Notifikasi <span class="totalNotif"></span></p>
              <a href="#" class="text-red500 text-decoration-none readAllNotification" style="font-size: 14px">Tandai
                Sudah Dibaca</a>
            </li>
            <hr class="text-black my-2">
            <div class="overflow-auto" id="idNotification">
            </div>
            </li>
          </ul>
        </div>
        <span>Febby Fakhrian</span>
        <img src="./assets/img/boy.png" alt="User Icon" />
      </div>
    </div>
    <div class="logo">
      <span>Sales</span>
    </div>
    <div class="content">
      <div class="left">
        <div class="date-range">
          <span>16 July 2024 to 17 July 2024</span>
          <i class="far fa-calendar-alt"></i>
          <v-container>
            <v-row justify="space-around">
              <v-date-picker elevation="24"></v-date-picker>
            </v-row>
          </v-container>
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
        <div class="actions">
          <button class="btn btn-primary">Verify</button>
          <button class="btn btn-danger">Delete</button>
          <button class="btn btn-info">Edit</button>
          <button class="btn btn-success">Add</button>
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
                <td><input type="checkbox"></td>
              </tr>
              <tr>
                <td>2</td>
                <td>ID00003035</td>
                <td>Asus</td>
                <td>1</td>
                <td>7.000.000</td>
                <td><input type="checkbox"></td>
              </tr>
              <tr>
                <td>3</td>
                <td>ID00003034</td>
                <td>Apple</td>
                <td>2</td>
                <td>24.000.000</td>
                <td><input type="checkbox"></td>
              </tr>
              <tr>
                <td>4</td>
                <td>ID00003033</td>
                <td>Nokia</td>
                <td>4</td>
                <td>10.000.000</td>
                <td><input type="checkbox"></td>
              </tr>
              <tr>
                <td>5</td>
                <td>ID00003032</td>
                <td>Lenovo</td>
                <td>1</td>
                <td>11.000.000</td>
                <td><input type="checkbox"></td>
              </tr>
              <tr>
                <td>6</td>
                <td>ID00003031</td>
                <td>Acer</td>
                <td>1</td>
                <td>8.990.000</td>
                <td><input type="checkbox"></td>
              </tr>
              <tr>
                <td>7</td>
                <td>ID00003030</td>
                <td>Itel</td>
                <td>3</td>
                <td>6.500.000</td>
                <td><input type="checkbox"></td>
              </tr>
              <tr>
                <td>8</td>
                <td>ID00003029</td>
                <td>Dell</td>
                <td>2</td>
                <td>14.000.000</td>
                <td><input type="checkbox"></td>
              </tr>
              <tr>
                <td>9</td>
                <td>ID00003028</td>
                <td>Samsung</td>
                <td>1</td>
                <td>7.999.000</td>
                <td><input type="checkbox"></td>
              </tr>
              <tr>
                <td>10</td>
                <td>ID00003026</td>
                <td>Xiaomi</td>
                <td>1</td>
                <td>6.799.000</td>
                <td><input type="checkbox"></td>
              </tr>
              <tr>
                <td>11</td>
                <td>ID00003025</td>
                <td>Apple</td>
                <td>1</td>
                <td>8.990.000</td>
                <td><input type="checkbox"></td>
              </tr>
              <tr>
                <td>12</td>
                <td>ID00003024</td>
                <td>Apple</td>
                <td>3</td>
                <td>6.500.000</td>
                <td><input type="checkbox"></td>
              </tr>
              <tr>
                <td>13</td>
                <td>ID00003023</td>
                <td>Apple</td>
                <td>2</td>
                <td>14.000.000</td>
                <td><input type="checkbox"></td>
              </tr>
              <tr>
                <td>14</td>
                <td>ID00003022</td>
                <td>Asus</td>
                <td>1</td>
                <td>7.999.000</td>
                <td><input type="checkbox"></td>
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