import _cv from '../images/cv.png' 

const CV = () => {
    return (
        <>
            <div className="background"></div>
            <img src={_cv} alt='cv' className='cv'/>
            <div className="home_actions cv-actions">
                <a href='https://drive.google.com/file/d/18CQbopmULlXxoKrg-gS6MlK_gVEhaO9z/view?usp=sharing' target='__blank' className="home_actions-cv">Descargar</a>
            </div>
        </>
    )
}

export default CV
