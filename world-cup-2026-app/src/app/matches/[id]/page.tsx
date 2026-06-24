import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import MatchDetail from '../../../components/MatchDetail';
import matchesData from '../../../data/matches.json';

const MatchPage = () => {
    const router = useRouter();
    const { id } = router.query;
    const [match, setMatch] = useState(null);

    useEffect(() => {
        if (id) {
            const matchDetail = matchesData.find(match => match.id === parseInt(id));
            setMatch(matchDetail);
        }
    }, [id]);

    if (!match) {
        return <div>Loading...</div>;
    }

    return (
        <div className="p-4">
            <MatchDetail match={match} />
        </div>
    );
};

export default MatchPage;