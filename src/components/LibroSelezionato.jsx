import React from 'react'
import CommentArea from './CommentArea';
import {Col} from 'react-bootstrap';

export default function LibroSelezionato({ selected }) {
    console.log("nooo", selected);
    if (!selected || 0) {
        return (
            <Col xl={12} sm={12} className={`card`}>
                <div className="card-body">
                    <h5 className="card-title">Nessun libro selezionato</h5>
                </div>
            </Col>
        );
    } else
        return (
            <div>
                <Col sm={12} className={`card `} >
                    <img className="card-img-top overflow-y-auto" style={{height:'500px'}} src={selected.img}  />
                    <div className='mb-4 card-body '>
                        <div className='p-2 text-center text-break card-title' >{selected.title}</div>
                        <hr/>
                        <div className='px-3 card-text'> Categoria : <br />
                            <span className='text-uppercase'>{selected.category}</span>
                        </div>
                        <hr/>
                        <p className="ms-3"> Id : {selected.asin}</p>
                        <div className='card-text'>
                            <CommentArea elementId={selected.asin} />
                        </div>
                    </div>
                </Col>
            </div>
        )
}



