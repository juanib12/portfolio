import Image from "next/image";

const CV = () => {
    return (
        <>
            <div className="background"></div>
            <Image src="/images/cv.png" alt='cv' className='cv' width={640} height={900}/>
            <div className="home_actions cv-actions">
                <a href='https://drive.google.com/file/d/1U_Iv4wLKGwYF0OUwM3SZPC-sMVKH1FhL/view?usp=sharing' target='__blank' className="home_actions-cv">Descargar</a>
            </div>
        </>
    )
}

export default CV
