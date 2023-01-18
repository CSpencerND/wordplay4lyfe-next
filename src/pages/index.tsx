import { type NextPage } from "next"
import Image from "next/image"
import { hero } from "~/static/index"
import { Showcase } from "~/components/Showcase"
import { Gallery } from "~/components/Gallery"

// import { signIn, signOut, useSession } from "next-auth/react"

const Home: NextPage = () => {
    return (
        <>
            <section id="hero" className="pt-6">
                <div className="hero">
                    <figure className="w-full">
                        <Image
                            className={`dynamic-height aspect-video w-full object-cover object-top`}
                            src={hero}
                            alt="Man standing in front of graffiti"
                            placeholder="blur"
                            priority
                        />
                    </figure>
                    <div className={`hero-overlay bg-opacity-40`}></div>
                    <div className="hero-content text-center text-zinc-100">
                        <div>
                            <h1 className="mb-5 font-medium uppercase drop-shadow-[-1px_2px_4px_rgb(0,0,0)] lg:text-4xl">
                                We play with words
                            </h1>
                        </div>
                    </div>
                </div>
            </section>

            <section id="showcase">
                <Showcase />
            </section>

            <section id="mission">
                <div className="card lg:card-side">
                    {/* <figure className="pt-6 pl-6 max-lg:pr-6 lg:w-1/3 lg:pb-6"> */}
                    {/*     <Image */}
                    {/*         className="h-full w-full opacity-90" */}
                    {/*         src={city} */}
                    {/*         alt="city" */}
                    {/*         width={400} */}
                    {/*         height={300} */}
                    {/*         placeholder="blur" */}
                    {/*     /> */}
                    {/* </figure> */}
                    <article className="card-body lg:w-2/3">
                        <h2 className="card-title whitespace-nowrap">Why we love what we do</h2>
                        <p>
                            When we think about WORDPLAY4LYFE, what comes to mind is Artistic
                            Expression - being able to express yourself freely and not be
                            judged. We use our Imagination because the fact that you can come up
                            with different ideas for something that&apos;s yours is just
                            amazing. The fact that you can daydream about those different ideas
                            and bring them to life is really exciting, which is an excellent way
                            to share my Creativeness with the rest of the world. We want
                            WORDPLAY4LYFE to represent Culture in all walks of life because
                            without culture there is no WORDPLAY4LYFE.
                        </p>
                        <p>
                            Artistic Expression, Imagination, Creativeness and Culture
                            represents our brand. (AEICC)
                        </p>
                    </article>
                </div>
            </section>

            <section id="gallery" className="pb-6">
                <Gallery />
            </section>
        </>
    )
}

export default Home

// const AuthShowcase: React.FC = () => {
//     const { data: sessionData } = useSession()

//     const { data: secretMessage } = trpc.auth.getSecretMessage.useQuery(
//         undefined, // no input
//         { enabled: sessionData?.user !== undefined }
//     )

//     return (
//         <div className="flex flex-col items-center justify-center gap-4">
//             <p className="text-center text-2xl text-white">
//                 {sessionData && (
//                     <span>Logged in as {sessionData.user?.name}</span>
//                 )}
//                 {secretMessage && <span> - {secretMessage}</span>}
//             </p>
//             <button
//                 className="rounded-full bg-white/10 px-10 py-3 font-semibold text-white no-underline transition hover:bg-white/20"
//                 onClick={sessionData ? () => signOut() : () => signIn()}
//             >
//                 {sessionData ? "Sign out" : "Sign in"}
//             </button>
//         </div>
//     )
// }
