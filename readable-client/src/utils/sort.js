export const SORT_VOTESCORE = 1;
export const SORT_TIMESTAMP = 2;

export const SORT_OPTIONS = [
  {
    value: SORT_VOTESCORE,
    text: "Sort by vote"
  },
  {
    value: SORT_TIMESTAMP,
    text: "Sort by time"
  }
];

export const sortVotescore = (a, b) => a.voteScore < b.voteScore;
export const sortTimestamp = (a, b) => a.timestamp < b.timestamp;

