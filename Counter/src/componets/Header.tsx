interface HeaderProp {
    text: String;
}

export const Header = ({text}: HeaderProp) => {
    return (
        <h1 className={"header"}>{text}</h1>
    )
}