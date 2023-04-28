import { useSelector } from 'react-redux';
import { useDispatch } from "react-redux";
import { pulseActions } from '@/store/pulse-slice';
import { useRouter } from 'next/router';

import styles from '../components/layout/PulseInput.module.css';

function specifyColor(pulseResult) {
    let color;
    switch(pulseResult) {
        case (pulseResult == 0 || pulseResult == 1):
            return color = "grey";
        case (pulseResult < 1):
            return color = "black";
        case (pulseResult < 3 && pulseResult > 2):
            return color = "brown";
        case (pulseResult <= 2 && pulseResult >= 1):
            return color = "blue";
        case (pulseResult < 7 && pulseResult >= 5):
            return color = "green";
        case (pulseResult < 10 && pulseResult >= 7):
            return color = "yellow";
        case (pulseResult < 5 && pulseResult >= 3):
            return color = "violet";
        case (pulseResult >= 10):
            return color = 'orange';
        default:
            return color = 'orange';
    }
}

function specifyMusicNote(color) {
    let mnote;       
    switch(color) {
        case (color = "grey"):
            return mnote = "G, bass clef";
        case (color = "black"):
            return mnote = "D, bass clef";
        case (color = "brown"):
            return mnote = "B, bass clef";
        case (color = "blue"):
            return mnote = "F, bass clef";
        case (color = "green"):
            return mnote = "G, treble clef";
        case (color = "orange"):
            return mnote = "B, treble clef";
        case (color = "yellow"):
            return mnote = "F, treble clef";
        case (color = "violet"):
            return mnote = "E, treble clef";
        default:
            return mnote = 'B, treble clef';
    }
}

function setAudioSrc (mnote) {
    let audiosrc;
    switch(mnote) {
        case (mnote = "G, bass clef"):
            return audiosrc = 'audio/g3grey.mp3';
        case (mnote = "D, bass clef"):
            return audiosrc = 'audio/d3black.mp3';
        case (mnote = "B, bass clef"):
            return audiosrc = 'audio/b3brown.mp3';
        case (mnote = "F, bass clef"):
            return audiosrc = 'audio/f3blue.mp3';
        case (mnote = "G, treble clef"):
            return audiosrc = 'audio/g5green.mp3';
        case (mnote = "B, treble clef"):
            return audiosrc = 'audio/b5orange.mp3';
        case (mnote = "F, treble clef"):
            return audiosrc = 'audio/f-5yellow.mp3';
        case (mnote = "E, treble clef"):
            return audiosrc = 'audio/e5violet.mp3';
        default:
            return audiosrc = 'audio/b5orange.mp3';
    }
}

export default function MusicNotesPage() {
    const pulse1 = useSelector(state => state.pulse.pulseInput1);
    const pulse2 = useSelector(state => state.pulse.pulseInput2);
    const pulse3 = useSelector(state => state.pulse.pulseInput3);
    const dispatch = useDispatch();
    const router = useRouter();

    let pulseResult1 = (pulse1 - pulse2);
    let pulseResult2 = (pulse2 - pulse3);
    let pulseResult3 = (pulse3 - pulse1);
    if (pulseResult1 < 0) { pulseResult1 *= -1; };
    if (pulseResult2 < 0) { pulseResult2 *= -1; };
    if (pulseResult3 < 0) { pulseResult3 *= -1; };
    console.log(pulseResult1);
    console.log(pulseResult2);
    console.log(pulseResult3);

    const color1 = specifyColor(pulseResult1);
    const color2 = specifyColor(pulseResult2);
    const color3 = specifyColor(pulseResult3);
    console.log(color1)

    const note1 = specifyMusicNote(color1);
    const note2 = specifyMusicNote(color2);
    const note3 = specifyMusicNote(color3);    

    const audiosrc1 = setAudioSrc(note1);
    const audiosrc2 = setAudioSrc(note2);
    const audiosrc3 = setAudioSrc(note3);

    const goHomeHandler = (event) => {
        event.preventDefault();
        dispatch(pulseActions.setDefault());
        router.push('/');
    };

    return(
        <div>
            <label>Here are music notes for your mood:</label>
            <div>{note1}</div>
            <div>{note2}</div>
            <div>{note3}</div><br/>
            <audio controls="controls" autoPlay={true}>
                <source src={audiosrc1} type="audio/mpeg" />
            </audio><br/>
            <audio controls="controls">
                <source src={audiosrc2} type="audio/mpeg" />
            </audio><br/>
            <audio controls="controls">
                <source src={audiosrc3} type="audio/mpeg" />
            </audio><br/>
            <div className={styles.control}>
                <button onClick={goHomeHandler}>Home</button>
            </div>
        </div>
    );
}