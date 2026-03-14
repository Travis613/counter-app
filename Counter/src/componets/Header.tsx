interface HeaderProp {
    text: String;
}

const Header = ({text}: HeaderProp) => {
    return (
        <h1 className={"header"}>{text}</h1>
    )
}

export default Header;