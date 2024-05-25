import React, { useState } from "react"

const Section = ({ title, description, isVisible, SetIsVisible }) => {
    return (
        <div className=" border border-black p-2">
            <h1 className="font-extrabold">{title}</h1>
            {isVisible ? (
                <div>
                    <button onClick={() => SetIsVisible(false)}>Hide</button>
                    <h2>{description}</h2>
                </div>) :
                (<div>
                    <button onClick={() => SetIsVisible(true)}>Show</button>
                </div>)}
        </div>
    )}


const Instamart = () => {

    const [visibleSection, SetVisibleSection] = useState("about")

    return (<div>

        <Section
            title="About"
            description="About ifhehfwihfw ihwefwe ihiwf wbieifhrg ihfirhfhi qwgqwqs iihqhq qhihwev hiw ejwheiwge"
            isVisible={(visibleSection === "about")}
            SetIsVisible={() => (visibleSection === "about")?SetVisibleSection(""):SetVisibleSection("about")}
        />
        <Section
            title="Team"
            description="Team ifhehfwihfw ihwefwe ihiwf wbieifhrg ihfirhfhi qwgqwqs iihqhq qhihwev hiw ejwheiwge"
            isVisible={(visibleSection === "team")}
            SetIsVisible={() => (visibleSection === "team")?SetVisibleSection(""):SetVisibleSection("team")}
        />
        <Section
            title="Project"
            description="Project ifhehfwihfw ihwefwe ihiwf wbieifhrg ihfirhfhi qwgqwqs iihqhq qhihwev hiw ejwheiwge"
            isVisible={(visibleSection === "project")}
            SetIsVisible={() => (visibleSection === "project")?SetVisibleSection(""):SetVisibleSection("project")}
        />
    </div>)
}

export default Instamart