import Image from "next/image";

const CV = () => {
    return (
        <>
            <div className="background"></div>
            <Image src="/images/cv.png" alt='cv' className='cv' width={640} height={900}/>
            <div className="home_actions cv-actions">
                <a href='https://drive.google.com/file/d/18CQbopmULlXxoKrg-gS6MlK_gVEhaO9z/view?usp=sharing' target='__blank' className="home_actions-cv">Descargar</a>
            </div>
        </>
    )
}

export default CV
