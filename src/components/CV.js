import _cv from '../images/cv.png' 

const CV = () => {
    return (
        <>
            <div className="background"></div>
            <img src={_cv} alt='cv' className='cv'/>
            <div className="home_actions cv-actions">
                <a href='https://drive.google.com/file/d/1ovXEn9qXjApPWKV1GdHL5SsePZFpGqA1/view?usp=sharing' target='__blank' className="home_actions-cv">Descargar</a>
            </div>
        </>
    )
}

export default CV