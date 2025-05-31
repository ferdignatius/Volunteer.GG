const LoadingBox = ({ message } : { message : string }) => {
    return (
        <div className="h-full w-full flex justify-center items-center">
            <p>{message}</p>
        </div>
    )
}

export default LoadingBox