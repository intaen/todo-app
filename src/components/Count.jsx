import React, { useState } from 'react'

// untuk mempermudah kirim data antara component (spy tidak props drilling), bisa dengan component management menggunakan salah satunya redux.
function Count({count}) {

  const colorEven  = count % 2 === 0 ? {color: 'red'} :
  {color: 'blue'}

    return (   
      <div>
        <h2 style={colorEven}>{count}</h2>
      </div>
    )
}       

export default Count