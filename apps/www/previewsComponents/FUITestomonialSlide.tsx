import Image from 'next/image'
const testimonials = [
    {
        name: "Alena Zhukova",
        profession: "Software Engineer",
        description: "Simple is the perfect tool for building user interfaces. It's easy to use and has a lot of features. I've been using it for a while now and I'm really happy with the results.",
        avatar: "https://assets.basehub.com/fa068a12/uXVXN7g1Fc2EjO8OWn0HG/09.png?width=64&quality=90&format=auto",
        image: "https://res.cloudinary.com/dfhp33ufc/image/upload/v1715881430/vercel_wordmark_dark_mhv8u8.svg",
    },
    {
        name: "Aiko",
        profession: "Design Engineer",
        description:
            "Simple is a great tool for building user interfaces. It's easy to use and has a lot of features. I've been using it for a while now and I'm really happy with the results.",
        avatar: "https://assets.basehub.com/fa068a12/uXVXN7g1Fc2EjO8OWn0HG/09.png?width=64&quality=90&format=auto",
        image: "https://res.cloudinary.com/dfhp33ufc/image/upload/v1715881430/vercel_wordmark_dark_mhv8u8.svg",
    },
    {
        name: "Alena Zhukova",
        profession: "Software Engineer",
        description:
            "Simple is the perfect tool for building user interfaces. It's easy to use and has a lot of features. I've been using it for a while now and I'm really happy with the results..",
        avatar: "https://assets.basehub.com/fa068a12/uXVXN7g1Fc2EjO8OWn0HG/09.png?width=64&quality=90&format=auto",
        image: "https://res.cloudinary.com/dfhp33ufc/image/upload/v1715881430/vercel_wordmark_dark_mhv8u8.svg",
    },

    {
        name: "Lisa Kemp",
        profession: "Frontend Developer",
        description:
            "Simple is a great tool for building user interfaces. It's easy to use and has a lot of features. I've been using it for a while now and I'm really happy with the results..",
        avatar: "https://assets.basehub.com/fa068a12/uXVXN7g1Fc2EjO8OWn0HG/09.png?width=64&quality=90&format=auto",
        image: "https://res.cloudinary.com/dfhp33ufc/image/upload/v1715881430/vercel_wordmark_dark_mhv8u8.svg",
    },
    {
        name: "Saud",
        profession: "Game Developer",
        description:
            "Simple is a great tool for building user interfaces. It's easy to use and has a lot of features. I've been using it for a while now and I'm really happy with the results.",
        avatar: "https://assets.basehub.com/fa068a12/uXVXN7g1Fc2EjO8OWn0HG/09.png?width=64&quality=90&format=auto",
        image: "https://res.cloudinary.com/dfhp33ufc/image/upload/v1715881430/vercel_wordmark_dark_mhv8u8.svg",
    },
    {
        name: "Paula Smith",
        profession: "UX Designer",
        description:
            "Simple is a great tool for building user interfaces. It's easy to use and has a lot of features. I've been using it for a while now and I'm really happy with the results.",
        avatar: "https://assets.basehub.com/fa068a12/uXVXN7g1Fc2EjO8OWn0HG/09.png?width=64&quality=90&format=auto",
        image: "https://res.cloudinary.com/dfhp33ufc/image/upload/v1715881430/vercel_wordmark_dark_mhv8u8.svg",
    },
];
const FUITestimonialWithSlide = () => {
    return (
        <div className='max-w-8xl mx-auto'>
            <div className="w-full mx-auto px-10">
                <div className='mb-10'>

                    <p className="mt-8 max-w-2xl mx-auto  font-geist text-center text-5xl font-normal tracking-tight text-gray-800 dark:text-gray-200">
                        What clients says
                    </p>
                    <p className="mt-4 max-w-xl mx-auto  text-lg text-center tracking-tight text-zinc-600">
                        Design assets, icon teardowns, and a community of fellow icon
                        designers where you can ask questions.
                    </p>

                </div>
                <div style={{
                    maskImage:
                        'linear-gradient(to left, transparent 0%, black 20%, black 80%, transparent 95%)',
                }} className="flex relative overflow-hidden  gap-5 justify-around shrink-0">
                    {testimonials.map((testimonial, indx) => {
                        return (

                            <div key={indx} className="border-[1.2px] animate-x-slider flex flex-col bg-page-gradient border-black/20  dark:border-white/10  rounded-lg shrink-0 grow-0 w-[600px] h-full">
                                <p className="px-5 py-5 text-pretty text-xl font-extralight  text-text-primary dark:text-dark-text-primary sm:text-2xl md:text-3xl tracking-tighter">
                                    &quot;{testimonial.description}.&quot;


                                </p>
                                <div className="border-t-[1.2px]  w-full flex gap-1 overflow-hidden">
                                    <div className="w-3/4 flex gap-3 items-center px-4 py-3">
                                        <img src={testimonial.avatar} alt='avatar' />
                                        <div className='flex flex-col flex-1 gap-0 justify-start items-start'>
                                            <h5 className='text-base font-medium md:text-lg'>{testimonial.name}</h5>
                                            <p className='text-black/30 dark:text-white/50 mt-[-4px] text-sm text-text-tertiary dark:text-dark-text-tertiary md:text-base'>{testimonial.profession}</p>

                                        </div>

                                    </div>
                                    <div className='w-[1px] bg-black/20 dark:bg-white/20' />

                                    <div className='max-w-full self-center pl-2'>
                                        <img src={testimonial.image} className='h-10 w-28 px-2 flex-none brightness-0  dark:invert' alt='company_logo' />

                                    </div>

                                </div>

                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
export default FUITestimonialWithSlide