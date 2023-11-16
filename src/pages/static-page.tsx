export default function Page({ facts }: any) {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div>
                This is a static side generated page.
            </div>
            <ul>
                {facts.map((fact: any, index: number) => (
                    <li key={index}>{fact.fact}</li>
                ))}
            </ul>
        </main>
    )
}

export async function getStaticProps() {
    // Call an external API endpoint to get posts
    const res = await fetch('https://catfact.ninja/facts')
    const resJSON = await res.json()
    const facts = resJSON.data;

    // By returning { props: { posts } }, the Blog component
    // will receive `posts` as a prop at build time
    return {
        props: {
            facts,
        },
    }
}
