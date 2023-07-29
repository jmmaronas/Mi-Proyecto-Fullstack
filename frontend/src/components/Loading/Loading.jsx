import '../Loading/loading.css'
// const style ={
//     width: "100px",
//     height:"100px",
//     animationDuration: "5s",
//     animationName: "slidein",
//     animationDirection: "normal",
//     animationIterationCount: "infinite",
//     transitionDelay: "0",
//     border: "2px solid black",
//     borderRadius: "50%",
//     objectFit:"contain"    
// }
function Loading({image}) {
    return ( 
        <div  className="loading" >
            {image?<img src="/images/yo.png" alt="" />:""}
        </div>
     );
}

export default Loading;