import React from 'react';
import { connect } from 'react-redux';

const SongDetail = ({song}) => {
    if (!song) {
        return <div>Please Select Song</div> ;
    }
    return (
        <div>{song.title}</div>
    );
}

const mapStateToProps = state => {
    return { song: state.selectedSong };
}

export default connect(mapStateToProps)(SongDetail);