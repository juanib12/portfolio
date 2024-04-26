import _cv from '../images/cv.png' 

const CV = () => {
    return (
        <>
            <img src={_cv} alt='cv' className='cv'/>
            <div className="home_actions cv-actions">
                <a href='https://drive.google.com/file/d/1YU6H1xM0zA04VkZUBfN7-v2qG1GDJVxA/view?usp=sharing' target='__blank' className="home_actions-cv">Descargar</a>
            </div>
        </>
    )
}

export default CV