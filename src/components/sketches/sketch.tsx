import Image from "next/image";

interface SketchProps {
    image: string;
    title: string;
    description: string;
    date: string;
}

const Sketch: React.FC<SketchProps> = ({ image, title, description, date }) => {
    return (
        <div className="my-10">
            <div className="flex flex-col md:flex-row items-center space-x-32">
                <Image
                    className="w-[20rem] h-auto pb-9 md:pr-9 border-b md:border-r border-zinc-800"
                    src={image}
                    alt={title}
                    width={500}
                    height={500}
                />
                <div className="flex flex-col justify-between space-y-6">
                    <div>
                        <h2 className="text-2xl">{title}</h2>
                        <p className="text-sm">{date}</p>
                    </div>
                    <div className="w-3/4">
                        <p className="text-sm leading-loose">{description}</p>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Sketch;