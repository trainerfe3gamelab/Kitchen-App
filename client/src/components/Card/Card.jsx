function Card({ title, footer, children }) { // lowercase 'children'
    return (
        <div className="shadow w-48">{children}</div>
    )

}


function title ({children}){
    return(
        <h1 className="text-2xl p-4">{children}</h1>
    );
}

function Body({ children }){
    return(
        <div className="leading-relaxed p-4">{children}</div>
    );
}


function footer ({children}){

    return(
        <div className="bg-slate-20 p-4 text-black">{children}</div>
    );
}

Card.title = title;

Card.Body = Body;

Card.footer = footer;

export default Card;
