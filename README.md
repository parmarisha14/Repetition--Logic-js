1. 📘 Introduction
The CuteHR – Employee and Product Management System is a web-based application designed to simplify the internal management of employee records and product details. The system provides functionalities to add, display, and manage both employee and product data using HTML, CSS, JavaScript, and browser localStorage.

2. 🎯 Objectives
To manage employee records in a centralized system.

To store and display product details including image previews.

To provide CRUD (Create, Read, Delete) functionality.

To use localStorage for client-side data persistence.

To create a responsive user interface with Bootstrap.

3. 🛠 Technologies Used
Technology	Purpose
HTML5	Page structure
CSS3	Styling and design
Bootstrap 5	Responsive layout
JavaScript	Application logic
localStorage	Data storage in the browser

4. 🔑 System Features
Add new employees with name, salary, post, and manager details.

Display employee data in a styled table.

Delete employee records.

Add new products with name, price, quantity, and image URL.

Display products in a table with thumbnail images.

5. 🧩 System Architecture
Client-side only architecture

HTML pages for structure

CSS and Bootstrap for styling

JavaScript for logic

LocalStorage as a data store (no backend)

6. 📁 File Structure
python
Copy
Edit
CuteHR/
│
├── index.html              # Employee Table
├── add_emp.html            # Add Employee Form
├── add_product.html        # Add Product Form
├── product.html            # Product Table View
│
├── CSS/
│   ├── bootstrap.min.css   # Bootstrap framework
│   └── style.css           # Custom styles
│
├── JS/
│   ├── script.js           # Employee form logic
│   ├── script2.js          # Employee table + delete
│   ├── script3.js          # Product form logic
│   └── script4.js          # Product table display
7. 🔍 Functional Description
A. Employee Module
add_emp.html: Form for entering employee data

script.js: Saves form data into localStorage

index.html + script2.js:

Displays employee data in a table

Allows deletion of specific records

B. Product Module
add_product.html: Form to input product details

script3.js: Handles product form submission

product.html + script4.js: Displays product list with images

8. 🖼 Output Screenshots
(📌 You should insert screenshots here of the following pages:)

Home Page with Employee Table

Add Employee Form

Add Product Form

Product Display Table with Images

9. 🔮 Future Scope
Add Edit/Update functionality

Integrate with a backend server and database

Add user authentication (Admin login)

Export data to CSV/PDF

Responsive mobile-first design improvements

live project: https://repetition-logic-js-mu.vercel.app/
