const ButtonComponent = (props) => {
    const { children = "....", variant = "red-700", color = "white" } = props;
    return (
        <button className={`h-10 px-6 font-semibold rounded-md bg-${variant} text-${color}`} type="submit">
            {children}
        </button>
    );
};

export default ButtonComponent;