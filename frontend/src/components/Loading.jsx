import LoadingGif from "../assets/Loading.gif"

function Loading() {

    return (<div style={{placeItems : "center"}}>
        <img src={LoadingGif} height={"200px"} alt={"Loading..."}/>
    </div>)
}


export default Loading;