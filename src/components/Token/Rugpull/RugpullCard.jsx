import styles from './RugpullStyle.module.css'

export function RugpullCard(){
    return(
        <>
            <h5 className='text-start pt-3 pb-2' style={{fontFamily: 'SF Pro Display Medium'}}>Rugpull</h5>
            <div className={`d-flex border px-2 pt-2  ${styles.card}` } style={{height:'110px'}}>
                <div><input type="checkbox" name="" id="" /></div>
                <div className="text-start ps-2 pt-1 " >
                    <h5>Rugpull Test Passed</h5>
                    <p className=''> Taken owners has only 7% of liquidity which reduces risk of Rugpull</p>
                </div>
            </div>
        </>
    )
}