const ButtonComponent = (props) => {
    console.log(props)
    return(
        <button>
            {props.title}
        </button>
    )
}

export default ButtonComponent