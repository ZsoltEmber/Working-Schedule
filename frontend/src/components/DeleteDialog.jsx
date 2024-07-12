import {useParams} from "react-router-dom";


function DeleteDialog({showModal, onClose, onDelete}){

    const {id} = useParams();
    console.log("DeleteDialog id:", id);
    console.log("Show modal", showModal)

    return (
        <dialog open={showModal} >
            <div >
                <h6>Delete Employee</h6>
            </div>
            <div >
            <p>Are you sure you want to delete this employee?</p>
            </div>

            <div >
                <button onClick={()=>onDelete(id)} type="button" className="btn btn-primary">Delete</button>
                <button onClick={()=> onClose(false)} className="btn btn-secondary">Close</button>
            </div>
        </dialog>
    )
}


export default DeleteDialog;