import './Button.css'


function Button({input, onClick}) {
   
    return ( 
        <div className='Buttonposition'>
    <button className='Buttonstyle' onClick={onClick} > {input} </button>
    </div>
    );
}

export default Button;