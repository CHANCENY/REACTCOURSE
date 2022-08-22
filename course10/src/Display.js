import React from 'react'

const Display = ({data, fetchError, isLoading}) => {
  return (
    <div>
        {isLoading && !fetchError && <p>fetching data now.....</p>}
        {fetchError && <p>{`Error found : ${fetchError}`}</p>}

        {!isLoading && !fetchError && <table className='table table-stripped border mt-5'>
            <thead>
                <th>#</th>
                <th>Name</th>
                <th>Price</th>
            </thead>

            <tbody>
                {data.map((d) =>(
                  <tr key={d.id}>
                    <th scope='row'>{d.id}</th>
                    <td>{d.name}</td>
                    <td>{d.price}</td>
                  </tr>  
                ))}
            </tbody>
        </table>}
    </div>
  )
}

export default Display