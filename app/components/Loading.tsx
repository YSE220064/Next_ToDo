import { ClipLoader } from 'react-spinners';

const Loading = () => {
    return (
        <div className="flex justify-center items-center m-5">
            <ClipLoader size={50} color="#2ab393" />
        </div>
    )
}

export default Loading;