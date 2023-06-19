import React from 'react';
import { AiFillEye } from 'react-icons/ai';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ViewComp() {
    const [showSec, setShowSec] = useState(false);
    const handleCloseSec = () => setShowSec(false);
    const handleShowSec = () => setShowSec(true);

    return (
        <>
            <span className='bg-gray'>
                <button type='button' onClick={handleShowSec}>
                    <AiFillEye />

                </button>

                <Modal show={showSec} onHide={handleCloseSec}>
                    <Modal.Header closeButton >
                        <Modal.Title>AMJAD KHAN </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <table id="customers">
                            <tr>
                                <td className='bold-td-text'>Company</td>
                                <td>-</td>

                            </tr>
                            <tr>
                                <td className='bold-td-text'>Name</td>
                                <td>Amjad Khan</td>

                            </tr>
                            <tr>
                                <td className='bold-td-text'>Customer Group</td>
                                <td>General</td>
                            </tr>
                            <tr>
                                <td className='bold-td-text'>VAT Number</td>
                                <td>Maria Anders</td>
                            </tr>
                            <tr>
                                <td className='bold-td-text'>GST Number</td>
                                <td>Maria Anders</td>
                            </tr>
                            <tr>
                                <td className='bold-td-text'>Deposit</td>
                                <td>20.00</td>
                            </tr>
                            <tr>
                                <td className='bold-td-text'>Award Points</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td className='bold-td-text'>Email</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td className='bold-td-text'>Phone</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td className='bold-td-text'>Address</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td className='bold-td-text'>City</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td className='bold-td-text'>State</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td className='bold-td-text'>Postal Code</td>
                                <td></td>
                            </tr>

                            <tr>
                                <td className='bold-td-text'>Country</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td className='bold-td-text'>Customer Custom Field 1</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td className='bold-td-text'>Customer Custom Field 2</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td className='bold-td-text'>Customer Custom Field 3</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td className='bold-td-text'>Customer Custom Field 4</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td className='bold-td-text'>Customer Custom Field 5</td>
                                <td></td>
                            </tr>

                        </table>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleCloseSec}>
                            Close
                        </Button>
                        <Button variant="primary" >
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal>


            </span>
        </>
    )
}

export default ViewComp