import React from 'react';

export default function Card() {

    return (
        <div>
            <h3 className='text-right text-dark'> Filter By: </h3>
            <div className='container-fluid mx-2'>
                <div className='row mt-5 mx-2'>
                 <h4 className='text-right text-dark'>Budget </h4>
                    <div className='col-md-3'>
                        <button className='btn btn-warning'>Budget</button>
                    </div>
                    {/* <div className='col-md-9'>
                        
                    </div> */}
                </div>
            </div>
        </div>
    )
}