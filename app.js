"use strict"
const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('./db/chinook.sqlite');

// db.all(
//   'SELECT * FROM Employee',
//   (err, res) => {
//     console.log(res)
//   }
// );

// db.each(
//   'SELECT * FROM Employee',
//   (err, res) => {
//     console.log(res.EmployeeId)
//   }
// );

console.log('# of invoices per country');

db.all(`
  select billingCountry as country,
          count(*) as "NumInvoices"
  from Invoice
  group by billingcountry
  order by numinvoices desc`,

  (egg,res)=>{
    if (egg) throw egg
  }
);