function ItemFormulario(props) {
    return (
        <>
            <p><label style={{ paddingRight: "3px" }} for={props.name}>{props.label}: </label></p>
            <p><input className="bg-dark p-0 border text-white ps-2 w-75 rounded-1" type={props.tipo} name={props.name} id={props.name} placeholder={props.ph} /></p>
        </>

    )
}

export default ItemFormulario;