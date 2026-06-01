const CircleFade = () => {
    return (
        <>
            <div className="h-full opacity-50 w-1/4 bg-linear-to-r from-background to-transparent absolute left-0 bottom-0 z-6" />
            <div className="h-full opacity-50 w-1/4 bg-linear-to-l from-background to-transparent absolute right-0 bottom-0 z-6" />
        </>
    )
}

export default CircleFade