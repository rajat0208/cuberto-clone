import react from "react"

const header =()=>{
    return(
        <>
        <header className="flex justify-between items-center p-6">

            <div className="text-black font-semibold text-lg">Cuberto</div>
            <nav>
                <button className="text-xl">Menu</button>
            </nav>
        </header>
        </>
    )

}

export default header;