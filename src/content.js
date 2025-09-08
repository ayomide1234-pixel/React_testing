const Content = () => {
    return ( 
        <div className="content">
            <h1 style={{color:"white",cursor:"pointer"}}>Welcome to Pixel</h1>
            <div className="form">
                <form action="/" method="post">
                <input type="text"  placeholder="FirstName" />
                <input type="text"  placeholder="LastName"/>
                <br />
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="password" />
                <br />
                <input type="text" placeholder="how did you hear about us" className="news"/>
                <br />
                <button className="btn">Create account</button>
                </form>
            </div>
        </div>
     );
}
 
export default Content;