import TeamCard, { TeamProp } from "../components/teamCard"

export default function Team() {
    const teamMembers :TeamProp[]= [
        {
            image: "https://i.pinimg.com/736x/9d/0b/1b/9d0b1b867af718e52c9187b57381de67.jpg",
            Member: "John",
            memTitle: "Full-stack Developer"
        },
        {
            image: "https://i.pinimg.com/564x/fe/08/91/fe0891ae1bb00c6ca81dc73d81d1931e.jpg",
            Member: "Alaice",
            memTitle: "Front-end Developer"
        },
        {
            image: "https://i.pinimg.com/236x/43/c1/cf/43c1cf3e44504b1cefc903d5d79c38d7.jpg",
            Member: "Joseph Murryambu",
            memTitle: "Nursing Assistant"
        },
        {
            image: "https://i.pinimg.com/236x/b7/25/57/b725575db32f8e9fa73c42ef6064b5ab.jpg",
            Member: "Joseph Ngumbau",
            memTitle: "Medical Assistant"
        },
        {
            image: "https://i.pinimg.com/236x/ee/34/34/ee34347211a3d0744667a86096949da8.jpg",
            Member: "Erick Kipkemboi",
            memTitle: "Web Designer"
        },
        {
            image: "https://i.pinimg.com/564x/ef/95/3a/ef953accb41341103a5825e6a1a766cf.jpg",
            Member: "Stephen Kerubo",
            memTitle: "President of Sales"
        },
    ]

    return (
        <div className="flex bg-[#F7F7F7] flex-col min-h-screen items-center text-center py-12">
            <h1 className="text-4xl font-bold mb-4">Our Team</h1>
            <p className="text-gray-600 mb-10 max-w-xl">Meet the Team of Professional </p>
            <div className="grid grid-cols-2  md:grid-cols-3 gap-8 px-8 w-full max-w-6xl">
                {teamMembers.map((team, index) =>
                    <TeamCard key={index} {...team} />)}
            </div>
        </div>

    )
}