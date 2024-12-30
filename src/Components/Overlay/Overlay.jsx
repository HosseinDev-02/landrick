export default function Overlay({ show, setShow, onClick }) {

    return (
    <div onClick={onClick} className={`fixed inset-0 bg-black/60 transition-all duration-500 z-50 ${show ? 'visible opacity-100' : 'invisible opacity-0'}`}></div>
    )
}