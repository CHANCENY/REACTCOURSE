import React from 'react'

const PostDisplayer = ({fetchedData}) => {
  return (
    <table className='table border'>
    <tr>
      <th scope='col'>#</th>
      <th scope='col'>UserId</th>
      <th scope='col'>Title</th>
      <th scope='col'>Body</th>  
    </tr>

    <tbody className='border'>
      {fetchedData.map((user) =>(
        <tr key={user.id}>
          <th scope='row' className='border'>{user.id}</th>
          <td className="border">{user.userId}</td>
          <td className="border">{user.title}</td>
          <td className="border">{user.body}</td>
        </tr>
      ))}
    </tbody>
 </table>
  )
}

export default PostDisplayer