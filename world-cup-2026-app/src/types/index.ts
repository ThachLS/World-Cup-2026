export interface Team {
    id: number;
    name: string;
    group: string;
    stats: {
        played: number;
        won: number;
        drawn: number;
        lost: number;
        goalsFor: number;
        goalsAgainst: number;
        points: number;
    };
}

export interface Match {
    id: number;
    homeTeam: Team;
    awayTeam: Team;
    score: {
        home: number;
        away: number;
    };
    venue: string;
    kickoffTime: string;
    status: 'scheduled' | 'live' | 'finished';
    highlightsLink?: string;
}

export interface Group {
    name: string;
    teams: Team[];
    standings: {
        team: Team;
        position: number;
    }[];
}

export interface QualificationProjection {
    topTwo: Team[];
    bestThirdPlaced: Team[];
    roundOf32: Match[];
}