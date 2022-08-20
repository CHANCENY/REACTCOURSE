import React from 'react'

const UsersDisplayer = ({fetchedData}) => {
  return (
   <table className='table border'>
      <tr>
        <th scope='col'>#</th>
        <th scope='col'>Name</th>
        <th scope='col'>Username</th>
        <th scope='col'>Email</th>
        <th scope='col'>Address</th>       
      </tr>

      <tbody className='border'>
        {fetchedData.map((user) =>(
          <tr key={user.id}>
            <th scope='row' className="border">{user.id}</th>
            <td className="border">{user.name}</td>
            <td className="border">{user.username}</td>
            <td className="border">{user.email}</td>
            <td className="border">{JSON.stringify(user.address)}</td>
          </tr>
        ))}
      </tbody>
   </table>

  )
}

export default UsersDisplayer