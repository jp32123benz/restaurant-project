import React from 'react';
// import { Modal } from 'react-responsive-modal';

const respModal = ({ image }) => {
    console.log('in modal');
    return (
        <>
            <div className="modal">
                <img src={image} alt="" />
            </div>
        </>
    )
}

export default respModal