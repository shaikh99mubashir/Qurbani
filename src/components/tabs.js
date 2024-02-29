import React from 'react'

const tabs = () => {
    return (
        <>
            <div className="tabs">
                <div className="container">
                    <div className="row">
                        <div className="col-4 active">
                            <i className="fa-regular fa-calendar"></i>
                            <p>1. SELECT QURBANI</p>
                        </div>
                        <div className="col-4">
                            <i className="fa-solid fa-truck"></i>
                            <p>2. PROVIDE ADDRESS</p>
                        </div>
                        <div className="col-4">
                            <i className="fa-regular fa-credit-card"></i>
                            <p>3. MAKE PAYMENT</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default tabs