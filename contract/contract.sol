// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract CompetitionLog {

    struct Entry {
        string participantName;
        string competitionName;
        uint256 score;
        uint256 timestamp;
    }

    Entry[] public entries;

    function addEntry(
        string memory _participantName,
        string memory _competitionName,
        uint256 _score
    ) public {
        entries.push(
            Entry(
                _participantName,
                _competitionName,
                _score,
                block.timestamp
            )
        );
    }

    function getEntryCount() public view returns (uint256) {
        return entries.length;
    }

    function getEntry(uint256 index)
        public
        view
        returns (
            string memory participant,
            string memory competition,
            uint256 score,
            uint256 time
        )
    {
        Entry storage e = entries[index];
        return (e.participantName, e.competitionName, e.score, e.timestamp);
    }
}
