import wrongImage from '../assets/wrong.jpg'

const Modal = ({ imageURL }) => {

    const WinMsg = 'You just won a dog!'
    const loseMsg = 'Lassie can\'t come home :(.'

    const image = imageURL !== 'wrong' ? imageURL : wrongImage;
    const message = imageURL !== 'wrong' ? WinMsg : loseMsg;

    return (
        <div className="modal">
            {image && (
                <div className="image-container image-container--modal">
                    <img src="{image}" />
                </div>
            )}
            <div className="modal__message">
                <p>{message}</p>                
            </div>
        </div>
    )
}

export default Modal;