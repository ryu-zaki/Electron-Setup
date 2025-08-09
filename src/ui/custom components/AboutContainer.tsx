const AboutContainer = () => {
    
    
    return (
        <section className="about-con">
                <div>
                   <h2 className="primary_color--text category-title--about">About me</h2>
                   <p>My Expertise lies in both frontend and backend development, allowingme to create comprehensive and cohesive solutions for a wide range of projects</p>
                </div>

                <div className="about-info">
                    <ul>
                        <li>
                            <div><img src="phone-call.png" alt=""/></div>
                            <p>09460474507</p>
                        </li>

                        <li>
                            <div><img src="envelope.png" alt=""/></div>
                            <p>jhonwellespanola4@gmail.com</p>
                        </li>

                        <li>
                            <div><img src="linkedin.png" alt=""/></div>
                            <p>Jhonwell Española</p>
                        </li>
                    </ul>
                </div>
            </section>
    )
}

export default AboutContainer;