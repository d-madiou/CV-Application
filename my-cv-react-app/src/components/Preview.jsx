import previewImg from "../assets/images/preview.png";

const Preview = ()=>{
    return (
        <div style={{display: "flex", height: "100vh", justifyContent: "center"}} className="preview">
            <img src={previewImg} alt="Preview" />
        </div>
    )
}
export default Preview;  //exporting the component