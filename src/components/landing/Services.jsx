import TagSection from "../TagSection"
import ServicesCard from "../ServicesCard";
import wordpress from "../../../public/Assets/Logo/WordpressLogo.svg";


const Services = () => {
    return (
        <><div>
            <TagSection title="Our Services" />
        <div>
            <h1 className="title"> This is Services</h1>
            <p className="subtitle">Here you can find the services we offer.</p>
        </div>
        <div>
            <div className="flex justify-center gap-10 pt-10">
                <ServicesCard 
                color="bg-[#204635]"
                logo={wordpress}
                />
                <ServicesCard 
                color="bg-[#CFFFB1]"
                />
                <ServicesCard 
                color="bg-[#204635]"
                />
            </div>
        </div>
        </div>
        </>
    )
}
export default Services