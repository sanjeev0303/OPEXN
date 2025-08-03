import dynamic from 'next/dynamic';

const Exhibition = dynamic(() => import('./_components/exhibition').then(mod => ({ default: mod.Exhibition })), {
    loading: () => <p>Loading...</p>,
});

export default function Home() {
    return (
        <div>
                <Exhibition />
        </div>
    )
}
