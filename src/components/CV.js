import _cv from '../images/cv.jpg' 

const CV = () => {
    return (
        <>
            <img src={_cv} alt='cv' className='cv'/>
            <div className="home_actions cv-actions">
                <a href='https://drive.google.com/file/d/1uXhbRizZkEx0LcWYqAAn8hvoHFf3swN_/view?usp=sharing' target='__blank' className="home_actions-cv">Descargar</a>
            </div>
        </>
    )
}

export default CV