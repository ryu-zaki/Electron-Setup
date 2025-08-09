

const HeaderSection = ()  => {
  
    return (
        <div className="header_container">
            {/* <!-- Profile Picture --> */}
            <div className="profile-img">
                <img src='profile.png' alt=""/>
            </div>

            <header>
                <h1 className="primary_color--text">Jhonwell A. Española</h1>
                <p>Aspiring Full-Stack Developer</p>
            </header>
        </div>

    )

}

export default HeaderSection;