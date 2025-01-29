export const Button = ({button}) =>{
    const buttonData = button[0]
    console.log(buttonData)
    return(
    <div className="buttonOverview">
                <div className="button" style={{backgroundColor:buttonData.color}}>
                    <h3>{buttonData.title}</h3>
                    <p>{buttonData.content}</p>
                    <p>{buttonData.color}</p>
                </div>
                <div className="descriptionHolder">
                    <h1>{buttonData.title}</h1>
                    <p>
                    {buttonData.description}
                    </p>
                </div>
            </div>
            )
}