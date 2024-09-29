import TeamCard, { TeamProp } from "../components/teamCard"

export default function Team(){
    const teamMembers:TeamProp[] = [
        {
            image:"/dp.png",
            Member:"unknown",
            memTitle:"Full-stack Developer"
        },
        {
            image:"/dp.png",
            Member:"any",
            memTitle:"Front-end Developer"
        },
        {
            image:"/dp.png",
            Member:"Joseph Murryambu",
            memTitle:"Nursing Assistant"
        },
        {
            image:"/dp.png",
            Member:"Joseph Ngumbau",
            memTitle:"Medical Assistant"
        },
        {
            image:"/dp.png",
            Member:"Erick Kipkemboi",
            memTitle:"Web Designer"
        },
        {
            image:"/dp.png",
            Member:"Stephen Kerubo",
            memTitle:"President of Sales"
        },
    ]
    return(
        <div className="flex bg-[#F7F7F7] flex-col min-h-screen items-center text-center py-12">
            <h1 className="text-4xl font-bold mb-4">Our Team</h1>
            <p className="text-gray-600 mb-10 max-w-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Au</p>
            <div className="grid grid-cols-2  md:grid-cols-3 gap-8 px-8 w-full max-w-6xl">
            {teamMembers.map((team, index)=>
            <TeamCard key={index} {...team}/>)}
        </div>
        </div>
        
    )
}