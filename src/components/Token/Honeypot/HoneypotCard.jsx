import styles from './Honey.module.css'
export function HoneypotCard(){
    return(
        <>
            <h5 className='text-start pt-3 pb-2' style={{fontFamily: 'SF Pro Display Medium'}}>Honeypot</h5>
            <div className={`d-flex border px-2 pt-2  ${styles.card}` } style={{marginBottom:'-5px'}}>
                <div className=''><input  type="checkbox" name="" id="" /></div>
                <div className="text-start ps-2 pt-1" >
                    <h5>Honeypot Test Passed</h5>
                    <p> Trading simulation shows that trading is open which means token is not a honeypot</p>
                </div>
            </div>
        </>
    )
}