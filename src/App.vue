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
        <i class="fas fa-bell"></i>
        <span>Febby Fakhrian</span>
        <img src="./assets/img/boy.png" alt="User Icon" />
        <img src="./assets/img/down-arrow.png" alt="dropdown" />
      </div>
    </div>
    <div class="logo">
      <span>Sales</span>
    </div>
    <div class="content">
      <div class="left">
        <div class="left-top">
          <div id="dateRangeButton" class="date-range">
            <button class=" buton btn btn-outline-primary">
              16 July 2024 to 17 July 2024
            </button>
            <i class="far fa-calendar-alt"></i>
          </div>

          <!-- Include Flatpickr's Input (hidden for display purposes) -->
          <input type="text" id="flatpickrInput" style="display: none;" />

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
        </div>
        <div class="divider"></div>
        <div class="left-bottom">
          <div class="products">
            <div class="title">Most Popular Products</div>
            <table class="table">
              <thead>
                <tr>
                  <th>No <i class="fa-solid fa-sort"></i></th>
                  <th>Product Name <i class="fa-solid fa-sort"></i></th>
                  <th>Price <i class="fa-solid fa-sort"></i></th>
                  <th>Total QTY <i class="fa-solid fa-sort"></i></th>
                  <th>Total Price <i class="fa-solid fa-sort"></i></th>
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
      </div>
      <div class="right">
        <div class="title">History Transcation</div>
        <div class="right-layout">
          <div class="search" style="height: 35px;">
            <i class="search-icon fas fa-search"></i>
            <input type="text" placeholder="Search" />
          </div>
          <div class="filter" style="margin-left: 8px;">
            <select class="form-select form-select-md mb-3">
              <option value="14">14</option>
              <option value="15">15</option>
              <option value="16">16</option>
            </select>
          </div>

          <div class="actions">
            <button class="btn btn-primary mr-4" @click="handleVerify">Verify</button>
            <button class="btn btn-danger mr-4" @click="handleDelete">Delete</button>
            <button class="btn btn-info mr-4" @click="handleEdit">Edit</button>
            <button class="btn btn-success mr-4" @click="handleAdd">Add</button>
          </div>
        </div>
        <div class="table-container">
          <table class="table">
            <thead>
              <tr>
                <th>No <i class="fa-solid fa-sort"></i></th>
                <th>Transaction Code <i class="fa-solid fa-sort"></i></th>
                <th>Customer <i class="fa-solid fa-sort"></i></th>
                <th>Total Item <i class="fa-solid fa-sort"></i></th>
                <th>Total Price <i class="fa-solid fa-sort"></i></th>
                <th>Action <i class="fa-solid fa-sort"></i></th>
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
          <div class="status">Showing 1 of 10 of 100 entries</div>
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
  methods: {
    handleVerify() {
      this.$swal({
        title: 'Verify',
        html: `
        <div class="verify">
          <div class="right-layout">
            <div class="container text-center">
              <div class="row">
                <div class="col">
                  <table class="table">
                    <thead>
                      <tr>
                      <div style="display:flex;">
                      <div class="title-verify">Transcation Code</div>
                      <div class="search-verify">
                        <input type="text" style="color:black;margin-left: 10px;" placeholder="Scan Transcation Code" />
                        <i class="scan fa-solid fa-expand"></i>
                      </div>
                      </div>
                  <th>No <i class="fa-solid fa-sort"></i></th>
                  <th>Product Code <i class="fa-solid fa-sort"></i></th>
                  <th>Product Name <i class="fa-solid fa-sort"></i></th>
                  <th>Check <i class="fa-solid fa-sort"></i></th>
                </tr>
              </thead>
            </table>
      </div>
    <div class="col">
      <table class="table">
              <thead>
                <tr>
                  <div style="display:flex;">
                      <div class="title-verify">Item Product</div>
                      <div id="Code" class="search-verify">
                        <input type="text" style="color: black;margin-left: 10px;" placeholder="Scan Item Product" />
                        <i class="scan fa-solid fa-expand"></i>
                      </div>
                      </div>
                  <th>No <i class="fa-solid fa-sort"></i></th>
                  <th>Product Code <i class="fa-solid fa-sort"></i></th>
                  <th>Product Name <i class="fa-solid fa-sort"></i></th>
                  <th>Check <i class="fa-solid fa-sort"></i></th>
                </tr>
              </thead>
            </table>
    </div>
    </div>
  </div>
    `,
        showCancelButton: true,
        confirmButtonText: 'Submit',
        focusConfirm: false,
        preConfirm: () => {
          const firstName = document.getElementById('firstName').value;
          const lastName = document.getElementById('lastName').value;
          const email = document.getElementById('email').value;
          const phone = document.getElementById('phone').value;

          if (!firstName || !lastName || !email || !phone) {
            this.$swal.showValidationMessage('Please fill out all fields');
            return false;
          }

          return { firstName, lastName, email, phone };
        }
      }).then((result) => {
        if (result.isConfirmed) {
          const formData = result.value;

          // Process the form data here
          console.log('Form Data:', formData);

          // Example: Sending the data to an API
          // this.verifyUser(formData);

          // Show success message
          this.$swal('Success', 'Your information has been submitted!', 'success');
        }
      });
    }, handleDelete() {
      this.$swal({
        title: 'Delete Confirmation',
        html: `
      <form id="deleteForm">
        <div class="form-group">
          <label for="itemID">Item ID:</label>
          <input type="text" id="itemID" class="swal2-input" placeholder="Enter the item ID to delete" required>
        </div>
        <div class="form-group">
          <label for="reason">Reason for Deletion:</label>
          <textarea id="reason" class="swal2-textarea" placeholder="Enter the reason for deletion" required></textarea>
        </div>
      </form>
    `,
        showCancelButton: true,
        confirmButtonText: 'Delete',
        focusConfirm: false,
        preConfirm: () => {
          const itemID = document.getElementById('itemID').value;
          const reason = document.getElementById('reason').value;

          if (!itemID || !reason) {
            this.$swal.showValidationMessage('Please fill out all fields');
            return false;
          }

          return { itemID, reason };
        }
      }).then((result) => {
        if (result.isConfirmed) {
          const formData = result.value;

          // Process the form data here
          console.log('Form Data:', formData);

          // Example: Sending the data to an API or executing the delete action
          // this.deleteItem(formData);

          // Show success message
          this.$swal('Deleted!', 'The item has been deleted.', 'success');
        }
      });
    }, handleEdit() {
      // Initialize SweetAlert2 with a split form
      this.$swal.fire({
        title: 'Edit Transaction',
        html: `
      <div id="editForm">
        <div id="step1">
          <h4>Step 1: Transaction Details</h4>
          <div class="form-group">
            <label for="transactionID">Transaction ID:</label>
            <input type="text" id="transactionID" class="swal2-input" placeholder="Enter transaction ID" required>
          </div>
          <div class="form-group">
            <label for="date">Date:</label>
            <input type="date" id="date" class="swal2-input" required>
          </div>
        </div>
        <div id="step2" style="display: none;">
          <h4>Step 2: Edit Details</h4>
          <div class="form-group">
            <label for="itemName">Item Name:</label>
            <input type="text" id="itemName" class="swal2-input" placeholder="Enter item name" required>
          </div>
          <div class="form-group">
            <label for="quantity">Quantity:</label>
            <input type="number" id="quantity" class="swal2-input" placeholder="Enter quantity" required>
          </div>
          <div class="form-group">
            <label for="price">Price:</label>
            <input type="number" id="price" class="swal2-input" placeholder="Enter price" required>
          </div>
        </div>
      </div>
    `,
        showCancelButton: true,
        confirmButtonText: 'Next',
        cancelButtonText: 'Cancel',
        focusConfirm: false,
        preConfirm: () => {
          const step1 = document.getElementById('step1');
          const step2 = document.getElementById('step2');
          const isStep1Visible = step1.style.display !== 'none';

          if (isStep1Visible) {
            // Validate Step 1
            const transactionID = document.getElementById('transactionID').value;
            const date = document.getElementById('date').value;

            if (!transactionID || !date) {
              this.$swal.showValidationMessage('Please fill out all fields in Step 1');
              return false;
            }

            // Move to Step 2
            step1.style.display = 'none';
            step2.style.display = 'block';
            this.$swal.getPopup().querySelector('.swal2-confirm').textContent = 'Submit';
            return false; // Prevent automatic confirmation
          } else {
            // Validate Step 2
            const itemName = document.getElementById('itemName').value;
            const quantity = document.getElementById('quantity').value;
            const price = document.getElementById('price').value;

            if (!itemName || !quantity || !price) {
              this.$swal.showValidationMessage('Please fill out all fields in Step 2');
              return false;
            }

            return { transactionID: document.getElementById('transactionID').value, date: document.getElementById('date').value, itemName, quantity, price };
          }
        }
      }).then((result) => {
        if (result.isConfirmed) {
          d
          const formData = result.value;

          // Process the form data here
          console.log('Form Data:', formData);

          // Example: Sending the data to an API or executing the edit action
          // this.editTransaction(formData);

          // Show success message
          this.$swal('Edited!', 'The transaction has been updated.', 'success');
        }
      });
    }, handleAdd() {
      this.$swal({
        title: 'Add Product',
        html: `
        <form id="addForm">
          <div class="addForm">
              <div class="form-group">
                  <label for="itemID">Transaction Code:</label>
                  <input type="text" id="itemID" class="swal2-input" placeholder="Enter the item ID to delete" required>
              </div>
              <label for="date">Transaction Date:</label>
              <input type="date" id="date" class="swal2-input" required>
              <div class="form-group">
                  <label for="itemID">Customer:</label>
                  <input type="text" id="itemID" class="swal2-input" placeholder="Enter the item ID to delete" required>
              </div>
              <div class="form-group">
                  <label for="itemID">Product:</label>
                  <input type="text" id="itemID" class="swal2-input" placeholder="Enter the item ID to delete" required>
              </div>
          </div>
      </form>

<div class="container text-center">
    <div class="row">
        <div class="col">
            <table class="table">
                <thead>
                    <tr>
                        <th>No <i class="fa-solid fa-sort"></i></th>
                        <th>Product Code <i class="fa-solid fa-sort"></i></th>
                        <th>Product Name <i class="fa-solid fa-sort"></i></th>
                        <th>QTY <i class="fa-solid fa-sort"></i></th>
                        <th>Subtotal <i class="fa-solid fa-sort"></i></th>
                        <th>Action <i class="fa-solid fa-sort"></i></th>
                    </tr>
                </thead>
            </table>
        </div>
    </div>
</div>
    `,
        showCancelButton: true,
        confirmButtonText: 'Submit',
        focusConfirm: false,
        preConfirm: () => {
          const firstName = document.getElementById('firstName').value;
          const lastName = document.getElementById('lastName').value;
          const email = document.getElementById('email').value;
          const phone = document.getElementById('phone').value;

          if (!firstName || !lastName || !email || !phone) {
            this.$swal.showValidationMessage('Please fill out all fields');
            return false;
          }

          return { firstName, lastName, email, phone };
        }
      }).then((result) => {
        if (result.isConfirmed) {
          const formData = result.value;

          // Process the form data here
          console.log('Form Data:', formData);

          // Example: Sending the data to an API
          // this.verifyUser(formData);

          // Show success message
          this.$swal('Success', 'Your information has been submitted!', 'success');
        }
      });
    }
  },
};
document.addEventListener('DOMContentLoaded', function () {
  const dateRangeButton = document.getElementById('dateRangeButton');
  const flatpickrInput = document.getElementById('flatpickrInput');

  const flatpickrInstance = flatpickr(flatpickrInput, {
    mode: 'range',
    defaultDate: ['2024-07-16', '2024-07-17'], // Set default dates
    onClose: function (selectedDates, dateStr, instance) {
      if (selectedDates.length === 2) {
        const startDate = selectedDates[0];
        const endDate = selectedDates[1];
        const formattedStart = startDate.toLocaleDateString('en-GB', {
          day: '2-digit',
          month: 'short',
          year: 'numeric'
        });
        const formattedEnd = endDate.toLocaleDateString('en-GB', {
          day: '2-digit',
          month: 'short',
          year: 'numeric'
        });
        dateRangeButton.innerHTML = `${formattedStart} to ${formattedEnd} <i class="far fa-calendar-alt"></i>`; boo
      }
    }
  });

  dateRangeButton.addEventListener('click', function () {
    flatpickrInstance.open();
  });
});

</script>