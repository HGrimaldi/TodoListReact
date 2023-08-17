const logo = "./src/assets/react.svg";

const Header = () => {
    return (
        <>
            <h1 className="text-info text-center">Formulario Todo list</h1>
            <img className="rounded d-block mx-auto" src={logo} />
            <hr></hr>
        </>
    );
}

export default Header;
