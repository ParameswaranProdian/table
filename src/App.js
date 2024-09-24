import React, { useState } from 'react';
import './App.css'; 

const data = [
  { name: 'Barath', place: 'Trichy', age: 20 },
  { name: 'Paramesh', place: 'Chennai', age: 21 },
  { name: 'Sanjay', place: 'Trichy', age: 22 },
  { name: 'Shiva', place: 'Trichy', age: 20 },
  { name: 'Jeeva', place: 'Chennai', age: 21 },
  { name: 'suba', place: 'Trichy', age: 22 },
  { name: 'Sandhya', place: 'Trichy', age: 20 },
  { name: 'Akshaya', place: 'Chennai', age: 21 },
  { name: 'Seetha', place: 'Trichy', age: 26 },
];

function filterData(data, search) {
  return data.filter(person => {
    return (
      person.name.toLowerCase().includes(search.toLowerCase()) ||
      person.place.toLowerCase().includes(search.toLowerCase()) ||
      person.age.toString().includes(search)
    );
  });
}

function Table() {
  const [search, setSearch] = useState('');
  const filteredData = filterData(data, search);

  return (
    <div className="container">
      <input
        type="text"
        placeholder="Search by name, place, age..."
        className="search-bar"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
     
      <table className="table">
        <thead>
          <tr>
            <th>Serial No.</th>
            <th>Name</th>
            <th>Place</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.length > 0 ? (
            filteredData.map((person, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{person.name}</td>
                <td>{person.place}</td>
                <td>{person.age}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" >No data found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
