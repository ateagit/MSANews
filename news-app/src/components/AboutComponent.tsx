import * as React from "react";

class AboutComponent extends React.Component<{}> 
{
    public render()
    {
        return (
            <div className = "centreText">
                <h1> About this project </h1>
                <p id = "about-text">
                    This project was made by Alan Thomas for MSA. 
                    The website makes use of material design components as well as a bootstrap nav bar.
                    The API used was provided by newsapi.org
                </p>
            </div>
        );
    }
}

export default AboutComponent;