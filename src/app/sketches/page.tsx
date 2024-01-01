import Sketch from "@/components/sketches/sketch";


const sketches: { image: string, title: string, description: string, date: string }[] = [
    {
        image: "https://images.unsplash.com/photo-1595752024492-e8ceaea3efc7?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YXJjaGl0ZWN0dXJlJTIwc2tldGNofGVufDB8fDB8fHww",
        title: "Sketch 1",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam laudantium incidunt, praesentium, omnis quasi iusto deleniti, eum impedit hic dolor possimus unde ipsum sapiente veritatis quod reprehenderit. Architecto, modi deserunt. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        date: "2021-01-01"
    },
    {
        image: "https://images.unsplash.com/photo-1595752024492-e8ceaea3efc7?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YXJjaGl0ZWN0dXJlJTIwc2tldGNofGVufDB8fDB8fHww",
        title: "Sketch 2",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam laudantium incidunt, praesentium, omnis quasi iusto deleniti, eum impedit hic dolor possimus unde ipsum sapiente veritatis quod reprehenderit. Architecto, modi deserunt. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        date: "2021-01-01"
    },
    {
        image: "https://images.unsplash.com/photo-1595752024492-e8ceaea3efc7?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YXJjaGl0ZWN0dXJlJTIwc2tldGNofGVufDB8fDB8fHww",
        title: "Sketch 3",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam laudantium incidunt, praesentium, omnis quasi iusto deleniti, eum impedit hic dolor possimus unde ipsum sapiente veritatis quod reprehenderit. Architecto, modi deserunt. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        date: "2021-01-01"
    },
]

const Sketches = () => {
    return (
        <div className="m-10">
            <div className="">
                <h1 className="text-5xl underline underline-offset-8">
                    Sketches
                </h1>
                <div className="my-6 text-lg leading-relaxed">
                    <span className="ml-10">Lorem</span> ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam laudantium incidunt, praesentium, omnis quasi iusto deleniti, eum impedit hic dolor possimus unde ipsum sapiente veritatis quod reprehenderit. Architecto, modi deserunt. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </div>
            </div>

            <div>
                {sketches.map((sketch, index) => {
                    return <Sketch
                        key={index}
                        image={sketch.image}
                        title={sketch.title}
                        description={sketch.description}
                        date={sketch.date}
                    />
                })}
            </div>
        </div>
    );
}

export default Sketches;