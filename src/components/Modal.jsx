const Modal = ({ open, closeModal }) => {
  return (
    <article
      className={`modal ${open ? "modal__open" : "modal__close"}`}
      onClick={closeModal}
    >
      <div className="modal__dialog" onClick={(e) => e.stopPropagation()}>
        <button className="btn__close" onClick={closeModal}>
          X
        </button>
        <h1 className="modal__title">¡Bien hecho!</h1>
        <p className="modal__info">La información se envió correctamente</p>
      </div>
    </article>
  );
};

export default Modal;
