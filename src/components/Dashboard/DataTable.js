import React from 'react';
import './DataTable.css';

const DataTable = () => {
  return (
    <div className="table">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Role</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>John Doe</td>
            <td>Admin</td>
            <td>Active</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jane Smith</td>
            <td>Editor</td>
            <td>Inactive</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Mike Johnson</td>
            <td>Viewer</td>
            <td>Active</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;