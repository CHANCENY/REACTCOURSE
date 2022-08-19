import React from 'react'


const Display = () => {
  return (
    <table className="table">
        <thead>
            <tr>
                <th scope='col'>#</th>
                <th scope='col'>Name</th>
                <th scope='col'>Number</th>
                <th scope='col'></th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th scope='row'>0</th>
                <td>Chance</td>
                <td>8699522190</td>
                <th><button className="btn btn-danger float-end">delete</button></th>
            </tr>
        </tbody>
    </table>
  )
}

export default Display