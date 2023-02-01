import "./Button.css";

const Button = ({symbol, color}) => {
    return (
        <div className='button-wr' style={{backgroundColor:color}}>
            {symbol}
        </div>
    )
}

export default Button;