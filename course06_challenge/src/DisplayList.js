import React from 'react'

const DisplayList = ({fetchedData, errfound, errors}) => {
  return (
   <div className="container">
    {errfound && <p className='bg-danger text-white mt-5'>{`${errors}..... Please reload the page`}</p>}
   {!errfound && <ul className='mt-3'>
        {fetchedData.map(obuser => (
            <li className="mb-3 bg-light border p-2" key={obuser.id}>{JSON.stringify(obuser)}</li>
        ))}
    </ul>}
    </div>
  )
}

export default DisplayList