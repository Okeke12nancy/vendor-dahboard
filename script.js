/**
 * Food Vendor Dashboard JavaScript
 * This file contains all the JavaScript functionality for the food vendor dashboard
 */

// Mock data for the dashboard
const mockData = {
  products: [
      { id: 'P001', name: 'Vegetable Salad', category: 'Appetizers', price: 12.99, stock: 45, image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80', description: 'Fresh garden vegetables with our special dressing.' },
      { id: 'P002', name: 'Margherita Pizza', category: 'Main Course', price: 14.99, stock: 32, image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80', description: 'Classic pizza with tomato, mozzarella, and basil.' },
      { id: 'P003', name: 'Classic Burger', category: 'Main Course', price: 9.99, stock: 28, image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80', description: 'Juicy beef patty with lettuce, tomato, and our special sauce.' },
      { id: 'P004', name: 'Creamy Pasta', category: 'Main Course', price: 11.99, stock: 40, image: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80', description: 'Fettuccine pasta with creamy alfredo sauce.' },
      { id: 'P005', name: 'Chocolate Cake', category: 'Desserts', price: 8.99, stock: 15, image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80', description: 'Rich chocolate cake with a molten center.' },
      { id: 'P006', name: 'Fresh Smoothie', category: 'Beverages', price: 6.99, stock: 0, image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80', description: 'Blend of seasonal fruits with yogurt.' }
  ],
  orders: [
      { 
          id: 'ORD-7895', 
          date: 'May 15, 2023', 
          time: '2:30 PM',
          customer: {
              name: 'John Doe',
              email: 'john.doe@example.com',
              address: '123 Main St, Anytown, USA 12345',
              image: 'https://randomuser.me/api/portraits/men/32.jpg'
          },
          items: [
              { name: 'Vegetable Salad', quantity: 2, price: 12.99 },
              { name: 'Classic Burger', quantity: 1, price: 9.99 },
              { name: 'Fresh Smoothie', quantity: 2, price: 6.99 }
          ],
          total: 42.50,
          status: 'Delivered',
          paymentMethod: 'Credit Card',
          paymentStatus: 'Paid'
      },
      { 
          id: 'ORD-7894', 
          date: 'May 15, 2023', 
          time: '1:15 PM',
          customer: {
              name: 'Emma Wilson',
              email: 'emma.w@example.com',
              address: '456 Oak Ave, Somewhere, USA 67890',
              image: 'https://randomuser.me/api/portraits/women/32.jpg'
          },
          items: [
              { name: 'Margherita Pizza', quantity: 1, price: 14.99 },
              { name: 'Creamy Pasta', quantity: 1, price: 11.99 }
          ],
          total: 28.75,
          status: 'Processing',
          paymentMethod: 'Mobile Payment',
          paymentStatus: 'Pending'
      },
      { 
          id: 'ORD-7893', 
          date: 'May 14, 2023', 
          time: '7:45 PM',
          customer: {
              name: 'Michael Brown',
              email: 'm.brown@example.com',
              address: '789 Pine St, Elsewhere, USA 54321',
              image: 'https://randomuser.me/api/portraits/men/42.jpg'
          },
          items: [
              { name: 'Classic Burger', quantity: 2, price: 9.99 },
              { name: 'Fresh Smoothie', quantity: 2, price: 6.99 },
              { name: 'Chocolate Cake', quantity: 1, price: 8.99 }
          ],
          total: 35.20,
          status: 'Delivered',
          paymentMethod: 'Credit Card',
          paymentStatus: 'Paid'
      },
      { 
          id: 'ORD-7892', 
          date: 'May 14, 2023', 
          time: '5:20 PM',
          customer: {
              name: 'Sophia Garcia',
              email: 's.garcia@example.com',
              address: '321 Maple Rd, Anytown, USA 12345',
              image: 'https://randomuser.me/api/portraits/women/42.jpg'
          },
          items: [
              { name: 'Vegetable Salad', quantity: 1, price: 12.99 },
              { name: 'Margherita Pizza', quantity: 2, price: 14.99 },
              { name: 'Chocolate Cake', quantity: 1, price: 8.99 }
          ],
          total: 52.99,
          status: 'Cancelled',
          paymentMethod: 'Cash on Delivery',
          paymentStatus: 'Refunded'
      },
      { 
          id: 'ORD-7891', 
          date: 'May 13, 2023', 
          time: '1:30 PM',
          customer: {
              name: 'David Lee',
              email: 'd.lee@example.com',
              address: '654 Birch St, Somewhere, USA 67890',
              image: 'https://randomuser.me/api/portraits/men/22.jpg'
          },
          items: [
              { name: 'Creamy Pasta', quantity: 1, price: 11.99 },
              { name: 'Fresh Smoothie', quantity: 1, price: 6.99 }
          ],
          total: 18.50,
          status: 'Delivered',
          paymentMethod: 'Credit Card',
          paymentStatus: 'Paid'
      }
  ]
};

// Wait for the DOM to be fully loaded before executing code
document.addEventListener('DOMContentLoaded', function() {
  // Initialize Feather Icons
  if (typeof feather !== 'undefined') {
      feather.replace();
  }

  // Initialize all components
  initNavigation();
  initSettingsNavigation();
  initProductModal();
  initProductForm();
  initCharts();
  initInvoiceSystem();
  initSearchAndFilters();
  initPagination();
  initProductActions();
  initOrderStatusUpdates();
});


// ===== NAVIGATION FUNCTIONALITY =====

function initNavigation() {
  const navLinks = document.querySelectorAll('.nav a');
  const sections = document.querySelectorAll('.dashboard-section');
  
  navLinks.forEach(link => {
      link.addEventListener('click', function(e) {
          e.preventDefault();
          
          // Remove active class from all links and sections
          navLinks.forEach(link => {
              link.parentElement.classList.remove('active');
          });
          
          sections.forEach(section => {
              section.classList.remove('active');
          });
          
          // Add active class to clicked link
          this.parentElement.classList.add('active');
          
          // Show corresponding section
          const targetId = this.getAttribute('href').substring(1);
          const targetSection = document.getElementById(targetId);
          
          if (targetSection) {
              targetSection.classList.add('active');
          }
      });
  });
}


// ===== SETTINGS NAVIGATION =====

function initSettingsNavigation() {
  const settingsLinks = document.querySelectorAll('.settings-nav a');
  const settingsPanels = document.querySelectorAll('.settings-panel');
  
  settingsLinks.forEach(link => {
      link.addEventListener('click', function(e) {
          e.preventDefault();
          
          // Remove active class from all links and panels
          settingsLinks.forEach(link => {
              link.parentElement.classList.remove('active');
          });
          
          settingsPanels.forEach(panel => {
              panel.classList.remove('active');
          });
          
          // Add active class to clicked link
          this.parentElement.classList.add('active');
          
          // Show corresponding panel
          const targetId = this.getAttribute('href').substring(1);
          const targetPanel = document.getElementById(targetId);
          
          if (targetPanel) {
              targetPanel.classList.add('active');
          }
      });
  });
}


// ===== SEARCH AND FILTER FUNCTIONALITY =====

function initSearchAndFilters() {
  // Product search
  const productSearchInput = document.querySelector('#products .search-filter input');
  if (productSearchInput) {
      productSearchInput.addEventListener('input', function() {
          filterProducts();
      });
  }
  
  // Product category filter
  const productCategorySelect = document.querySelector('#products .filter-options select:first-child');
  if (productCategorySelect) {
      productCategorySelect.addEventListener('change', function() {
          filterProducts();
      });
  }
  
  // Product sort
  const productSortSelect = document.querySelector('#products .filter-options select:last-child');
  if (productSortSelect) {
      productSortSelect.addEventListener('change', function() {
          filterProducts();
      });
  }
  
  // Order search
  const orderSearchInput = document.querySelector('#orders .search-filter input');
  if (orderSearchInput) {
      orderSearchInput.addEventListener('input', function() {
          filterOrders();
      });
  }
  
  // Order status filter
  const orderStatusSelect = document.querySelector('#orders .filter-options select:first-child');
  if (orderStatusSelect) {
      orderStatusSelect.addEventListener('change', function() {
          filterOrders();
      });
  }
  
  // Order date filter
  const orderDateSelect = document.querySelector('#orders .filter-options select:last-child');
  if (orderDateSelect) {
      orderDateSelect.addEventListener('change', function() {
          filterOrders();
      });
  }
}

// Filter products based on search and filter criteria
function filterProducts() {
  const searchInput = document.querySelector('#products .search-filter input').value.toLowerCase();
  const categoryFilter = document.querySelector('#products .filter-options select:first-child').value;
  const sortOption = document.querySelector('#products .filter-options select:last-child').value;
  
  // Clone the products array to avoid modifying the original
  let filteredProducts = [...mockData.products];
  
  // Apply category filter
  if (categoryFilter !== 'All Categories') {
      filteredProducts = filteredProducts.filter(product => product.category === categoryFilter);
  }
  
  // Apply search filter
  if (searchInput) {
      filteredProducts = filteredProducts.filter(product => 
          product.name.toLowerCase().includes(searchInput) || 
          product.description.toLowerCase().includes(searchInput)
      );
  }
  
  // Apply sorting
  switch (sortOption) {
      case 'Price: Low to High':
          filteredProducts.sort((a, b) => a.price - b.price);
          break;
      case 'Price: High to Low':
          filteredProducts.sort((a, b) => b.price - a.price);
          break;
      case 'Popularity':
          // For demo purposes, we'll just use a random sort
          filteredProducts.sort(() => Math.random() - 0.5);
          break;
      default: // Newest
          // For demo purposes, we'll just use the default order
          break;
  }
  
  // Update the products grid
  renderProducts(filteredProducts);
}

// Render products to the grid
function renderProducts(products) {
  const productsGrid = document.querySelector('.products-grid');
  
  if (!productsGrid) return;
  
  // Clear existing products
  productsGrid.innerHTML = '';
  
  if (products.length === 0) {
      productsGrid.innerHTML = '<div class="no-results">No products found</div>';
      return;
  }
  
  // Add products to the grid
  products.forEach(product => {
      const stockClass = product.stock > 20 ? 'in-stock' : (product.stock > 0 ? 'low-stock' : 'out-of-stock');
      const stockText = product.stock > 0 ? (product.stock > 20 ? 'In Stock' : 'Low Stock') : 'Out of Stock';
      
      const productCard = document.createElement('div');
      productCard.className = 'product-card';
      productCard.dataset.productId = product.id;
      
      productCard.innerHTML = `
          <div class="product-image">
              <img src="${product.image}" alt="${product.name}">
              <div class="product-actions">
                  <button class="edit-btn" onclick="handleProductAction('${product.id}', 'edit')"><i data-feather="edit"></i></button>
                  <button class="delete-btn" onclick="handleProductAction('${product.id}', 'delete')"><i data-feather="trash-2"></i></button>
              </div>
          </div>
          <div class="product-info">
              <h3>${product.name}</h3>
              <p class="product-category">${product.category}</p>
              <div class="product-meta">
                  <p class="product-price">${formatCurrency(product.price)}</p>
                  <p class="product-stock ${stockClass}">${stockText}</p>
              </div>
          </div>
      `;
      
      productsGrid.appendChild(productCard);
  });
  
  // Re-initialize Feather Icons for the new buttons
  if (typeof feather !== 'undefined') {
      feather.replace();
  }
}

// Filter orders based on search and filter criteria
function filterOrders() {
  const searchInput = document.querySelector('#orders .search-filter input').value.toLowerCase();
  const statusFilter = document.querySelector('#orders .filter-options select:first-child').value;
  const dateFilter = document.querySelector('#orders .filter-options select:last-child').value;
  
  // Clone the orders array to avoid modifying the original
  let filteredOrders = [...mockData.orders];
  
  // Apply status filter
  if (statusFilter !== 'All Status') {
      filteredOrders = filteredOrders.filter(order => order.status === statusFilter);
  }
  
  // Apply date filter (simplified for demo)
  if (dateFilter !== 'Last 30 Days') {
      // In a real app, you would apply actual date filtering
      // For this demo, we'll just reduce the number of results
      filteredOrders = filteredOrders.slice(0, 3);
  }
  
  // Apply search filter
  if (searchInput) {
      filteredOrders = filteredOrders.filter(order => 
          order.id.toLowerCase().includes(searchInput) || 
          order.customer.name.toLowerCase().includes(searchInput) ||
          order.customer.email.toLowerCase().includes(searchInput)
      );
  }
  
  // Update the orders table
  renderOrders(filteredOrders);
}

// Render orders to the table
function renderOrders(orders) {
  const ordersTable = document.querySelector('#orders .orders-table tbody');
  
  if (!ordersTable) return;
  
  // Clear existing orders
  ordersTable.innerHTML = '';
  
  if (orders.length === 0) {
      const emptyRow = document.createElement('tr');
      emptyRow.innerHTML = '<td colspan="7" class="no-results">No orders found</td>';
      ordersTable.appendChild(emptyRow);
      return;
  }
  
  // Add orders to the table
  orders.forEach(order => {
      const orderRow = document.createElement('tr');
      
      orderRow.innerHTML = `
          <td>${order.id}</td>
          <td>
              <div class="customer-info">
                  <img src="${order.customer.image}" alt="Customer">
                  <div>
                      <span>${order.customer.name}</span>
                      <small>${order.customer.email}</small>
                  </div>
              </div>
          </td>
          <td>${order.date}<br><small>${order.time}</small></td>
          <td>${order.items.length} items</td>
          <td>${formatCurrency(order.total)}</td>
          <td>
              <select class="status-select" data-order-id="${order.id}">
                  <option value="Processing" ${order.status === 'Processing' ? 'selected' : ''}>Processing</option>
                  <option value="Delivered" ${order.status === 'Delivered' ? 'selected' : ''}>Delivered</option>
                  <option value="Cancelled" ${order.status === 'Cancelled' ? 'selected' : ''}>Cancelled</option>
              </select>
          </td>
          <td>
              <div class="action-buttons">
                  <button class="view-btn"><i data-feather="eye"></i></button>
                  <button class="invoice-btn" data-order-id="${order.id}"><i data-feather="file-text"></i></button>
              </div>
          </td>
      `;
      
      ordersTable.appendChild(orderRow);
  });
  
  // Re-initialize Feather Icons for the new buttons
  if (typeof feather !== 'undefined') {
      feather.replace();
  }
  
  // Add event listeners to the status selects
  initOrderStatusUpdates();
  
  // Re-initialize invoice buttons
  initInvoiceSystem();
}


// ===== PAGINATION FUNCTIONALITY =====

function initPagination() {
  const paginationButtons = document.querySelectorAll('.pagination-btn');
  
  paginationButtons.forEach(button => {
      button.addEventListener('click', function() {
          // Remove active class from all buttons
          paginationButtons.forEach(btn => btn.classList.remove('active'));
          
          // Add active class to clicked button
          this.classList.add('active');
          
          // In a real app, you would fetch data for the selected page
          // For this demo, we'll just show a notification
          showNotification(`Page ${this.textContent} selected`, 'info');
      });
  });
}


// ===== PRODUCT ACTIONS =====

function initProductActions() {
  // Initial render of products
  renderProducts(mockData.products);
  
  // Initial render of orders
  renderOrders(mockData.orders);
}

// Handle product actions (edit, delete)
function handleProductAction(productId, action) {
  if (action === 'edit') {
      // Find the product
      const product = mockData.products.find(p => p.id === productId);
      
      if (!product) {
          showNotification('Product not found', 'error');
          return;
      }
      
      // Populate the form
      document.getElementById('productName').value = product.name;
      document.getElementById('productCategory').value = product.category;
      document.getElementById('productPrice').value = product.price;
      document.getElementById('productStock').value = product.stock;
      document.getElementById('productDescription').value = product.description;
      
      // Show the modal
      const addProductModal = document.getElementById('addProductModal');
      if (addProductModal) {
          // Change modal title
          const modalTitle = addProductModal.querySelector('.modal-header h2');
          if (modalTitle) {
              modalTitle.textContent = 'Edit Product';
          }
          
          // Change submit button text
          const submitButton = addProductModal.querySelector('button[type="submit"]');
          if (submitButton) {
              submitButton.textContent = 'Update Product';
          }
          
          // Add product ID to the form
          const addProductForm = document.getElementById('addProductForm');
          if (addProductForm) {
              addProductForm.dataset.productId = productId;
          }
          
          addProductModal.style.display = 'flex';
      }
  } else if (action === 'delete') {
      // Confirm deletion
      if (confirm('Are you sure you want to delete this product?')) {
          // In a real app, you would send a request to delete the product
          // For this demo, we'll just remove it from the mock data
          const productIndex = mockData.products.findIndex(p => p.id === productId);
          
          if (productIndex !== -1) {
              mockData.products.splice(productIndex, 1);
              
              // Re-render products
              renderProducts(mockData.products);
              
              showNotification('Product deleted successfully', 'success');
          } else {
              showNotification('Product not found', 'error');
          }
      }
  }
}


// ===== ORDER STATUS UPDATES =====

function initOrderStatusUpdates() {
  const statusSelects = document.querySelectorAll('.status-select');
  
  statusSelects.forEach(select => {
      select.addEventListener('change', function() {
          const orderId = this.dataset.orderId;
          const newStatus = this.value;
          
          // Update the order status in the mock data
          const order = mockData.orders.find(o => o.id === orderId);
          
          if (order) {
              order.status = newStatus;
              
              // Update the status badge class
              const statusBadge = this.parentElement;
              statusBadge.className = '';
              statusBadge.classList.add('status-badge', newStatus.toLowerCase());
              
              showNotification(`Order ${orderId} status updated to ${newStatus}`, 'success');
          }
      });
  });
}


// ===== PRODUCT MODAL FUNCTIONALITY =====

function initProductModal() {
  const addProductBtn = document.getElementById('addProductBtn');
  const addProductModal = document.getElementById('addProductModal');
  const closeModal = document.querySelector('.close-modal');
  const cancelBtn = document.querySelector('.cancel-btn');
  
  // Open modal when Add Product button is clicked
  if (addProductBtn && addProductModal) {
      addProductBtn.addEventListener('click', function() {
          // Reset form
          const addProductForm = document.getElementById('addProductForm');
          if (addProductForm) {
              addProductForm.reset();
              delete addProductForm.dataset.productId;
          }
          
          // Reset image preview
          const imagePreview = document.getElementById('imagePreview');
          if (imagePreview) {
              imagePreview.innerHTML = '';
          }
          
          // Reset modal title
          const modalTitle = addProductModal.querySelector('.modal-header h2');
          if (modalTitle) {
              modalTitle.textContent = 'Add New Product';
          }
          
          // Reset submit button text
          const submitButton = addProductModal.querySelector('button[type="submit"]');
          if (submitButton) {
              submitButton.textContent = 'Add Product';
          }
          
          addProductModal.style.display = 'flex';
      });
  }
  
  // Close modal when close button is clicked
  if (closeModal && addProductModal) {
      closeModal.addEventListener('click', function() {
          addProductModal.style.display = 'none';
      });
  }
  
  // Close modal when cancel button is clicked
  if (cancelBtn && addProductModal) {
      cancelBtn.addEventListener('click', function() {
          addProductModal.style.display = 'none';
      });
  }
  
  // Close modal when clicking outside
  if (addProductModal) {
      window.addEventListener('click', function(e) {
          if (e.target === addProductModal) {
              addProductModal.style.display = 'none';
          }
      });
  }
}


// ===== PRODUCT FORM FUNCTIONALITY =====

function initProductForm() {
  const productImage = document.getElementById('productImage');
  const imagePreview = document.getElementById('imagePreview');
  const addProductForm = document.getElementById('addProductForm');
  const addProductModal = document.getElementById('addProductModal');
  
  // Handle image preview
  if (productImage && imagePreview) {
      productImage.addEventListener('change', function() {
          const file = this.files[0];
          
          if (file) {
              const reader = new FileReader();
              
              reader.onload = function(e) {
                  imagePreview.innerHTML = `<img src="${e.target.result}" alt="Preview">`;
              };
              
              reader.readAsDataURL(file);
          }
      });
  }
  
  // Handle form submission
  if (addProductForm && addProductModal) {
      addProductForm.addEventListener('submit', function(e) {
          e.preventDefault();
          
          // Validate form
          if (!validateProductForm()) {
              return;
          }
          
          // Get form values
          const name = document.getElementById('productName').value;
          const category = document.getElementById('productCategory').value;
          const price = parseFloat(document.getElementById('productPrice').value);
          const stock = parseInt(document.getElementById('productStock').value);
          const description = document.getElementById('productDescription').value;
          
          // Check if we're editing or adding a new product
          const productId = this.dataset.productId;
          
          if (productId) {
              // Update existing product
              const productIndex = mockData.products.findIndex(p => p.id === productId);
              
              if (productIndex !== -1) {
                  mockData.products[productIndex] = {
                      ...mockData.products[productIndex],
                      name,
                      category,
                      price,
                      stock,
                      description
                  };
                  
                  showNotification('Product updated successfully', 'success');
              }
          } else {
              // Add new product
              const newProduct = {
                  id: 'P' + (Math.floor(Math.random() * 1000) + 1).toString().padStart(3, '0'),
                  name,
                  category,
                  price,
                  stock,
                  description,
                  image: '/placeholder.svg?height=500&width=500' // Default image
              };
              
              // If an image was uploaded, use it
              const imageFile = document.getElementById('productImage').files[0];
              if (imageFile) {
                  const reader = new FileReader();
                  reader.onload = function(e) {
                      newProduct.image = e.target.result;
                      mockData.products.push(newProduct);
                      renderProducts(mockData.products);
                  };
                  reader.readAsDataURL(imageFile);
              } else {
                  mockData.products.push(newProduct);
              }
              
              showNotification('Product added successfully', 'success');
          }
          
          // Close modal and reset form
          addProductModal.style.display = 'none';
          addProductForm.reset();
          
          if (imagePreview) {
              imagePreview.innerHTML = '';
          }
          
          // Re-render products
          renderProducts(mockData.products);
      });
  }
}

// Validate product form
function validateProductForm() {
  const name = document.getElementById('productName').value;
  const category = document.getElementById('productCategory').value;
  const price = document.getElementById('productPrice').value;
  const stock = document.getElementById('productStock').value;
  
  if (!name) {
      showNotification('Please enter a product name', 'error');
      return false;
  }
  
  if (!category) {
      showNotification('Please select a category', 'error');
      return false;
  }
  
  if (!price || isNaN(parseFloat(price)) || parseFloat(price) <= 0) {
      showNotification('Please enter a valid price', 'error');
      return false;
  }
  
  if (!stock || isNaN(parseInt(stock)) || parseInt(stock) < 0) {
      showNotification('Please enter a valid stock quantity', 'error');
      return false;
  }
  
  return true;
}


// ===== INVOICE SYSTEM =====

function initInvoiceSystem() {
  // Add click event listeners to all invoice buttons
  const invoiceButtons = document.querySelectorAll('.invoice-btn');
  
  invoiceButtons.forEach(button => {
      button.addEventListener('click', function(e) {
          e.preventDefault();
          
          // Get order ID from data attribute
          const orderId = this.getAttribute('data-order-id');
          
          // Generate and show invoice
          generateInvoice(orderId);
      });
  });
  
  // Add event listener to close invoice modal
  const closeInvoiceModal = document.querySelector('#invoiceModal .close-modal');
  const invoiceModal = document.getElementById('invoiceModal');
  
  if (closeInvoiceModal && invoiceModal) {
      closeInvoiceModal.addEventListener('click', function() {
          invoiceModal.style.display = 'none';
      });
  }
  
  // Close invoice modal when clicking outside
  if (invoiceModal) {
      window.addEventListener('click', function(e) {
          if (e.target === invoiceModal) {
              invoiceModal.style.display = 'none';
          }
      });
  }
  
  // Add event listener to download invoice button
  const downloadInvoiceBtn = document.getElementById('downloadInvoiceBtn');
  
  if (downloadInvoiceBtn) {
      downloadInvoiceBtn.addEventListener('click', function() {
          downloadInvoice();
      });
  }
}


// Generate invoice for a specific order
function generateInvoice(orderId) {
  // Find the order in our mock data
  const orderData = mockData.orders.find(order => order.id === orderId);
  
  if (!orderData) {
      showNotification('Order not found', 'error');
      return;
  }
  
  // Populate invoice template with order data
  populateInvoiceTemplate(orderData);
  
  // Show invoice modal
  const invoiceModal = document.getElementById('invoiceModal');
  
  if (invoiceModal) {
      invoiceModal.style.display = 'flex';
  }
}


// Populate invoice template with order data
function populateInvoiceTemplate(orderData) {
  const invoiceContent = document.getElementById('invoiceContent');
  
  if (!invoiceContent) return;
  
  // Format the date
  const orderDate = new Date(orderData.date);
  const formattedDate = orderDate.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
  });
  
  // Calculate totals
  const subtotal = orderData.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const taxRate = 0.08; // 8% tax
  const tax = subtotal * taxRate;
  const total = subtotal + tax;
  
  // Generate items HTML
  const itemsHtml = orderData.items.map(item => `
      <tr>
          <td>${item.name}</td>
          <td>${item.quantity}</td>
          <td>${formatCurrency(item.price)}</td>
          <td>${formatCurrency(item.price * item.quantity)}</td>
      </tr>
  `).join('');
  
  // Update invoice template
  invoiceContent.innerHTML = `
      <div class="invoice-header">
          <div class="vendor-info">
              <h2>Sarah's Kitchen</h2>
              <p>123 Food Street, Culinary City</p>
              <p>Phone: (555) 123-4567</p>
              <p>Email: sarah@sarahskitchen.com</p>
          </div>
          <div class="invoice-info">
              <h1>INVOICE</h1>
              <table>
                  <tr>
                      <td><strong>Invoice #:</strong></td>
                      <td>INV-${orderData.id}</td>
                  </tr>
                  <tr>
                      <td><strong>Order #:</strong></td>
                      <td>${orderData.id}</td>
                  </tr>
                  <tr>
                      <td><strong>Date:</strong></td>
                      <td>${formattedDate}</td>
                  </tr>
              </table>
          </div>
      </div>
      
      <div class="invoice-customer">
          <h3>Bill To:</h3>
          <p><strong>${orderData.customer.name}</strong></p>
          <p>${orderData.customer.email}</p>
          <p>${orderData.customer.address}</p>
      </div>
      
      <div class="invoice-items">
          <table>
              <thead>
                  <tr>
                      <th>Item</th>
                      <th>Quantity</th>
                      <th>Price</th>
                      <th>Amount</th>
                  </tr>
              </thead>
              <tbody>
                  ${itemsHtml}
              </tbody>
              <tfoot>
                  <tr>
                      <td colspan="3" class="text-right"><strong>Subtotal:</strong></td>
                      <td>${formatCurrency(subtotal)}</td>
                  </tr>
                  <tr>
                      <td colspan="3" class="text-right"><strong>Tax (8%):</strong></td>
                      <td>${formatCurrency(tax)}</td>
                  </tr>
                  <tr>
                      <td colspan="3" class="text-right"><strong>Total:</strong></td>
                      <td class="total-amount">${formatCurrency(total)}</td>
                  </tr>
              </tfoot>
          </table>
      </div>
      
      <div class="invoice-footer">
          <p><strong>Payment Method:</strong> ${orderData.paymentMethod}</p>
          <p><strong>Payment Status:</strong> ${orderData.paymentStatus}</p>
          <p class="thank-you">Thank you for your business!</p>
      </div>
  `;
}


// Download invoice as PDF
function downloadInvoice() {
  const invoiceContent = document.getElementById('invoiceContent');
  
  if (!invoiceContent) return;
  
  // Show loading state
  const downloadBtn = document.getElementById('downloadInvoiceBtn');
  if (downloadBtn) {
      downloadBtn.textContent = 'Generating PDF...';
      downloadBtn.disabled = true;
  }
  
  // Use html2pdf library to generate PDF
  const opt = {
      margin: 10,
      filename: 'invoice.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
  };
  
  // Generate PDF
  if (typeof html2pdf !== 'undefined') {
      html2pdf().from(invoiceContent).set(opt).save().then(() => {
          // Reset button state
          if (downloadBtn) {
              downloadBtn.textContent = 'Download Invoice';
              downloadBtn.disabled = false;
          }
          
          showNotification('Invoice downloaded successfully', 'success');

          function showNotification(message, type) {
            alert(`${type.toUpperCase()}: ${message}`);
          }
          
      });
  } else {
      console.error('html2pdf library not loaded');
      showNotification('PDF generation library not loaded. Please try again later.', 'error');
      
      // Reset button state
      if (downloadBtn) {
          downloadBtn.textContent = 'Download Invoice';
          downloadBtn.disabled = false;
      }
  }
}


// ===== CHART INITIALIZATION =====

function initCharts() {
  // Only initialize charts if Chart.js is loaded
  if (typeof Chart === 'undefined') {
      console.warn('Chart.js is not loaded');
      return;
  }
  
  // Initialize all charts
  initRevenueChart();
  initRevenueChart2();
  initPaymentMethodsChart();
}


// Revenue Chart for Dashboard
function initRevenueChart() {
  const revenueCtx = document.getElementById('revenueChart');
  
  if (!revenueCtx) {
      return;
  }
  
  new Chart(revenueCtx, {
      type: 'line',
      data: {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
          datasets: [{
              label: 'Revenue',
              data: [1200, 1900, 1500, 2500, 2200, 3000],
              borderColor: '#4CAF50',
              backgroundColor: 'rgba(76, 175, 80, 0.1)',
              tension: 0.4,
              fill: true
          }]
      },
      options: {
          responsive: true,
          plugins: {
              legend: {
                  display: false
              }
          },
          scales: {
              y: {
                  beginAtZero: true,
                  grid: {
                      display: true,
                      color: 'rgba(0, 0, 0, 0.05)'
                  }
              },
              x: {
                  grid: {
                      display: false
                  }
              }
          }
      }
  });
}


// Revenue Chart for Payments section
function initRevenueChart2() {
  const revenueCtx2 = document.getElementById('revenueChart2');
  
  if (!revenueCtx2) {
      return;
  }
  
  new Chart(revenueCtx2, {
      type: 'bar',
      data: {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
          datasets: [{
              label: 'Revenue',
              data: [1200, 1900, 1500, 2500, 2200, 3000],
              backgroundColor: '#4CAF50'
          }]
      },
      options: {
          responsive: true,
          plugins: {
              legend: {
                  display: false
              }
          },
          scales: {
              y: {
                  beginAtZero: true,
                  grid: {
                      display: true,
                      color: 'rgba(0, 0, 0, 0.05)'
                  }
              },
              x: {
                  grid: {
                      display: false
                  }
              }
          }
      }
  });
}


// Payment Methods Chart
function initPaymentMethodsChart() {
  const paymentMethodsCtx = document.getElementById('paymentMethodsChart');
  
  if (!paymentMethodsCtx) {
      return;
  }
  
  new Chart(paymentMethodsCtx, {
      type: 'doughnut',
      data: {
          labels: ['Credit Card', 'Cash on Delivery', 'Mobile Payment', 'Bank Transfer'],
          datasets: [{
              data: [55, 20, 15, 10],
              backgroundColor: [
                  '#4CAF50',
                  '#FF9800',
                  '#2196F3',
                  '#9C27B0'
              ]
          }]
      },
      options: {
          responsive: true,
          plugins: {
              legend: {
                  position: 'bottom'
              }
          },
          cutout: '70%'
      }
  });
}


// ===== UTILITY FUNCTIONS =====

// Show notification
function showNotification(message, type = 'info') {
  // Create notification element
  const notification = document.createElement('div');
  notification.className = `notification ${type}`;
  
  // Add icon based on type
  let icon = 'info';
  switch (type) {
      case 'success':
          icon = 'check-circle';
          break;
      case 'error':
          icon = 'alert-circle';
          break;
      case 'warning':
          icon = 'alert-triangle';
          break;
  }
  
  notification.innerHTML = `
      <i data-feather="${icon}"></i>
      <p>${message}</p>
  `;
  
  // Add to the DOM
  const notificationsContainer = document.querySelector('.notifications-container');
  
  if (!notificationsContainer) {
      // Create container if it doesn't exist
      const container = document.createElement('div');
      container.className = 'notifications-container';
      document.body.appendChild(container);
      container.appendChild(notification);
  } else {
      notificationsContainer.appendChild(notification);
  }
  
  // Initialize feather icon
  if (typeof feather !== 'undefined') {
      feather.replace();
  }
  
  // Remove after 3 seconds
  setTimeout(() => {
      notification.classList.add('hide');
      setTimeout(() => {
          notification.remove();
      }, 300);
  }, 3000);
}


// Format currency
function formatCurrency(amount) {
  return '$' + parseFloat(amount).toFixed(2);
}


// Format date
function formatDate(dateString) {
  const date = new Date(dateString);
  
  return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
  });
}