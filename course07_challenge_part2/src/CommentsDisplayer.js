import React from 'react'

const CommentsDisplayer = ({fetchedData}) => {
  return (
    <table className='table border mt-3'>
    <tr>
      <th scope='col'>#</th>
      <th scope='col'>PostId</th>
      <th scope='col'>Name</th>
      <th scope='col'>Email</th>  
      <th scope='col'>Comment</th>  
    </tr>

    <tbody className='border'>
      {fetchedData.map((user) =>(
        <tr key={user.id}>
          <th scope='row'>{user.id}</th>
          <td className="border">{user.postId}</td>
          <td className="border">{user.name}</td>
          <td className="border">{user.email}</td>
          <td className="border">{user.body}</td>
        </tr>
      ))}
    </tbody>
 </table>
  )
}

export default CommentsDisplayer