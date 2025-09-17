const formatTime = (passed: number) : string => {
    const minutes = Math.floor(passed / 60)
    const seconds = passed - minutes * 60

    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
}

export default formatTime