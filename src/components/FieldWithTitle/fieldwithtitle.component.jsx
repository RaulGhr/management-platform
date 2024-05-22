import "./fieldwithtitle.style.scss";

const FieldWithTitle = ({ type, name, title, styleClass, textarea=false }) => {
    return (
        <div className={styleClass + " fieldwithtitile"}>
            <h3>{title}</h3>
            {textarea ? <textarea name={name} id={name} cols="30" rows="10"/> : <input type={type} name={name} id={name} />}
            {/* <input type="text" />
            <textarea name="" id="" cols="30" rows="10"/> */}
        </div>
    );
}

export default FieldWithTitle;