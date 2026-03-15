interface ResetProp {
    text: string
}

const refreshPage = () => {
    window.location.reload()
}

const Reset = ({text}: ResetProp) => {
    return(
        <button onClick={refreshPage}>{text}</button>
    )
}

export default Reset;