const ModalZoom = ({ foto }) => {
    return (<>
        <dialog open={!!foto}>
            <p>Teste 1 2 3</p>
            <form method="dialog">
                <button>OK</button>
            </form>
        </dialog>
    </>)
}

export default ModalZoom